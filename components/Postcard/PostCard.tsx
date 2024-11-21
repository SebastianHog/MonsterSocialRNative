import { Text, View } from 'react-native';
import { styles } from './styles.js';

export const PostCard = ({ post, navigation }: any) => {
	return (
		<View style={styles.card}>
			<View id="post-header">
				<Text style={styles.postTitle}>{post.title}</Text>
				<Text style={{ fontSize: 10 }}>
					by <Text style={styles.postAuthor}>{post.author}</Text>
				</Text>
			</View>
			<View id="post-body">
				<Text>{post.bio}</Text>
			</View>
		</View>
	);
};
