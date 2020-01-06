const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
// const expect = chai.expect;

chai.use(chaiHttp);

describe('GET example', () => {
  it('it should GET sample data', () => {
    chai
      .request(`http://localhost:8000`)
      .get('/api/example')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
      .catch(err => err);
  });
});

describe('GET user', () => {
  it('it should GET sample user data', () => {
    chai
      .request(`http://localhost:8000`)
      .get('/api/profile')
      .then((err,res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('array');
        done()
      })
      .catch(err => err)
  });
});

describe('Get Body weight workouts', () => {
  it('it should GET workouts under body weight collection', () => {
    chai 
      .request(`http:localhost:8000`)
      .get('/api/bodyweight')
      .then((err,res) => {
        should.not.exist(err)
        should.exist(res)
        res.should.have.status(200)
        res.body.should.be.a('array')
        done()
      })
  })
})