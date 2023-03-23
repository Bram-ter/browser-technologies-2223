const fetch = require('node-fetch')

const home = (req, res) => {
  res.render('pages/index', {/* vars here*/});
};

module.exports = {
  home
}