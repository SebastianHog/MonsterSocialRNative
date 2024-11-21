import Posts from '../models/postSchema.js';
import { Router } from 'express';

const postRouter = Router();

postRouter.get('/posts', async (req, res) => {
	try {
		const posts = await Posts.find();
		console.log(posts);
		res.json({ posts });
	} catch (error) {
		console.error(error);
		res.status(500).send('Error fetching posts');
	}
});

postRouter.post('/posts', async (req, res) => {
	const post = req.body;
	try {
		const newPost = new Posts(post);
		await newPost.save();
		console.log(newPost);
		res.json({ post: newPost });
	} catch (error) {
		console.error(error);
		res.status(500).send('Error saving post');
	}
});

export { postRouter };