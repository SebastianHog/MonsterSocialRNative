import { View, Text, TextInput, Pressable } from 'react-native';
import { styles } from './styles.js';
import axios from 'axios';
import { useState } from 'react';
import { useGlobalStore } from '../../State/GlobalStore';

export const CreatePostScreen = ({ navigation, route }: any) => {
	const [postTitle, setPostTitle] = useState('');
	const [tags, setTags] = useState<string[]>([]);
	const [postBody, setPostBody] = useState('');

	const { state, dispatch } = useGlobalStore();

	const sendPost = async () => {
		const post = {
			title: postTitle,
			tags: tags,
			body: postBody,
			author: state.user?.username,
		};

		try {
			const res = await axios.post('http://10.0.2.2:3000/api/posts', post);
			console.log(res.status);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.postForm}>
				<TextInput
					style={styles.input}
					placeholder="Post title"
					maxLength={45}
					onChange={(e) => setPostTitle(e.nativeEvent.text)}
				/>
				<View
					id="tags"
					style={styles.tagInputs}>
					<TextInput
						style={styles.tagInput}
						maxLength={8}
						onChange={(e) => setTags([...tags, e.nativeEvent.text])}
					/>
					<TextInput
						style={styles.tagInput}
						maxLength={8}
						onChange={(e) => setTags([...tags, e.nativeEvent.text])}
					/>
					<TextInput
						style={styles.tagInput}
						maxLength={8}
						onChange={(e) => setTags([...tags, e.nativeEvent.text])}
					/>
					<TextInput
						style={styles.tagInput}
						maxLength={8}
						onChange={(e) => setTags([...tags, e.nativeEvent.text])}
					/>
					<TextInput
						style={styles.tagInput}
						maxLength={8}
						onChange={(e) => setTags([...tags, e.nativeEvent.text])}
					/>
				</View>
				<TextInput
					multiline
					numberOfLines={10}
					maxLength={250}
					placeholder="Post"
					style={[styles.input, styles.bodyInput]}
					onChange={(e) => setPostBody(e.nativeEvent.text)}
				/>
			</View>
			<Pressable
				style={styles.postButton}
				onPress={sendPost}>
				<Text
					style={{
						textAlign: 'center',
						color: 'white',
						fontWeight: 'bold',
						fontSize: 25,
					}}>
					Post
				</Text>
			</Pressable>
		</View>
	);
};
