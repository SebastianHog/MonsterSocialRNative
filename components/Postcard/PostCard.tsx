import { FlatList, Pressable, Text, View } from 'react-native';
import { styles } from './styles.js';
import { Tag } from '../Tag/Tag';

export const PostCard = ({ post, navigation }: any) => {
	return (
		<Pressable
			style={styles.card}
			onPress={() => navigation.navigate('post', { post })}>
			<View id="post-header">
				<Text style={styles.postTitle}>{post.title}</Text>
				<Text style={{ fontSize: 10 }}>
					by <Text style={styles.postAuthor}>{post.author}</Text>
				</Text>
			</View>
			<View id="post-body">
				<Text>{post.bio}</Text>
			</View>
			<View
				id="post-tags"
				style={styles.tags}>
				{post.tags.map((tag: string) => (
					<Tag
						key={tag}
						tag={tag}
					/>
				))}
			</View>
		</Pressable>
	);
};
