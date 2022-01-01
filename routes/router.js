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

//router to add a new user
// router.post("/add", (req, res) => {
//   let post = {
//     u_name: req.body.u_name,
//     email: req.body.email,
//     phone_number: req.body.phone_number,
//   };
//   let sql = "INSERT INTO users SET ?";
//   let query = connection.query(sql, post, (err, results) => {
//     if (err) throw err;
//     res.redirect("/");
//   });
// });

//router to render page to add new user and insert to database after submit
router.get("/add", (req, res) => {
  res.render("add", {
    title: "Add User",
  });
});

//save the user to database
router.post("/save", (req, res) => {
  let post = {
    u_name: req.body.u_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
  };
  let sql = "INSERT INTO users SET ?";
  let query = connection.query(sql, post, (err, results) => {
    if (err) throw err;
    res.redirect("/user/");
  });
});

module.exports = router;
