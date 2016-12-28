var express = require('express');
var app=express();

app.get('/api/whoami', function(req,res){
    
  var ip= req.headers["x-forwarded-for"];
  var language= req.headers["accept-language"];
  language=language.split(",")[0];
  var software=req.headers["user-agent"].split('(')[1].split(')')[0];
  
  res.json({ipaddress:ip,language:language,software:software});
});

app.listen(process.env.PORT, function(){
    console.log('listening');
})