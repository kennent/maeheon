// Setup basic express server
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var cookieparser = require('cookie-parser');
var path = require('path');
var server = require('http').createServer(app);
var port = process.env.PORT || 80;

// server listen
server.listen(port, () => { console.log('Server listening at port %d', port); });

// set
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Routing
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use('/', require('./router/router.js'));