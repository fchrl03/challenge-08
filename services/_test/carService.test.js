const carService = require('../carService');

describe('create car', () => {
  it('should create car to db', async () => {
    // Create payload
    const carToCreate = {
      id: 1,
      name: 'Ford',
      model: 'F150',
      picture: 'hello.png',
      rent_price: 5000,
      capacity: 2,
      description: 'Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.',
      available: true,
      type: 'Sedan',
      year: 2022,
      user_id: 1,
      createdBy: 'Fachrul',
    };

    // Expected Response
    const expectedCreatedCar = {
      id: 1,
      name: 'Ford',
      model: 'F150',
      picture: 'hello.png',
      rent_price: 5000,
      capacity: 2,
      description: 'Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.',
      available: true,
      type: 'Sedan',
      year: 2022,
      user_id: 1,
      createdBy: 'Fachrul',
    };

    const expectedCreatedCarService = {
      status: true,
      status_code: 201,
      message: 'car created successfully',
      data: expectedCreatedCar,
    };

    // Create service mock function
    const mockCarService = carService;

    mockCarService.create = jest.fn().mockImplementation(() => Promise.resolve(expectedCreatedCarService));

    const createdCarResponse = await mockCarService.create(carToCreate);

    // Assertion
    expect(expectedCreatedCarService.status).toEqual(createdCarResponse.status);
    expect(expectedCreatedCarService.status_code).toEqual(createdCarResponse.status_code);
    expect(expectedCreatedCarService.message).toEqual(createdCarResponse.message);
    expect(expectedCreatedCarService.data).toEqual(createdCarResponse.data);
  });
});
