const express = require('express');
const hbs = require('hbs');
const path = require('path');
const axios = require('axios');

const app = express();

app.set('views', path.join(__dirname, "views"));
app.set('view engine', path.join('hbs'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.hbs');
})



app.get('/movieInfo', (req, res) => {
  const title = req.query.title;
  const apiKey = "383b36"
  axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
    .then((response) => {
      console.log(response);
    })
    .catch((response) => {
      console.log(response);
    })
})

app.listen("3000", () =>{
  console.log("listening on port 3000");
})
