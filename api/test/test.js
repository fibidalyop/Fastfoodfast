process.env.NODE_ENV = 'test';
import { expect } from "chai"
import chai from "chai"
import chaiHttp from 'chai-http'
import server from '../testapp'

import model from '../controller/models/Order'

import db from '../dataStructure/OrderDatabase'

const should = chai.should();

chai.use(chaiHttp);


describe('/POST order', () => {
      it('it should POST an order ', (done) => {
          let order = {
              orderId: 1,
              quantity: 22,
              productname: "amala",
              status: "pending"
          }
        chai.request(server)
            .post('/api/v1/orders')
            .send(order)
            .end((err, res) => {
                  res.should.have.status(201);
           
              done();
            });
      });

  });

describe('/GET orders', () =>{
	it('should list ALL orders', (done) =>{
		chai.request(server)
		.get('/api/v1/orders')
		.end((err, res) => {
			should.not.exist(err);
			res.should.have.status(200);
  			done();
		});
	});
});

describe('/GET/:orderId ', () => {
      it('it should GET an order id', (done) => {
          
              chai.request(server)
            .get('/api/v1/orders/1')
            .end((err, res) => {
            	should.not.exist(err);
                res.should.have.status(200);
             	done();
           
          });

      });
  });
describe('/PUT/:id order', () => {
      it('it should UPDATE order by id', (done) => {
        
               
                chai.request(server)
                .put('/api/v1/orders/1')
                .send({orderId: 1, quantity: 22, productname: "amala", status: "completed"})
                .end((err, res) => {
                      should.not.exist(err);
                      res.should.have.status(200);
                  done();
                
          });
      });
  });

