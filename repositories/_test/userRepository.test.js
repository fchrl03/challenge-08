const userRepository = require('../userRepository');

describe('create user', () => {
  it('should create post to db', async () => {
    const userToCreate = {
      id: 1,
      email: 'coba@example.com',
      password: 'example12345',
      role: 'member',
    };

    const createdUser = await userRepository.create(userToCreate);
    console.log(createdUser);

    // Assertion
    expect(createdUser.id).toEqual(createdUser.id);
    expect(createdUser.email).toEqual(createdUser.email);
    expect(createdUser.password).toEqual(createdUser.password);
    expect(createdUser.role).toEqual(createdUser.role);

    // Delete Test Data
    await userRepository.deleteByID({ id: createdUser.id });
  }, 60_000);
});
