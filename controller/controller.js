const fetch = require('node-fetch')

const home = (req, res) => {
  res.render('pages/index', {/* vars here*/});
};

const formOutput = (req, res) => {
  const studentName = req.body.sname;
  const studentNumber = req.body.snumber;
  const studentEmail = req.body.email;

  res.render('pages/form-output', { studentName, studentNumber, studentEmail });
};

module.exports = {
  home,
  formOutput
}