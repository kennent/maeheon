const express = require('express');
var router = express.Router();
var path = require('path');

/* router */
router.use(express.static(path.join(__dirname, 'public')));


router.get('/', (req, res) => {
    res.render('main.ejs');
});
router.post('/', (req, res) => {
    var answer = req.body.answer;
    var ch = req.body.ch;
    switch(answer) {
        case "왜 고3이 코드짜고 있냐": res.render('index.ejs', {ch: 1}); break;
        case "상하이": case "상해": if (ch == 1) res.render('index.ejs', {ch: 2}); else res.render('noanswer'); break;
        case "1919": case "1919년": if (ch == 2) res.render('index.ejs', {ch: 3}); else res.render('noanswer'); break;
        case "1932": case "1932년": if (ch == 3) res.render('index.ejs', {ch: 4}); else res.render('noanswer'); break;
        case "B": case "b": case "비": if (ch == 4) res.render('index.ejs', {ch: 5}); else res.render('noanswer'); break;
        case "물통폭탄": case "물통": if (ch == 5) res.render('index.ejs', {ch: 6}); else res.render('noanswer'); break;
        default: res.render('noanswer.ejs'); break;
    }
});
router.get('/test', (req, res) => {
    res.render('test.ejs', {first: true});
});
router.post('/ending', (req, res) => {
    var body = req.body;
    if (body.testQ1 == 3 && body.testQ2 == 5 && body.testQ3 == 3 && body.testQ4 == 4 && body.testQ5 == 3) {
        res.render('index.ejs', {ch: 0});
    } else {
        res.render('test.ejs', {first: false});
    }
});

module.exports = router;