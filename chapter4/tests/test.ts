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

describe('function tests',
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

    it('listToArray()', (done) => {
      const testList = {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null
          }
        }
      }
      const result = a_list.listToArray(testList)

      expect(result).to.deep.equal([ 1, 2, 3 ])

      done()
    })

    it('prepend()', (done) => {
      const testNumber = 0
      const testList = { value: 1, rest: null }

      const result = a_list.prepend(testNumber, testList)

      expect(result).to.deep.equal({ value: 0, rest: { value: 1, rest: null }})

      done()
    })

    it('nth()', (done) => {
      const testList = {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null
          }
        }
      }

      const resultInRange = a_list.nth(testList, 1)
      const resultOutRange = a_list.nth(testList, 3)

      expect(resultInRange).to.deep.equal(2)
      expect(resultOutRange).to.deep.equal(undefined)

      done()
    })

    it('nthRecursive()', (done) => {
      const testList = {
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null
          }
        }
      }

      const resultInRange = a_list.nthRecursive(testList, 1)
      const resultOutRange = a_list.nthRecursive(testList, 3)

      expect(resultInRange).to.deep.equal(2)
      expect(resultOutRange).to.deep.equal(undefined)

      done()
    })
  }
)

