var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var header = require('./views/partials/navbar.handlebars')



var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({defaultLayout: null }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req, res, next) {
    res.status(200).render('basicPage', {

    })
})


app.get('/districts/:district', function (req, res, next) {
    var district_name = req.params.district.toLowerCase();
    console.log("==District: ", district_name)
    res.status(200).render('basicPage', {        
})
});

app.get('*', function (req, res) {
    res.status(404).render('basicPage', {
    })
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});
