const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')
router.post('/register',async (req,res)=>{
    data =req.body;
    usr=new User(data)
    salt=bcrypt.genSaltSync(10);
    cryptedpass =await bcrypt.hashSync(data.password,salt)
    usr.password=cryptedpass;
    usr.save()
    .then(
        (savedUser)=>{res.status(200).send(savedUser)}
    )
    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
})
router.post('/login',(req,res)=>{
        let data = req.body;
        User.findOne({email:data.email})
        .then(
            (user)=>{
                validPass = bcrypt.compareSync(data.password,user.password);

            if(!validPass){
                res.status(404).send("wrong email or password !");
            }else{
                payload={
                    _id:user._id,
                    email:user.email,
                    fullname:user.name+' '+user.lastname
                }
                token = jwt.sign(payload,'Hbib the conqueror');
                res.status(200).send({mytoken: token});
            }
        }
        
        )
        .catch(
            err=>{
                res.send(err);
                }
            )
})


router.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.get('/getbyid/:id',(req,res)=>{
    myid=req.params.id;
    User.findOne({_id: myid})
        .then(
            (user)=>{
                res.send(user.name+' '+user.lastname);
            }
            )
            .catch(
                (err)=>{
                    res.send(err)
                    console.log(err)
                }
        )
})
module.exports = router;