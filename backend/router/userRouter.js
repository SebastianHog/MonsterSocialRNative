import Users from '../models/userSchema.js';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('/users', async (req, res) => {
	console.log('test');
	const user = req.body;
	try {
		const newUser = new Users(user);
		await newUser.save();
		console.log(newUser);
		res.json({ post: newUser });
	} catch (error) {
		console.error(error);
		res.status(500).send('Error saving user');
	}
});

export { userRouter };
