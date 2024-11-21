import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	card: {
		marginTop: 20,
		width: '90%',
		minHeight: 100,
		backgroundColor: 'white',
		borderRadius: 5,
		paddingLeft: 10,
		borderBottomWidth: 2,
	},
	postTitle: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	postAuthor: {
		fontSize: 10,
		fontWeight: 'bold',
	},
	tags: {
		marginTop: 10,
		marginBottom: 10,
		flexDirection: 'row',
	},
});
