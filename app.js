const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');


var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var fs = require('fs');
var Estructurador = require('./Estructurador');
const { SSL_OP_NETSCAPE_CHALLENGE_BUG } = require('constants');

//set IBM cloud credentials in this section
var personalityInsights = new PersonalityInsightsV3({
  version_date: '2017-10-13',
  username: 'apikey',
  password: 'ENDRzcACfaPDl_LD0-dNTJvPuAqOiivFvpeCz0wm6oY6'
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });
// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index'));

app.get('/upload', (req, res) => {
res.render('upload', {qs: req.query});
});
var x;
app.post('/upload', urlencodedParser ,(req, res) => {
  //here we already have req.body data
  // console.log(req.body);
  // console.log(typeof req.body);
  // console.log(JSON.stringify(req.body));
  // console.log(typeof JSON.stringify(typeof req.body));

var cont = JSON.stringify(req.body.p1 + req.body.p2 + req.body.p3 + req.body.p4 + req.body.p5);


var audaciaN;
console.log(cont);
  var profileParams = {
    // Get the content from the JSON file.

    content: cont,
    content_type: 'text/plain',
    consumption_preferences: true,
    content_language: 'es',
    accept_language: 'es',
    raw_scores: true
  };
  personalityInsights.profile(profileParams, function(error, profile) {
  if (error) {
    console.log(error);
  } else {
    //console.log(JSON.stringify(profile, null, 2));
    x = profile;
    var audaciaN = JSON.stringify(x.personality[0].children[0].name, null, 2);
    var audaciaP = JSON.stringify(x.personality[0].children[0].percentile, null, 2);
    var inAr = JSON.stringify(x.personality[0].children[1].name, null, 2);
    var inArP = JSON.stringify(x.personality[0].children[1].percentile, null, 2);
    var emocional = JSON.stringify(x.personality[1].children[2].name, null, 2);
    var emocionalP = JSON.stringify(x.personality[1].children[2].percentile, null, 2);
    var imagin = JSON.stringify(x.personality[0].children[3].name, null, 2);
    var imaginP = JSON.stringify(x.personality[0].children[3].percentile, null, 2);
    var intelec = JSON.stringify(x.personality[0].children[4].name, null, 2);
    var intelecP = JSON.stringify(x.personality[0].children[4].percentile, null, 2);
    var desafAut = JSON.stringify(x.personality[0].children[5].name, null, 2);
    var desafAutP = JSON.stringify(x.personality[0].children[5].percentile, null, 2);
    var resN = JSON.stringify(x.personality[1].name, null, 2);
    var resP = JSON.stringify(x.personality[1].percentile, null, 2);
    var neceN = JSON.stringify(x.personality[1].children[0].name, null, 2);
    var neceP = JSON.stringify(x.personality[1].children[0].percentile, null, 2);
    var caut = JSON.stringify(x.personality[1].children[1].name, null, 2);
    var cautP = JSON.stringify(x.personality[1].children[1].percentile, null, 2);
    var obN = JSON.stringify(x.personality[1].children[2].name, null, 2);
    var obP = JSON.stringify(x.personality[1].children[2].percentile, null, 2);
    var disN = JSON.stringify(x.personality[1].children[3].name, null, 2);
    var disP = JSON.stringify(x.personality[1].children[3].percentile, null, 2);
    var autoN = JSON.stringify(x.personality[1].children[4].name, null, 2);
    var autoP = JSON.stringify(x.personality[1].children[4].percentile, null, 2);
    var autEN = JSON.stringify(x.personality[1].children[5].name, null, 2);
    var autEP = JSON.stringify(x.personality[1].children[5].percentile, null, 2);
    var extroN = JSON.stringify(x.personality[2].name, null, 2);
    var extroP = JSON.stringify(x.personality[2].percentile, null, 2);
    var actN = JSON.stringify(x.personality[2].children[0].name, null, 2);
    var actP = JSON.stringify(x.personality[2].children[0].percentile, null, 2);
    var acN = JSON.stringify(x.personality[2].children[0].name, null, 2);
    var acP = JSON.stringify(x.personality[2].children[0].percentile, null, 2);
    var segN = JSON.stringify(x.personality[2].children[1].name, null, 2);
    var segP = JSON.stringify(x.personality[2].children[1].percentile, null, 2);
    var alegN = JSON.stringify(x.personality[2].children[2].name, null, 2);
    var alegP = JSON.stringify(x.personality[2].children[2].percentile, null, 2);
    var busqN = JSON.stringify(x.personality[2].children[3].name, null, 2);
    var busqP = JSON.stringify(x.personality[2].children[3].percentile, null, 2);
    var simN = JSON.stringify(x.personality[2].children[4].name, null, 2);
    var simP = JSON.stringify(x.personality[2].children[4].percentile, null, 2);
    var sociaN = JSON.stringify(x.personality[2].children[5].name, null, 2);
    var sociaP = JSON.stringify(x.personality[2].children[5].percentile, null, 2);
    var amabN = JSON.stringify(x.personality[3].name, null, 2);
    var amabP = JSON.stringify(x.personality[3].percentile, null, 2);
    var altruN = JSON.stringify(x.personality[3].children[0].name, null, 2);
    var altruP = JSON.stringify(x.personality[3].children[0].percentile, null, 2);
    var cooN = JSON.stringify(x.personality[3].children[1].name, null, 2);
    var cooP = JSON.stringify(x.personality[3].children[1].percentile, null, 2);
    var modesN = JSON.stringify(x.personality[3].children[2].name, null, 2);
    var modesP = JSON.stringify(x.personality[3].children[2].percentile, null, 2);
    var intraN = JSON.stringify(x.personality[3].children[3].name, null, 2);
    var intraP = JSON.stringify(x.personality[3].children[3].percentile, null, 2);
    var compaN = JSON.stringify(x.personality[3].children[4].name, null, 2);
    var compaP = JSON.stringify(x.personality[3].children[4].percentile, null, 2);
    var confianN = JSON.stringify(x.personality[3].children[5].name, null, 2);
    var confianP = JSON.stringify(x.personality[3].children[5].percentile, null, 2);
    var rangoN = JSON.stringify(x.personality[4].name, null, 2);
    var rangoP = JSON.stringify(x.personality[4].percentile, null, 2);
    var vehemN = JSON.stringify(x.personality[4].children[0].name, null, 2);
    var vehemP = JSON.stringify(x.personality[4].children[0].percentile, null, 2);
    var preocN = JSON.stringify(x.personality[4].children[1].name, null, 2);
    var preocP = JSON.stringify(x.personality[4].children[1].percentile, null, 2);
    var y=Estructurador.cleansing(x);
    console.log(y);
  }

  res.render('profile', {
    au: audaciaN,
    aup: audaciaP,
    inar: inAr,
    inarp: inArP,
    emo: emocional,
    emoP:emocionalP,
    ima:imagin,
    imaP:imaginP,
    inte:intelec,
    intep:intelecP,
    desa:desafAut,
    desaP:desafAutP,
    rN:resN,
    rP:resP,
    nceN:neceN,
    nceP:neceP,
    cauN:caut,
    cauP:cautP,
    oN:obN,
    oP:obP,
    diN:disN,
    diP:disP,
    auN:autoN,
    auP:autoP,
    auEN:autEN,
    auEP:autEP,
    exN:extroN,
    exP:extroP,
    acN:actN,
    acP:actP,
    aN:acN,
    aP:acP,
    seN:segN,
    seP:segP,
    aleN:alegN,
    aleP:alegP,
    busN:busqN,
    busP:busqP,
    siN:simN,
    siP:simP,
    socN:sociaN,
    socP:sociaP,
    amaN:amabN,
    amaP:amabP,
    altN:altruN,
    altP:altruP,
    coN:cooN,
    coP:cooP,
    modN:modesN,
    modP:modesP,
    intN:intraN,
    intP:intraP,
    comN:compaN,
    comP:compaP,
    confN:confianN,
    confP:confianP,
    raN:rangoN,
    raP:rangoP,
    veheN:vehemN,
    veheP:vehemP,
    preoN:preocN,
    preoP:preocP
  });//este es el view que se carga
});
});
const port = 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));