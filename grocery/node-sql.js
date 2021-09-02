const express=require('express');

const bodyParser=require('body-parser');

const groceryRoutes=require('./routes/grocery')

const errorController=require('./controllers/error')

const app=express();

const ports=process.env.PORT || 3001;

app.use(bodyParser.json());
//it will pass all the request in json format

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

app.use('/groceries',groceryRoutes);
//using data from module and routing using routers

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on port ${ports}`));

//module-> where data is
//controller-> middle man btw module and routes
//routes-> making navigations for the data
//config-> about mysql
//util-> database