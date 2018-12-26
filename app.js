let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
//let index = require('./routes/index');


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

//app.use('/api', apiRoutes);
//app.use('/user', userRoutes);
//app.use('/', index);
// Catch all other routes and return the index file

app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, '/dist/FrontEndTask/index.html'));
});


let server = app.listen(3000, function () {
  console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
module.exports = app;

