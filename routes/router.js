const express = require("express")
const router = express.Router()
const {generateUrl,redirectUrl,homepage} = require("../controller/controller")


router.get('/',homepage)

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.post("/", generateUrl)

router.get("/:shorturl",redirectUrl)

module.exports = router;
