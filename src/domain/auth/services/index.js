import { verifyAuthToken } from '@Adapters/auth';
import UserService from '@Domain/user/services';

const AuthService = () => {
  return ({
    async signIn(token) {
      const { id, email, email_verified } = await verifyAuthToken(token);
      const [user, created] = await UserService().findOrCreate(id, email);

      return { user, created, email_verified };
    },
  });
};

export default AuthService;
