import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize the GoogleGenAI client with the server-side environment variable
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function POST(req: NextRequest) {
  try {
    const { review, persona, tone } = await req.json();

    if (!review) {
      return NextResponse.json({ error: 'Review payload is required' }, { status: 400 });
    }

    const personaInstructions: Record<string, string> = {
      'artisan': `You are the Master Butcher at The Heritage Meat Co. Australia / The Meat Agent (ABN: 84 629 184 032, Registered Since 2023).
Tone: Warm, deeply proud of Australian paddock-to-plate ethics, pasture provenance, animal welfare, and authentic dry-aging and marbling scores (Aus-Meat BMS 7-9+).
Focus: Acknowledge the specific cut mentioned (${review.purchasedProduct || 'the cut'}), thank the customer warmly, explain the craftsmanship behind the butchery or aging process, and invite them back to the farm-gate allocation.
Sign-off: "Warm regards,\nMaster Butcher & Provenance Team\nThe Heritage Meat Co. Australia"`,

      'logistics': `You are the Cold-Chain Logistics & Quality Resolution Manager at The Heritage Meat Co. Australia / The Meat Agent.
Tone: Highly empathetic, transparent, action-oriented, professional.
Focus: If the customer experienced a delivery issue or late arrival, validate their experience immediately. Explain our cold-chain specifications: double-thick thermal wool liners and solid dry ice gel blocks engineered to maintain a strict core temperature of below 2.5°C for 48 hours across QLD, NSW, and VIC. Confirm a $35 courtesy credit and offer direct follow-up.
Sign-off: "Sincerely,\nCold-Chain Operations Desk\nThe Heritage Meat Co. Australia"`,

      'concierge': `You are the Executive VIP Concierge & Commercial Director at The Heritage Meat Co. Australia / The Meat Agent.
Tone: Refined, executive, managerial reassurance, attentive to high-value wholesale and private allocations.
Focus: Thank the client for their trust in our direct wholesale distribution model. Provide reassurance on consistency, minimum order thresholds, and offer direct executive phone / WhatsApp concierge support (+61 480 804 189) for future bespoke cuts or event allocations.
Sign-off: "With highest regards,\nExecutive Concierge & Management\nThe Heritage Meat Co. Australia"`,

      'pitmaster': `You are the Lead Pitmaster & Competition Smoker Specialist at The Heritage Meat Co. Australia.
Tone: Passionate BBQ brotherhood, expert culinary camaraderie, authentic pitmaster vocabulary (ironbark, peach butcher paper, 14-hour cook, bark formation, fat cap rendering, 94°C internal pull temp).
Focus: Bond over the customer's cook (${review.purchasedProduct || 'brisket/ribs'}), celebrate their results or offer pitmaster tips for resting and spritzing, and discuss wood pairing and marbling render.
Sign-off: "Keep the smoke rolling,\nHead Pitmaster & BBQ Allocations\nThe Heritage Meat Co. Australia"`
    };

    const selectedInstruction = personaInstructions[persona] || personaInstructions['artisan'];
    const toneModifier = tone ? `Tone modifier: Calibrate the language to be distinctly ${tone}.` : '';

    const prompt = `Write an official merchant reply to this customer review on our verified Trustpilot platform.

Customer Details:
- Name: ${review.authorName}
- Location: ${review.authorLocation}
- Rating: ${review.rating} / 5 Stars
- Cut Purchased: ${review.purchasedProduct || 'Heritage Meat Allocation'}
- Review Title: "${review.title}"
- Review Text: "${review.content}"

Guidelines:
1. Write in clear, professional Australian English.
2. Address the customer directly by name (${review.authorName}).
3. Reference their specific cut and feedback naturally.
4. Keep the reply between 80 to 140 words.
5. Strictly adhere to the persona style below:
${selectedInstruction}
${toneModifier}

Do not include markdown quotes, preamble, or placeholders. Return only the final reply text.`;

    // If GEMINI_API_KEY is present, generate with gemini-3.8-flash
    if (process.env.GEMINI_API_KEY) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt
        });

        const replyText = response.text?.trim();
        if (replyText) {
          return NextResponse.json({ reply: replyText });
        }
      } catch (geminiError) {
        console.warn('Gemini generateContent call failed, falling back to persona template:', geminiError);
      }
    }

    // High-fidelity fallback persona generation if API key is pending or in offline test mode
    const fallbackReplies: Record<string, string> = {
      'artisan': `Dear ${review.authorName},

Thank you for your review. We are delighted to hear about your experience with our ${review.purchasedProduct || 'meat allocation'}.

At The Heritage Meat Co. Australia, our direct farm-gate model is rooted in uncompromised pasture provenance and meticulous MSA grading. When portioning whole primals, our master butchers ensure each cut retains its natural intramuscular marbling and structural integrity, delivering the clean, authentic beef flavor our customers expect.

We deeply appreciate your patronage and look forward to preparing your next order from our Queensland facility.

Warm regards,
Master Butcher & Provenance Team
The Heritage Meat Co. Australia`,

      'logistics': `Dear ${review.authorName},

Thank you for sharing your candid feedback regarding your delivery in ${review.authorLocation || 'Australia'}.

Cold-chain integrity is the cornerstone of our operation. Our sub-zero packaging system—combining high-density thermal wool liners with solid dry-ice blocks—is engineered to maintain internal core temperatures below 2.5°C for 48 consecutive hours, regardless of ambient conditions.

To ensure your complete satisfaction, our dispatch management has noted your feedback and applied a courtesy credit to your account. Please don't hesitate to contact our dispatch team on +61 480 804 189 if we can assist further.

Sincerely,
Cold-Chain Operations Desk
The Heritage Meat Co. Australia`,

      'concierge': `Dear ${review.authorName},

Thank you for your valued feedback on The Heritage Meat Co. Australia platform.

We are privileged to supply discerning Australian households and culinary enthusiasts directly from accredited farm gates, bypassing traditional retail markups while maintaining strict temperature and aging standards.

Should you require tailored portioning, specific Wagyu marbling allocations (MB9+), or customized primal cuts for upcoming occasions, our executive concierge desk is available directly on WhatsApp at +61 480 804 189.

With highest regards,
Executive Concierge & Management
The Heritage Meat Co. Australia`,

      'pitmaster': `G'day ${review.authorName},

Appreciate the review and congratulations on cooking the ${review.purchasedProduct || 'primal'}!

There is nothing quite like managing an authentic offset smoke with proper Australian ironbark and watching that fat cap render out into pure gelatin. We work directly with our stations to ensure our packer briskets and short ribs hold a uniform 6mm fat blanket so you never have to deal with dried-out flat ends.

Keep the offset purring, and we'll have your next competition-ready primal prepped and sealed whenever you're ready.

Keep the smoke rolling,
Head Pitmaster & BBQ Allocations
The Heritage Meat Co. Australia`
    };

    return NextResponse.json({
      reply: fallbackReplies[persona] || fallbackReplies['artisan']
    });

  } catch (err: unknown) {
    console.error('Error generating reply:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}
