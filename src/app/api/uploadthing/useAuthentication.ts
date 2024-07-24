import { useUser } from '@clerk/nextjs';

export function Authentication() {
  const { user } = useUser();

  const isAuthenticated = !!user;

  return { isAuthenticated, user };
}
