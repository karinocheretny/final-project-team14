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

var reportData = require("./reportData.json")

var districtdata = require("./districtData.json")

var neighborhooddata = require("./neighborhoods.json")



var neighborhoods = Object.keys(neighborhooddata)
console.log(reportData)
var keys = Object.keys(reportData);


for( var i = 0; i < keys.length; i++){
  var postData = reportData[keys[i]]
  console.log("==>Data: ", postData)
}

/* Gets the data for each district (their neighborhoods) */
for( var i = 0; i < keys.length; i++){
    var neighborhooddata2 = neighborhooddata[keys[i]]
    console.log("==>Data: ", neighborhooddata2)
  }


/* INDIVIDUAL PAGES BASED ON URL */

app.get('/', function (req, res, next) {
    res.status(200).render('basicPage', {
        mainPage: true,
        showPosts: false
    })
})



app.get('/home', function (req, res, next) {
    res.status(200).render('basicPage', {
        mainPage: true,
        showPosts: false
    })
})



app.get('/emergency', function (req, res, next) {
    res.status(200).render('emergency', {

    })
})



app.get('/districts', function (req, res, next){
    if (districtdata){
        res.status(200).render('districtpage', {
            districts:districtdata,
            neighborhoods:neighborhooddata

            
    })}
})


/* posts page, adds in posts from the json script */
app.get('/posts', function (req, res, next){
    if (reportData){
        

    res.status(200).render('postpage', {
        posts:reportData
    })}
    else{
        next()
    }
});



app.get('*', function (req, res) {
    res.status(404).render('404', {
        error_num:'404'
    })
});



app.listen(port, function () {
    console.log("== Server is listening on port", port);
});


