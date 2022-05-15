
import { Response } from 'superagent';
import  sinon from 'sinon';
import chai from 'chai';
import User from '../database/models/User';
import chaiHttp = require('chai-http');
import { app } from '../api/app';
import { tokenAdmin, tokenUser, userCreated, userData, userLogin } from './mocks';
import { UserCreatedI } from '../../src/domain/domain';

chai.use(chaiHttp);
const {expect} = chai;

let chaiHttpResponse: Response;


describe('Test Route user', () => {
  
  describe('get/user', () => {
    before(async () => {
      sinon
        .stub(User, "findAll")
        .resolves(userData as User[]);
    });
  
    after(()=>{
      (User.findAll as sinon.SinonStub).restore();
    })
  
    it('get/user, return user not authorizate', async () => {
      chaiHttpResponse = await chai
         .request(app)
         .get('/user')
         .set({'Authorization': tokenUser})
         .send()
      
      expect(chaiHttpResponse).to.have.status(401);
      expect(chaiHttpResponse.body).to.be.a('object');
      expect(chaiHttpResponse.body).to.include.keys('message');
      expect(chaiHttpResponse.body.message).to.equal('User Unauthorized');
  
    });
  
    it('get/user, status code 200', async () => {
      chaiHttpResponse = await chai
         .request(app)
         .get('/user')
         .set({'Authorization': tokenAdmin})
         .send()
      
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.a('array');
      expect(chaiHttpResponse.body).length(2);
  
    });
  })

  describe('post/user/login', () => {
    before(async () => {
      sinon
        .stub(User, "findOne")
        .resolves(userData[0] as User);
    });
  
    after(()=>{
      (User.findOne as sinon.SinonStub).restore();
    })
  
    it('post/user/login, return user logged', async () => {
      chaiHttpResponse = await chai
         .request(app)
         .post('/user/login')
         .send(userLogin)
      
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.a('object');
      expect(chaiHttpResponse.body).to.include.all.keys('id','name','email','role','coins', 'token');
  
    });

    it('post/user/login, return user logged', async () => {
      chaiHttpResponse = await chai
         .request(app)
         .post('/user/login')
         .send({
           email: 'julio@gmail.com',
           password: '12345678'
          })
      console.log(chaiHttpResponse);
      
      expect(chaiHttpResponse).to.have.status(404);
      expect(chaiHttpResponse.body).to.be.a('string');
      expect(chaiHttpResponse.body).to.equal('Invalid Password');
  
    });
  
  })
 
})