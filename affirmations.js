import fetch from 'node-fetch';

export default function getAffirmation() {
  return fetch("https://dulce-affirmations-api.herokuapp.com/affirmation")
    .then(res => {
      console.log(res)
      return res.json();
    });  
}

// module.exports = { getAffirmation }