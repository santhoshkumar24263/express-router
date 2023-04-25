const express = require('express')
const router=express.Router()
const USERS_ARRAY_LENGTH = 5;
router.get('/',(req,res)=>{
  res.send("List of Users")
})
router.get('/newUser',(req,res)=>{
  res.send('New user registration')
})
router.route('/:id')
    .get((req,res)=>{
const userId=Number(req.params.id)
if(userId<USERS_ARRAY_LENGTH){
  res.send(`${req.user.name}`)
}
  else{
  res.send(`Invalid Number!`)
  }
})

//     .put((req,res)=>{
//   res.send(`UPDATE The value of id is ${req.params.id}`)
// })
//   .delete((req,res)=>{
//   res.send(`DELETE The value of id is ${req.params.id}`)
// })

const Users=[
  {
    name:'page 1'
  },
  {
    name:"page 2"
  }
  ,
  {
    name:"page 3"
  },
{
  name:"page 4"
}
,{
  name:"page 5"
}
]

router.param('id',(request,resposne,next,id)=>{
  
  request.user = Users[id]
  next();
})
module.exports=router
