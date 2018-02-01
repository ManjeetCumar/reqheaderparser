const express = require('express');                  // accepts is present in express
const useragent = require('express-useragent');
const app = express();                               // instantiate the express

app.use(express.static('view'));
app.use(useragent.express());                        // instantiating the dependency in express

app.get('/api/whoami', function(req, res){
	
	
	var ip = req.ip;
	var lang = req.acceptsLanguages();
	var software = req.useragent;                    // get user information using useragent dependency
    software = software.platform+", "+software.os;
    res.json({'ipaddress' : ip, 'language': lang[0], 'software': software}); // can use /res.send({ipaddress : ip});/ also    
	
});


app.listen(process.env.PORT || 3000);