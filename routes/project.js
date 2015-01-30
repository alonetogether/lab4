exports.viewProject = function(req, res) { 
	var name = req.paramsname;
	console.log("The project name is:" + name);
	res.render('project', {
		'projectName': name

	});
};