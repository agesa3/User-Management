const router = require("express").Router();
const connection = require("../config/database");

//render the index page
router.get("/", (req, res) => {
  let sql = "SELECT * FROM users";
  let query = connection.query(sql, (err, results) => {
    if (err) throw err;
    res.render("index", {
      title: "CRUD APP",
      user: results,
    });
  });
});

module.exports = router;
