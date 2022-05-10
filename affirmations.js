const fetch = reuire("node-fetch");

function getAffirmation() {
  return fetch("https://dulce-affirmations-api.herokuapp.com/affirmation")
    .then(res => {
      console.log(res)
      return res.json();
    });  
}

module.exports = { getAffirmation }