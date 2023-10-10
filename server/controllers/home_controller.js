module.exports.home = function (req, res) {
  // return res.end("<h1>Server is up for FileVortex</h1>");
  console.log(req.cookies);
  res.cookie("user_id", 25);
  return res.render("home", {
    title: "Home",
  });
};
