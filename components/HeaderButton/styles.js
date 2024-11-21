import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	headerMenuIcon: {
		width: 50,
		height: 50,
		borderWidth: 3,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightblue',
	},
	profileicon: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	},
	headerMenu: {
		alignItems: 'center',
		paddingHorizontal: 20,
		height: 360,
		width: '90%',
		backgroundColor: 'rgba(0, 0, 0, 0.97)',
		position: 'absolute',
		bottom: 0,
		right: 22,
		zIndex: 100,
		borderTopEndRadius: 50,
		borderTopStartRadius: 50,
	},
	overlay: {
		flex: 1,
	},
	createPostButton: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 20,
		marginBottom: 20,
	},
	iconSize: {
		width: 50,
		height: 50,
	},
	switchAccountText: {
		color: 'white',
		fontSize: 15,
	},
});
