var axios = require('axios');

function getCatList () {
  return axios.get('/server/api/cats')
          .then(function (response) { return response.data; });
}

function removeCat (id) {
  return axios.delete('/server/api/cats/' + id);
}

function addCat (movie) {
  return axios.post('/server/api/cats/', movie)
            .then(function (response) { return response.data; });
}

function updateCat (movie) {
  return axios.put('/server/api/cats/' + movie.id, movie);
}

function getCat (id) {
  return axios.get('/server/api/cats/' + id)
          .then(function (response) { return response.data; });
}

module.exports = {
  getCatList: getCatList,
  removeCat: removeCat,
  addCat: addCat,
  updateCat: updateCat,
  getCat: getCat
}
