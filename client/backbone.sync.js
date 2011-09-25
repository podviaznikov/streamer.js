Backbone.sync = function (method, model, options){
	var getUrl = function (object) {
		if (!object.url){
		  object.urlRoot;
		}
		else{
		  return _.isFunction(object.url) ? object.url() : object.url;
		}
	};

	var namespace = getUrl(model);

	var params = model.toJSON() || {};

	window.io.emit(namespace + ':' + method, params, function(data){
		//options.success(data);
		console.log('success response from socket.')
	});
};