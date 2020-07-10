const express=require('express');
const app=express();
app.get('/',function(req,res)
{
res.send('Welcome to Node express');
});
app.route('/Home').get(function(req,res)
{
    res.send("Welcome to Home page");
});
app.route('/Products').get(function(req,res)
{
    res.send("Products here");
});
const server=app.listen(3000,function() {});