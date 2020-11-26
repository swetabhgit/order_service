var expect = require('chai').expect;
const sinon = require('sinon')
const mongoose = require('mongoose')
require("dotenv").config()
const {deleteOrder} = require('../src/buisness_logic/delete-order')


describe('deleting customer', function() {
    it('deleted',  function() {
      mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }).then((res)=>{
           deleteOrder("ser@gmil.com").then((resp)=>{
             expect(resp.deletedCount).to.equal(0)
            }).catch((err)=>{console.log(err)})
        })
        .catch((err)=>{console.log(err)})
        })
    });
