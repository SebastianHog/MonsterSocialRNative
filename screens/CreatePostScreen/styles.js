import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
	},
	postForm: {
		marginTop: 20,
		width: 400,
		height: '75%',
		borderRadius: 5,
		borderColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		marginTop: 20,
		backgroundColor: 'rgba(0,0,0,.2)',
		width: '90%',
		borderRadius: 50,
		borderWidth: 2,
		borderColor: 'white',
		paddingLeft: 10,
	},
	tagInputs: {
		marginTop: 20,
		width: '100%',
		gap: 10,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	tagInput: {
		width: '15%',
		height: 30,
		padding: 0,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: 'white',
		fontSize: 12,
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,.2)',
	},
	bodyInput: {
		borderRadius: 5,
		textAlignVertical: 'top',
		height: 200,
	},
	postButton: {
		width: '30%',
		height: 40,
		backgroundColor: 'rgba(0,0,0,.2)',
		borderWidth: 2,
		justifyContent: 'center',
		borderRadius: 50,
	},
});
