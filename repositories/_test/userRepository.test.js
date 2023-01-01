const userRepository = require('../userRepository');

describe('create user', () => {
  it('should create user to db', async () => {
    const userToCreate = {
      id: 1,
      email: 'coba@example.com',
      name: 'Fachrul',
      password: 'example12345',
      role: 'member',
    };

    const createdUser = await userRepository.create(userToCreate);
    // console.log(createdUser);

    // Assertion
    expect(createdUser.id).toEqual(createdUser.id);
    expect(createdUser.email).toEqual(createdUser.email);
    expect(createdUser.name).toEqual(createdUser.name);
    expect(createdUser.password).toEqual(createdUser.password);
    expect(createdUser.role).toEqual(createdUser.role);

    // Delete Test Data
    await userRepository.deleteByID({ id: createdUser.id });
  });
});

describe('get user by id', () => {
  it('should get user from db', async () => {
    const userToCreate = {
      id: 1,
      email: 'coba@example.com',
      name: 'Fachrul',
      password: 'example12345',
      role: 'member',
    };

    const createdUser = await userRepository.create(userToCreate);
    const post = await userRepository.getByID({ id: createdUser.id });

    expect(post.id).toEqual(createdUser.id);
    expect(post.email).toEqual(createdUser.email);
    expect(post.name).toEqual(createdUser.name);
    expect(post.password).toEqual(createdUser.password);
    expect(post.role).toEqual(createdUser.role);

    await userRepository.deleteByID({ id: createdUser.id });
  });
});

describe('get user by email', () => {
  it('should get user from db', async () => {
    const userToCreate = {
      id: 1,
      email: 'coba@example.com',
      name: 'Fachrul',
      password: 'example12345',
      role: 'member',
    };

    const createdUser = await userRepository.create(userToCreate);
    const post = await userRepository.getByEmail({ email: createdUser.email });

    expect(post.email).toEqual(createdUser.email);
    expect(post.password).toEqual(createdUser.password);
    expect(post.role).toEqual(createdUser.role);

    await userRepository.deleteByID({ id: createdUser.id });
  });
});
