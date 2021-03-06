const express = require('express');
const hbs = require('hbs');
const path = require('path');
const axios = require('axios');

const port = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, "views"));
app.set('view engine', path.join('hbs'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.hbs');
})



app.get('/movieInfo', (req, res) => {
  const title = req.query.title;
  // const apiKey = process.env.API_KEY
  const apiKey = "383b36";
  axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
    .then((response) => {
      const poster = response.data.Poster;
      const director = response.data.Director;
      const actors = response.data.Actors;
      const dvd = response.data.DVD;
      res.send({poster, director, actors, dvd});
    })
    .catch((response) => {
      res.send({});
    })
})

app.listen(process.env.PORT, () =>{
  console.log("Active on port 3000");
})
