/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'CS247 p4' });
};

exports.coming = function(req, res){
  res.render('coming', { title: 'Milestone Coming Soon' });
};

exports.m2=function(req, res){
  res.render('m2', { title: 'Milestone 2' });
};

exports.m3=function(req, res){
  res.render('m3', { title: 'Milestone 3' });
};
