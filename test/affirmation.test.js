import getAffirmation from '../affirmations.js';
import { assert } from 'chai';

it("returns a string", () => {

  getAffirmation()
    .then(res => {
      console.log(res);
      assert.typeOf(res, string);
    })
});