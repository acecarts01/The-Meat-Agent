import type { BlogPost } from './blog-data';
import { BATCH8A_POSTS } from './blog-posts-batch8a';
import { BATCH8B_POSTS } from './blog-posts-batch8b';
import { BATCH8C_POSTS } from './blog-posts-batch8c';
import { BATCH8D_POSTS } from './blog-posts-batch8d';

// Batch 8: the last older posts, rewritten to the blog rule (wholesale beef, sausages, buying meat online, pork).
export const BATCH8_POSTS: BlogPost[] = [...BATCH8A_POSTS, ...BATCH8B_POSTS, ...BATCH8C_POSTS, ...BATCH8D_POSTS];
