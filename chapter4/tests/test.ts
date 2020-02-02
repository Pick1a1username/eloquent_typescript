import a_list  = require('../src/a_list');
import { expect } from 'chai';
import 'mocha';

describe('First test', 
  () => { 
    it('should return true', () => { 
      const result = a_list.helloTest();
      expect(result).to.equal(true); 
  }); 
});

describe('arrayToList()',
  () => {
    it('arrayToList()', (done) => {
      const testArray = [ 1, 2, 3 ]
      const result = a_list.arrayToList(testArray)

      expect(result).to.deep.equal(
        {
          value: 1,
          rest: {
            value: 2,
            rest: {
              value: 3,
              rest: null
            }
          }
        })

      done()
    })
  }
)