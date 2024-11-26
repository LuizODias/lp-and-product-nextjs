import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export function withAuthenticatedMiddleware() {
  return withMiddlewareAuthRequired({
    returnTo: "/dashboard"
  });
}
