var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

router.get("/nodejs_blogapp",function(req,res){
  res.sendFile(path + "nodejs_blogapp.html");
});

router.get("/jenkins",function(req,res){
  res.sendFile(path + "jenkins.html");
});

router.get("/grafana",function(req,res){
  res.sendFile(path + "grafana.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "grafana.html");
});

router.get("/sitik",function(req,res){
  res.sendFile(path + "sitik.html");
});

router.get("/devops_lab",function(req,res){
  res.sendFile(path + "devops_lab.html");
});

router.get("/ftp",function(req,res){
  res.sendFile(path + "ftp.html");
});

var publicDir = require('path').join(__dirname,'/views/public');
app.use(express.static(publicDir));

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});


app.listen(8084,function(){
  console.log("Live at Port 8084");
});
