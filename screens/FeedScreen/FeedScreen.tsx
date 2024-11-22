import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { styles } from './styles.js';
import { fakePosts } from '../../seed/fakePosts.js';
import { PostCard } from '../../components/Postcard/PostCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { get } from 'mongoose';

export const FeedScreen = ({ navigation }: any) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		console.log('getting all posts');

		const getPosts = async () => {
			try {
				const res = await axios.get('http://10.0.2.2:3000/api/posts');
				console.log(res.status);
				setPosts(res.data.posts);
			} catch (error) {
				console.log(error);
			}
		};
		getPosts();
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={posts}
				renderItem={(item) => (
					<PostCard
						post={item.item}
						navigation={navigation}
					/>
				)}
				contentContainerStyle={styles.list}
			/>
		</View>
	);
};
