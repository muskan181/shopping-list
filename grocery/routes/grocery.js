const express=require('express');
const groceryController=require('../controllers/grocery')

const router=express.Router();
router.get('/',groceryController.getAllGroceries);
//taking the data from module using controllers 

router.post('/',groceryController.postGrocery);
//posting  the data in mysql database

router.put('/',groceryController.putGrocery);
//updating the data 

router.delete('/:id',groceryController.deleteGrocery);
//deleteing the data on the particular route

module.exports=router;

