const userCtrl = {}

const UserModel = require('../models/User');

userCtrl.getUsers   = async(req, res) => {
    const users = await UserModel.find();
    res.json(users);
};

userCtrl.createUser = async(req, res) => {
    const {username} = req.body;
    const newUser = new UserModel({username});
    await newUser.save();
    res.json('User Created')
};

userCtrl.deleteUser = async(req, res) =>{
    await UserModel.findOneAndDelete({_id: req.params.id});
    res.json({message: 'User deleted'})
    
};

module.exports      = userCtrl