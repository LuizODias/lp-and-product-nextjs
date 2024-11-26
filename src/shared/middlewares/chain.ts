import { NextMiddlewareResult } from "next/dist/server/web/types";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

export type CustomMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse,
) => NextMiddlewareResult | Promise<NextMiddlewareResult>;

export type MiddlewareFactory = (
  middleware: CustomMiddleware,
) => NextMiddleware;

export function chain(
  functions: MiddlewareFactory[],
  index = 0,
): NextMiddleware {
  const current = functions[index];
  if (!!current) {
    const next = chain(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}
