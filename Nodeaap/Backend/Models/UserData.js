const mongoose =require( "mongoose");

const UserData = mongoose.Schema({
  unique_id: {
    type: Number,
  },
  email: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  conformpassword:{
    type:String,
  },
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const DataUser=mongoose.model('userData',UserData)
module.exports=DataUser