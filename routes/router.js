const router = require('express').Router();

//render the index page
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;