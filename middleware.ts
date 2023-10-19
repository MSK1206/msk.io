import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    async authorized({ req, token }) {
      if (
        req.nextUrl.pathname === '/admin' ||
        req.nextUrl.pathname === '/protect'
      ) {
        return !!token;
      }
      return true;
    },
  },
});
