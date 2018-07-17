const expect = require('chai').expect;
const {convertToC, convertToF} = require('../tempConverter');

describe('convert to Celsius from Fehranheit', ()=>{
    it('converts', ()=> {
        expect(convertToC(100)).to.eql(37.7778)
    })
})

describe('convert to Celsius from Fehranheit', ()=>{
    it('converts', ()=> {
        expect(convertToF).to.be.ok
    })
})
