const express=require('express');
const hbs= require('hbs');

var app=express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');

// app.use((req,res,next)=>{
//   var now= new Date().toString();
//
//   console.log(now);
//   next();
// });

app.use((req,res,next)=>{
  res.render("maintenance.hbs")
})

app.get('/',(req,res)=>{
  res.render("home.hbs",{
    pageTitle:"Home",
    welcomeMessage:"Welcome to home",
  });
});

app.get('/about',(req,res)=>{
  res.render("about.hbs",{
    pageTitle:"Home",
    welcomeMessage:"Welcome to home",
  });
});


app.listen(3000,()=>{
  console.log('server started');
});
