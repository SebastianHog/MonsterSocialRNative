import express from 'express';
import mongoose from 'mongoose';
import router from './router/router.js';

const app = express();
const port = 3000;

app.use(express.json());

mongoose
	.connect('mongodb://localhost:27017/monster-social')
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB', error);
	});

app.use('/api', router);

app.listen(port, () => {
	console.log('Server is running on port: ', port);
});
