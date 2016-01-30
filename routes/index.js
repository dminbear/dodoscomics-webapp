var express = require('express');
var router = express.Router();
router.use(function (err, req, res, next) {
    console.log("HERE");
});
router.get('/', function (req, res, next) {
    console.log("TEST");
    res.render('index', { title: 'Express' });
});
module.exports = router;
//# sourceMappingURL=index.js.map