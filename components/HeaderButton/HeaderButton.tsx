import { useState } from 'react';
import {
	Modal,
	Pressable,
	Text,
	TouchableWithoutFeedback,
	View,
	Image,
} from 'react-native';
import { styles } from './styles';
import { useGlobalStore } from '../../State/GlobalStore';

export const HeaderButton = ({ navigation }: any) => {
	const [openMenu, setOpenMenu] = useState(false);

	const { state, dispatch } = useGlobalStore();

	const closeMenu = () => {
		console.log('username: ', state.user?.username);
		setOpenMenu(false);
	};

	return (
		<>
			<Pressable
				style={styles.headerMenuIcon}
				onPress={() => setOpenMenu(!openMenu)}>
				<Text style={styles.profileicon}>
					{state.user?.username.substring(0, 1)}
				</Text>
			</Pressable>
			<Modal
				visible={openMenu}
				transparent
				animationType="slide">
				<TouchableWithoutFeedback onPress={closeMenu}>
					<View style={styles.overlay}>
						<View style={styles.headerMenu}>
							<Pressable
								onPress={() => navigation.navigate('create')}
								style={styles.createPostButton}>
								<Image
									source={require('../../assets/create_post_icon_white.png')}
									style={styles.iconSize}
								/>
							</Pressable>
							<Pressable onPress={() => console.log('Change account')}>
								<Text style={styles.switchAccountText}>Change account</Text>
							</Pressable>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</>
	);
};
