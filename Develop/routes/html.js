const router = require("express").Router();
const path = require("path");

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

router.get("/stats", function(req,res) {
    res.sendFile(path.join(__dirname, "stats.html"));
});

router.get("/exercise", function(req,res) {
    res.sendFile(path.join(__dirname, "exercise.html"));
});

module.exports = router;