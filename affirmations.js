import fetch from 'node-fetch';

export default async function getAffirmation() {
  const res = await fetch("https://dulce-affirmations-api.herokuapp.com/affirmation");

  const data = await res.json();
  //1
  return data;
}

// module.exports = { getAffirmation }