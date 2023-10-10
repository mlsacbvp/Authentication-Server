const { name } = require("ejs");

module.exports.image = function (req, res, next) {
//   console.log(request);
const fileObj={
    path:request.file.path,
    name:request.file.origanlName
}

  try {
  } catch (error) {
    console.log(error.message);
  }
};
