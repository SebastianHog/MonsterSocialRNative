import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { styles } from './styles.js';
import { fakePosts } from '../../seed/fakePosts.js';
import { PostCard } from '../../components/Postcard/PostCard';

export const FeedScreen = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={fakePosts}
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
