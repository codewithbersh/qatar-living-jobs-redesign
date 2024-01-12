import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  message: publicProcedure.query(() => {
    return "This is my message";
  }),
});

export type AppRouter = typeof appRouter;
