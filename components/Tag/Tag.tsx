import { Text } from 'react-native';
import { styles } from './styles';

export const Tag = ({ tag }: any) => {
	return <Text style={styles.tag}>{tag}</Text>;
};
