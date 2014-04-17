/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'CS247 p4' });
};

exports.coming = function(req, res){
  res.render('coming', { title: 'Milestone Coming Soon' });
};
