const express = require('express');
const app = express();
const port = 3100
const hbs = require('express-handlebars');
const res = require('express/lib/response');

app.listen(port, () => {
  console.log('server on ')
})

app.set('view engine', 'handlebars');

app.engine('handlebars', hbs.engine(
  {
    layoutDir: __dirname + "/views",
    partialsDir: __dirname + "/views/components"
  }
))
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.get('/', (req, res) => {
  res.render('inicio',{
    colores: [ 'primary','secondary','success','danger','warning','info','light','dark'],
    color: 'info'
  })
})

app.get('/:color', (req, res) => {
  const color = req.params.color
  res.render('inicio',{
    color: color
  })
})