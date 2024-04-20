

const users=require('../model/user')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const SECRET_KEY="my_secret_key"

const userController={

    userRegister: async(req,res)=>{
        try{

            const {username,email,password,place,name}=req.body

        const existingUser = await users.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ status: "failed", error: "Email or username already exists" });
        }

             // hashing  the password
             const hashedPassword = await bcrypt.hash(password, 10);
      
             // Updating the password with hassed
             const userDetails = await users.create({ username, email, password: hashedPassword,place,name });
             const user=await users.findOne({username},{email:1, username:1, place:1, name:1});
             res.status(201).json({ message: 'User registered successfully', user });
        }
        catch(error){
         console.log(error)
         res.status(500).json({ status: "failed", error});
        }

    },

    userLogin: async(req,res)=>{
        try{
           const {username,password}=req.body

           if(!username || !password){
            return res.status(400).json({ status: "failed", error: "username & password Are Required" });
        }

        const login=await users.findOne({username})

        if(!login || !(await bcrypt.compare(password, login.password))){
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        // generating jwt token
        const token=jwt.sign({username:username},SECRET_KEY, { expiresIn: '3h' })
        res.status(200).json({ message: 'Login successful', token });
        }
        catch(error){
         console.log(error)
         res.status(500).json({ status: "failed", error});
        }
    },
    getUserDetails: async (req, res) => {
        try {
           
            const username = req.user.username
            // getting user details from the database
            const userDetails = await users.findOne({username},{email:1, username:1, place:1, name:1});
            console.log(userDetails)

            if (!userDetails) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ message: 'User details retrieved successfully', userDetails });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 'failed', error });
        }
    }
}

module.exports=userController