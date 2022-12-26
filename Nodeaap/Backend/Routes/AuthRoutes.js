const express = require("express");
const { default: Post } = require("../Models/Post");
const UserData = require("../Models/UserData");
// const User = require("../Models/UserModel");
const AuthRoutes = express.Router();

// Authentication
// sign up api
AuthRoutes.post("/signup", async (req, res) => {
  let UserInfo = req.body;
  if (
    !UserInfo.email ||
    !UserInfo.username ||
    !UserInfo.password ||
    !UserInfo.conformpassword
  ) {
    res.send("Please fill all required field");
  } else {
    if (UserInfo.password != UserInfo.conformpassword) {
      res.send("Please Use Same password");
    } else {

      const User = await UserData.create(UserInfo);
 res.status(200).json({
    status: "success",
    message: "User Printed Succesfully",
    data: User,
  });
// UserData.findOne({ email: UserInfo.email }, (err, data) => {
//   if (!data) {
//     // const User=UserData.create(UserInfo)
//     res.send({ Success: "You are regestered,You can login now." });
//   } else {
//     res.send({ Success: "Email is already used." });
//   }
//   res.status(200).json({
//     status: "success",
//     message: "User Printed Succesfully",
//     data: User,
//   });
// });

      // await User.save((err) => {
      //   if (err) {
      //     console.log(err);
      //   }
      // });

    }
  }
});

// User authentication
// signup route
// AuthRoutes.post('/signup',async(req,res)=>{
//   let User=req.body
//   try {
//     const newUser= await UserData.create(User)
// console.log(User)
//      res.status(200).json({
//        status: "success",
//        data: newUser,
//        message:"user register succesfull"
//      });
//   } catch (error) {
//     res.status(400).json({
//       message: error.code === 11000 ? 'Username already exists ! Please try some other username' : errorHandler.getErrorMessage(error),
//       status:"fail",
//       error:error
//     })
//   }
// })
// AuthRoutes.post('/login',async(req,res)=>{
//   try {
//     UserData.find({
//       username:req.body.username
//     }).exec((err,user)=>{
//       if(err){
//         res.status(500)
//         .send({
//           message:err
//         })
//         return;
//       }
//       if(!user){
//         return res.status(404)
//         .send({
//           message:"User not found."
//         })
//       }
//     })
//      res.status(200).json({
//        status: "success",
//        data: newUser,
//      });
//   } catch (error) {
//     res.status(400).json({
//       message:error,
//       status:"fail",
//       error:error
//     })
//   }
// })

// AuthRoutes.get("/hello", (req, res) => {
//   res.send("this output comming from auth routes file");
// });

// AuthRoutes.post("/signup", async (req, res) => {
//   try {
//     let user = req.body;
//     const newUser = await User.create(user);
//     // console.log(newUser);

//     res.status(200).json({
//       status: "success",
//       data: newUser,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       error: error.message,
//     });
//   }
// });

// AuthRoutes.post("/post", async (req, res) => {
//   try {
//     let user = await req.body;
//     // console.log(req.body.data);
//     // res.send(user);
//     // res.send("hello");
//     // console.log(user);
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({
//       status: "fail",
//       error: error.message,
//     });
//   }
// });

// AuthRoutes.post("/uploadimage", (req, res) => {
//   const newpath = __dirname + "/files/";
//   const file = req.files.file;
//   const fileName = file.name;
//   file.mv(`${newpath}${fileName}`, (err) => {
//     if (err) {
//       res.status(500).send({ message: "File upload failed", code: 500, err });
//     }
//     res.status(200).send({ message: "File Uploaded", code: 200 });
//   });
// });
// AuthRoutes.post("/uploadimage", async (req, res) => {
//   const body = req.body;
//   try {
//     const newImage = await Post.create(body);
//     newImage.save();
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       error: error.message,
//     });
//   }
// });


// AuthRoutes.post("/signup", (req, res, next) => {
//   let personInfo = req.body;

//   if (
//     !personInfo.email ||
//     !personInfo.username ||
//     !personInfo.password ||
//     !personInfo.passwordConf
//   ) {
//     res.send();
//   } else {
//     if (personInfo.password == personInfo.passwordConf) {
//       UserData.findOne({ email: personInfo.email }, (err, data) => {
//         if (!data) {
//           let c;
//           UserData.findOne({}, (err, data) => {
//             if (data) {
//               c = data.unique_id + 1;
//             } else {
//               c = 1;
//             }

//             let newPerson = new UserData({
//               unique_id: c,
//               email: personInfo.email,
//               username: personInfo.username,
//               password: personInfo.password,
//               passwordConf: personInfo.passwordConf,
//             });

//             newPerson.save((err, Person) => {
//               if (err) console.log(err);
//               else console.log("Success");
//             });
//           })
//             .sort({ _id: -1 })
//             .limit(1);
//           res.send({ Success: "You are regestered,You can login now." });
//         } else {
//           res.send({ Success: "Email is already used." });
//         }
//       });
//     } else {
//       res.send({ Success: "password is not matched" });
//     }
//   }
// });

module.exports = AuthRoutes;
