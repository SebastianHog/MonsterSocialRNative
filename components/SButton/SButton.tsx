import { Pressable, Text } from 'react-native';

type SButtonProps = {
	onBPress: () => void;
	children: React.ReactNode;
	style?: any;
};

export const SButton = ({ onBPress, children, style }: SButtonProps) => {
	return (
		<Pressable
			onPress={onBPress}
			style={style}>
			{children}
		</Pressable>
	);
};
