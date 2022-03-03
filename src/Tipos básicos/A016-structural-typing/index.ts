type verifyUserFn = (user: User, sentUser: User) => boolean;

type User = { name: string; password: string };

export const verifyUser: verifyUserFn = (user, sentUser) => {
  return user.name === sentUser.name && user.password === sentUser.password;
};

const bdUser = { name: 'Carlos', password: '123456' };
const sentUser = { name: 'Carlos', password: '1234567' };

console.log(verifyUser(bdUser, sentUser));
