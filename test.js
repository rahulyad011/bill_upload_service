const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index');
const { describe, it } = require('mocha');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /items', () => {
  it('should return an empty array if there are no bills', (done) => {
    chai.request(app)
      .get('/items')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});

describe('POST /items', () => {
  it('should create a new medical bill', (done) => {
    const newBill = {
      patient: {
          name: "testUser0",
          address: "ABC, NY, USA"
      },
      hospitalName: "ABC General",
      dateOfService: "02/02/2022",
      billAmount: "199"
  }
    chai.request(app)
      .post('/items')
      .send(newBill)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body.patientName).to.equal(newBill.patientName);
        expect(res.body.patientAddress).to.equal(newBill.patientAddress);
        expect(res.body.hospitalName).to.equal(newBill.hospitalName);
        expect(res.body.dateOfService).to.equal(newBill.dateOfService);
        expect(res.body.billAmount).to.equal(newBill.billAmount);
        done();
      });
  });
});
