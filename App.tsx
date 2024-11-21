import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { FeedScreen } from './screens/FeedScreen/FeedScreen';
import { SButton } from './components/SButton/SButton';
import { PostScreen } from './screens/PostScreen/PostScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="feed">
				<Stack.Screen
					name="home"
					component={HomeScreen}
				/>
				<Stack.Screen
					name="feed"
					component={FeedScreen}
					options={{
						title: 'Your feed',
						headerStyle: {},
						headerTitleStyle: {
							fontWeight: 'bold',
						},
						headerRight: () => (
							<SButton
								onBPress={() => alert('This is a button!')}
								style={{
									backgroundColor: 'rgba(0, 0, 0, .1)',
									borderRadius: 10,
									width: 40,
									height: 25,
									justifyContent: 'center',
									alignItems: 'center',
								}}>
								<Text
									style={{
										textAlign: 'center',
									}}>
									Post
								</Text>
							</SButton>
						),
					}}
				/>
				<Stack.Screen
					name="post"
					component={PostScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
