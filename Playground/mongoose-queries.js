const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {user}=require('./../server/models/user');

var id='5b4fa1d59b18e22b4cd73bad';
user.findById(id).then((user)=>{
  if(!user)
  {
    return console.log('Unable to find user');
  }
  console.log(user);
}).catch((e)=>{console.log(e);});


// if(!ObjectID.isValid(id))
// {
//   console.log('ID not valid');
// }
// var id='5b508246a303a33f744eeb39';
//
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID',todo);
// }).catch((e)=>console.log(e));
