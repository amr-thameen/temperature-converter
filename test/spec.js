const expect = require('chai').expect;
const {convertToC, convertToF} = require('../tempConverter');

describe('convert to Celsius from Fehranheit', ()=>{
    it('converts', ()=> {
        expect(convertToC(100)).to.eql(37.78)
    })
})

describe('convert to Feh from C', ()=>{
    it('converts', ()=> {
        expect(convertToF(36)).to.eql(96.8)
    })
})
