exports.findAll = function(req, res) {
  fs = require('fs');
  var output = "[";
  fs.readdir('public/customers/', function(err, files){
	for(var i=0; i<files.length; i++)
	{
		/*fs.readFile('data/'+files[i], 'utf8', function(err, data){
		//if(err) {return console.log(err);}
		
		});*/
		output += fs.readFileSync('public/customers/'+files[i])
		if(i != files.length-1)
		output += ","
		console.log(files[i]);
	}
	output += "]";
	res.send(JSON.parse(output));
  });
  
  //res.send([{name:'app1'}, {name:'app2'}, {name:'app3'}]);
};
exports.new = function(req, res) {
	res.sendFile('/public/index.html');
};
exports.findById = function(req, res) {
  fs = require('fs');
  var output = fs.readFileSync('public/customers/'+req.params.id+'.json')	
  res.send(JSON.parse(output));
};
exports.add = function (req, res) {
  fs = require('fs');
  fs.writeFile('public/customers/'+req.body.id+'.json', JSON.stringify(req.body), function (err) {
  if (err) return console.log(err);
	console.log('file created');
  });
  res.send("Success");
};
exports.update = function (req, res) {
  fs = require('fs');
  fs.writeFile('public/customers/'+req.params.id+'.json', JSON.stringify(req.body), function (err) {
  if (err) return console.log(err);
	console.log('file created');
  });
  res.send("Success");
};
exports.delete = function (req, res) {
  fs = require('fs');
  fs.unlink('public/customers/'+req.params.id+'.json', function (err) {
  if (err) return console.log(err);
	console.log('file created');
  });
  res.send("Success");
};