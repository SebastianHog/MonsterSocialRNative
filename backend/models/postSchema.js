import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	tags: {
		type: [String],
		required: false,
	},
});

const Posts = model('posts', postSchema);
export default Posts;
