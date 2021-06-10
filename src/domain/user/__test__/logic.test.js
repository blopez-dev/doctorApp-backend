
export const getCurrentUser = agent => agent.get(`${apiRoot}/users/me`);

it('Should get the current user', async () => {
    const { users } = getInstance();
    const { admin: [adminUser] } = users;

    const { body: user } = await getCurrentUser(adminUser.agent);

    expect(user.name).toBe(adminUser.name);
});
