const Grocery=require('../models/grocery');
exports.getAllGroceries= async(req,res,next) => {
    try{
        const [allGroceries] = await Grocery.fetchAll();
        res.status(200).json(allGroceries);
        //it will take the data and give in json format
    }catch(err){
        if(!err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
};
//fetching data from module(mysql)

exports.postGrocery= async(req,res,next) => {
    console.log(req.body);
    try{
        const postResponse = await Grocery.post(req.body.item, req.body.quantity);
        console.log(postResponse);
        res.status(201).json(postResponse);
    }catch(err){
        console.log("1",err);
        if(!err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
};
//inserting data into mysql

exports.putGrocery= async(req,res,next) => {
    try{
        const putResponse = await Grocery.update(req.body.id,req.body.item, req.body.quantity);
        res.status(201).json(putResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
};
//it will update the id with item into mysql

exports.deleteGrocery= async(req,res,next) => {
    try{
        const deleteResponse = await Grocery.delete(req.params.id);
        res.status(201).json(deleteResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode=500;
        }
        next(err);
    }
};
//it will update the id with item into mysql