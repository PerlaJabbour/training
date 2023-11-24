const express = require('express')
const app = express()
//var cors=require('cors')
//const PORT=process.env.PORT || 3000;
//app.use(cors)
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sibling', function (req, res) {
  var data=[
    {id:1,name:'Perla'},
    {id:2,name:'Vanessa'},
    {id:3,name:'Badwi'},
    {id:4,name:'Antonia'}

  ]
  res.send(data);
})
app.listen(3000);
//app.listen(PORT);