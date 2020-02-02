import a_list  = require('../src/a_list');
import { expect } from 'chai';
import 'mocha';

describe('function tests',
  () => {
    it('arrayToList()', (done) => {
      const testArrayPass = [ 1, 2, 3 ]
      const testArrayError: number[] = []
      
      const resultPass = a_list.arrayToList(testArrayPass)
      const resultError = a_list.arrayToList(testArrayError)

      expect(resultPass).to.deep.equal(
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
      
      expect(resultError).to.be.an.instanceof(a_list.ZeroLengthArrayError)

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

