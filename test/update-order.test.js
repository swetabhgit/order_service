var expect = require('chai').expect;
const sinon = require('sinon')
const mongoose = require('mongoose')
require("dotenv").config()
const {updateOrder} = require('../src/buisness_logic/update-order')


describe('deleting customer', function() {
    it('deleted', function() {
      mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }).then((res)=>{
           updateOrder("test@gmial.com","test old", "test new").then((resp)=>{
             expect(resp.status).to.equal(404)
            }).catch((err)=>{console.log(err)})
        })
        .catch((err)=>{console.log(err)})
        })
    });
