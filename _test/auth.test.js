const request = require('supertest');
const app = require('../server');
const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');

describe('POST /login', () => {
  it('should response with 200 as status code', async () => {
    const rawPassword = 'example12345';
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    const payloadCreateUser = {
      name: 'Fachrul',
      email: 'example@gmail.com',
      password: hashedPassword,
      role: 'member',
    };

    const createdUser = await userRepository.create(payloadCreateUser);

    const payloadLogin = {
      email: payloadCreateUser.email,
      password: rawPassword,
    };

    return request(app)
      .post('/login')
      .send(payloadLogin)
      .set('Content-type', 'application/json')
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res._body.data.token).not.toEqual(null);

        // Delete Test Data
        userRepository.deleteByID({ id: createdUser.id });
      });
  });
});

describe('POST /register', () => {
  it('should response with 201 as status code', async () => {
    const payload = {
      name: 'Fachrul',
      email: 'example@gmail.com',
      password: 'example12345',
      role: 'member',
    };

    return request(app)
      .post('/register')
      .field('name', payload.name)
      .field('email', payload.email)
      .field('password', payload.password)
      .field('role', payload.role)
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res._body.data).not.toEqual(null);

        // Delete Test Data
        userRepository.deleteByID({ id: res._body.data.id });
      });
  });
});
