const db=require('../util/database');
//taking database from util and puting here in modules file
module.exports=class Grocery{
    constructor(id,item,quantity){
        this.id=id;
        this.item=item;
        this.quantity=quantity;
    }
    static fetchAll(){
        return db.execute('SELECT * FROM groceries');
        // return the table of mysql database
    }
    static post(item, quantity){
        return db.execute('INSERT INTO groceries (item, quantity) VALUES (?,?)', [item,quantity]);
        //it will add item in grocery
    }
    static update(id,item,quantity){
        return db.execute('UPDATE groceries SET item = ?,  quantity = ? WHERE id = ?',[item,quantity,id]);
    }
    static delete(id){
        return db.execute('DELETE FROM groceries WHERE id= ?',[id]);
    }
    
};