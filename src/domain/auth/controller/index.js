import AuthService from '../services';

export const signIn = async (req, res) => {
  const { body: { token } } = req;
  const user = await AuthService().signIn(token);
  res.json(user);
}
