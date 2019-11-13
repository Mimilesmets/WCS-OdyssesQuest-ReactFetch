const { default: axios } = require('axios');

axios("https://randomuser.me/api?nat=fr")
    .then(result => console.log(result.data.results[0]))
    .catch(err => console.error(err));