const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User, User } = require("../db.js");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");
const { authMiddleware } = require("../middleware.js");

const signupBody = zod.object({
    username: zod.string(),
    password: zod.string(),
    email: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.post("/signup", async(req, res) => {
    try {
        const body = req.body;
        const { success } = signupBody.safeParse(req.body);
    
        if(!success){
            return res.status(411).json({
                message: "Email already taken/Incorrect inputs"
            });
        }
    
        const existingUser = await User.findOne({
            username: req.body.username
        })
    
        if(existingUser){
            return res.status(411).json({
                message: "Email already taken/Incorrect inputs"
            });
        }
    
        const user = User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })
    
        const userId = user._id;
    
        const token = user.sign({
            userId
        }, JWT_SECRET);
    
        res.json({
            message: "User created successfully",
            token: token
        })
    } catch (error) {
        console.log(error);
    }
})

const signinBody = zod.object({
    username: zod.string(),
	password: zod.string()
})

router.post("/signin", async(req, res) => {
    try {
        const { success } =  signinBody.safeParse(req.body);
        if(!success){
            return res.status(411).json({
                message: "Incorrect inputs"
            })
        }

        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })

        if (user) {
            const token = jwt.sign({
                userId: user._id
            }, JWT_SECRET);
    
            res.json({
                token: token
            })
            return;
        }
        res.status(411).json({
            message: "Error while logging in"
        })
    } catch (error) {
        console.log(error);
    }
})

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async(req, res) => {
    const {success} = updateBody.safeParse(req.body);

    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        _id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
})

module.exports = router;