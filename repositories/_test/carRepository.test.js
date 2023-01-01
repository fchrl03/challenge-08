const carRepository = require('../carRepository');

describe('create car', () => {
  it('should create car to db', async () => {
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
    const createdCar = await carRepository.create(carToCreate);

    expect(createdCar.id).toEqual(createdCar.id);
    expect(createdCar.name).toEqual(createdCar.name);
    expect(createdCar.model).toEqual(createdCar.model);
    expect(createdCar.picture).toEqual(createdCar.picture);
    expect(createdCar.rent_price).toEqual(createdCar.rent_price);
    expect(createdCar.capacity).toEqual(createdCar.capacity);
    expect(createdCar.description).toEqual(createdCar.description);
    expect(createdCar.available).toEqual(createdCar.available);
    expect(createdCar.type).toEqual(createdCar.type);
    expect(createdCar.year).toEqual(createdCar.year);
    expect(createdCar.user_id).toEqual(createdCar.user_id);
    expect(createdCar.createdBy).toEqual(createdCar.createdBy);

    await carRepository.deleteByID({ id: createdCar.id });
  });
});

describe('get by id car', () => {
  it('should get by id car to db', async () => {
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
    const createdCar = await carRepository.create(carToCreate);
    const post = await carRepository.getByID({ id: createdCar.id, deletedBy: createdCar.createdBy });

    expect(post.id).toEqual(createdCar.id);
    expect(post.name).toEqual(createdCar.name);
    expect(post.model).toEqual(createdCar.model);
    expect(post.picture).toEqual(createdCar.picture);
    expect(post.rent_price).toEqual(createdCar.rent_price);
    expect(post.capacity).toEqual(createdCar.capacity);
    expect(post.description).toEqual(createdCar.description);
    expect(post.available).toEqual(createdCar.available);
    expect(post.type).toEqual(createdCar.type);
    expect(post.year).toEqual(createdCar.year);
    expect(post.user_id).toEqual(createdCar.user_id);
    expect(post.createdBy).toEqual(createdCar.createdBy);

    await carRepository.deleteByID({ id: createdCar.id });
  });
});
