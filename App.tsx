import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FeedScreen } from './screens/FeedScreen/FeedScreen';
import { HeaderButton } from './components/HeaderButton/HeaderButton';
import { PostScreen } from './screens/PostScreen/PostScreen';
import { GlobalProvider } from './State/GlobalStore';
import { CreatePostScreen } from './screens/CreatePostScreen/CreatePostScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<GlobalProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="feed">
					<Stack.Screen
						name="feed"
						component={FeedScreen}
						options={({ navigation }) => ({
							title: 'Your feed',
							headerTitleStyle: {
								fontWeight: 'bold',
							},
							contentStyle: { backgroundColor: 'rgba(90, 130, 190, 1)' },
							headerRight: () => <HeaderButton navigation={navigation} />,
						})}
					/>
					<Stack.Screen
						name="post"
						component={PostScreen}
						options={({ navigation }) => ({
							contentStyle: { backgroundColor: 'rgba(90, 130, 190, 1)' },
							headerRight: () => <HeaderButton navigation={navigation} />,
						})}
					/>
					<Stack.Screen
						name="create"
						component={CreatePostScreen}
						options={({ navigation }) => ({
							contentStyle: { backgroundColor: 'rgba(90, 130, 190, 1)' },
							headerRight: () => <HeaderButton navigation={navigation} />,
						})}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</GlobalProvider>
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
