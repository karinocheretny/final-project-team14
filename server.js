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

var postdata = require("./reportData.json")
console.log(postdata)
var keys = Object.keys(postdata);


for( var i = 0; i < keys.length; i++){
  var postData = postdata[keys[i]]
  console.log("==>Data: ", postData)
}


app.get('/', function (req, res, next) {
    res.status(200).render('basicPage', {

    })
})



app.get('/districts/:district', function (req, res, next) {
    
    var district_name = req.params.district.toLowerCase();
    console.log("==District: ", district_name)
    var newReportdata = []
    newReportdata.push(newReportdata[keys[district_name]])
    
    if(postData[keys[district_name]]){
    res.status(200).render('basicPage', {    
        post: newReportdata    
    })}
    else{
        console.log("Nope")
        next();
    }})

app.get('*', function (req, res) {
    console.log("blah blah")
    res.status(404).render('404', {
        error_num:'404'
    })
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});
