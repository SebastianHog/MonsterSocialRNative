import { useEffect } from 'react';
import { View, Text } from 'react-native';

export const PostScreen = ({ route, navigation }: any) => {
	const { post } = route.params;

	useEffect(() => {
		navigation.setOptions({ title: post.title });
	}, [post]);
	return (
		<View>
			<Text>{post.bio}</Text>
		</View>
	);
};
