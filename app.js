var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
var cookieParser = require('cookie-parser');

var app = express();
var routes = require('./routes/indexRoute');

// view engine - EJS
app.set('view engine', 'ejs');

// body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// express-static
app.use(express.static(path.resolve(__dirname, 'public')));


// cookie-parser: Necessário para que as mensagens flash funcionem.
app.use(cookieParser('KDJ*#ISJ'));

// session
app.use(session({
    secret: 'JLJSK%JH@',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// express-flash
app.use(flash());

app.use('/', routes);

app.listen(3333, () => {
    console.log('Aplicação rodando normalmente!');
});
