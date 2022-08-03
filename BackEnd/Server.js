// Imported required packages
const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');
var cors_proxy = require('cors-anywhere');

// MongoDB Databse url
var mongoDatabase = "mongodb://localhost:27017/PetsBazar";

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
() => { console.log('Database is connected') },
err => { console.log('There is problem while connecting database ' + err) }
);

// All the express routes
const petRoutes = require('./Routes/PetsSell.Routes');

// Conver incoming data to JSON format
app.use(bodyParser.json());
/*app.use(
   bodyParser.urlencoded({      // to support URL-encoded bodies
      extended: false,
    })
  );*/

// Enabled CORS
app.use(cors());
app.use(express.static("./Upload/Images"));



// Setup for the server port number
const port = process.env.PORT || 4000;

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

// Routes Configuration
app.use('/pets', petRoutes);

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "192.168.88.45:4000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

// Staring our express server


const server = app.listen(port, function () {
console.log('Server Lisening On Port : ' + port);
});
/*cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, '192.168.88.45',  function() {
  console.log('Running CORS Anywhere on '  + ':' + port);
});
*/
