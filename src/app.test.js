const app = require('./app');
const supertest = require('supertest');
//const { describe, it } = require('jest-circus');
const request = supertest(app);


describe('/testNode', () => {      //pour tester les endpoint si sa focnctione 
  it('should return a response', async () => {
    const response = await request.get('/testNode');
    expect(response.status).toBe(200);
    expect(response.text).toBe('yes le testNode endpoint fonctionne avec app');
  });

}); 

  /*
  test("POST /api/add should return addition result", async () => {
    const response = await request(app)
      .post("/api/add")
      .send({ a: 5, b: 3 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 8 });
  });

  test("POST /api/add should return 400 for invalid input", async () => {
    const response = await request(app)
      .post("/api/add")
      .send({ a: "hello", b: 3 });

    expect(response.statusCode).toBe(400);
  });

  

 }); */

