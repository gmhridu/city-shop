import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
 
export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    image: v.string(),
    role: v.string(),
  },
  async handler(ctx, args) {
    return await ctx.db.insert("user", args);
  },
});

export const getUser = query({
  args: {
    email: v.string(),
  },
 async handler(ctx, args) {
   const result = await ctx.db.query("user")
     .filter((q) => q.eq(q.field("email"), args.email))
     .collect();
   
   return result;
  },
})