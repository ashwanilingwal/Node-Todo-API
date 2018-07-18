var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp');

var user=mongoose.model('Users',
{
  email:{
    type: String,
    required:true,
    trim: true,
    minlength: 1
  }
});
module.exports={user};
