var express = require('express');
/*var routes = require('./routes');
var user = require('./routes/user');*/
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
/*var session = require('express-session');*/
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.argv[2] || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
/*app.use(favicon(""));*/
app.use(logger('dev'));
app.use(methodOverride());
/*app.use(session({ resave: true,
    saveUninitialized: true,
    secret: 'uwotm8' }));*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
console.log(path.join(__dirname, 'front'))
app.use(process.argv[3]||"",express.static(path.join(__dirname, 'front')));

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

/*app.get('/', routes.index);
app.get('/users', user.list);*/

app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    if(process.argv[3]){
        console.log("http://localhost:"+app.get('port')+process.argv[3]+"/app/index.html")

    }else{
        console.log("http://localhost:"+app.get('port')+"/app/index.html")

    }
});