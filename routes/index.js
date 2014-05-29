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

exports.m4=function(req, res){
  res.render('m4', { title: 'Milestone 4' });
};

exports.m5=function(req, res){
  res.render('m5', { title: 'Milestone 5' });
};

exports.m6=function(req, res){
  res.render('m6', { title: 'Milestone 6' });
};

exports.m7=function(req, res){
  res.render('m7', { title: 'Milestone 7' });
};