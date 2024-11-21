import { View, Text, TextInput, Pressable } from 'react-native';
import { styles } from './styles.js';

export const CreatePostScreen = ({ navigation, route }: any) => {
	const sendPost = () => {};

	return (
		<View style={styles.container}>
			<View style={styles.postForm}>
				<TextInput
					style={styles.input}
					placeholder="Post title"
					maxLength={45}
				/>
				<View
					id="tags"
					style={styles.tagInputs}>
					<TextInput
						style={styles.tagInput}
						maxLength={8}
					/>
					<TextInput
						style={styles.tagInput}
						maxLength={8}
					/>
					<TextInput
						style={styles.tagInput}
						maxLength={8}
					/>
					<TextInput
						style={styles.tagInput}
						maxLength={8}
					/>
					<TextInput
						style={styles.tagInput}
						maxLength={8}
					/>
				</View>
				<TextInput
					multiline
					numberOfLines={10}
					maxLength={250}
					placeholder="Post"
					style={[styles.input, styles.bodyInput]}
				/>
			</View>
			<Pressable
				style={styles.postButton}
				onPress={() => sendPost}>
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
