var script = document.createElement('script');
var url = 'https://rawgit.com/Jasonnor/Granblue-Autotasy/master/js/coopraid.js';
var inner = "function createScript() {" + 
			"	var script = document.createElement('script');" + 
			"	script.onerror = function(){location.reload()};" + 
			"	script.src = '" + url + "';" + 
			"	document.body.appendChild(script)" + 
			"}" + 
			"function init(){" + 
			"	if(window.$ && !$('#ready').is(':visible')) {" + 
			"		setTimeout(createScript, 3000);" + 
			"		console.log('Creating script ...');" + 
			"	}" + 
			"	else" + 
			"		setTimeout(function(){init()}, 1000);" + 
			"}" + 
			"init();";
script.innerHTML = inner;
document.body.appendChild(script);
