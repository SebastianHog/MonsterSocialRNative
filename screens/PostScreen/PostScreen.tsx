import { useEffect } from 'react';
import { View, Text } from 'react-native';

export const PostScreen = ({ route, navigation }: any) => {
	const { post } = route.params;

	useEffect(() => {
		navigation.setOptions({ title: post.title });
	}, [post]);
	return (
		<>
			<View id="header">
				<Text>
					Written by: <Text style={{ fontWeight: 'bold' }}>{post.author}</Text>
				</Text>
			</View>
			<Text>{post.body}</Text>
		</>
	);
};
