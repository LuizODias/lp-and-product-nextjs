import { MiddlewareFactory, chain } from "@/shared/middlewares/chain";
import { withAuthenticatedMiddleware } from "./shared/middlewares/withAuthenticatedMiddleware";

const middlewares: MiddlewareFactory[] = [withAuthenticatedMiddleware];

export default chain(middlewares);

export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
};
