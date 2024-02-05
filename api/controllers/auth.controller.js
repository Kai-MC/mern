import User from '../models/user.model.js'
import bcrypjs from 'bcryptjs';
import {errorHandler} from '../utils/error.js'

export const signup = async (req, res, next) => {
    const { username, email, password} = req.body;
    const hashedPassword = bcrypjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword});
    try {
    await newUser.save()
    res.status(201).json("user cretated successfully")

    } catch (error) {
        next(errorHandler(550, 'error from the func'));
    }
    
};