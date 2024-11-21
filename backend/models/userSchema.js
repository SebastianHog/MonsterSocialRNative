import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	bio: {
		type: String,
		required: true,
	},
	posts: {
		type: String,
		required: false,
	},
});

const Users = model('users', userSchema);
export default Users;
