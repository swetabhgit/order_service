var expect = require('chai').expect;
const sinon = require('sinon')
const mongoose = require('mongoose')
require("dotenv").config()
const {insert} = require('../src/buisness_logic/insert-order')


describe('insert order', function() {
    it('adding order to DB',  function() {
      mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }).then((res)=>{
         insert({"customerId":"swetabh@gmail.com","items":["chineseCornerHakaNoodle"]}).then((resp)=>{
             expect(resp.status).to.equal(403)
            }).catch((err)=>{console.log(err)})
        })
        .catch((err)=>{console.log(err)})
        })
    });
