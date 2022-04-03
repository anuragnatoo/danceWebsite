const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT || 80;
app.use('/static',express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


//Endpoints
app.get('/',(req,res)=>{
    const params={};
    res.status(200).render('home.pug',params);
});
app.get('/contactus',(req,res)=>{
    const params={};
    res.status(200).render('contactus.pug',params);
});
app.get('/aboutus',(req,res)=>{
    const params={};
    res.status(200).render('aboutus.pug',params);
});
app.get('/courses',(req,res)=>{
    const params={};
    res.status(200).render('courses.pug',params);
});
app.post('/contact',(req,res)=>{
    const params={};
    console.log(req.body);
    res.status(200).render('home.pug',params);
})
//Start Server
app.listen(port,()=>{
    console.log(`App started successfully on port ${port}`);
    //console.log(req.url);
});