const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const { dirname } = require('path');


app.use(express.static(path.join(__dirname, "public")));


//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.use(express.static('../src/resources/views'))
app.set('views', path.join(__dirname, 'resources/views'));



app.get('/', (req, res) => {
  res.render('home');
  // return res.send("hello world!")
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});