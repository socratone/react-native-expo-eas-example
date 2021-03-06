import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

interface ButtonProps {
  children: string;
  onPress?: () => void;
  size?: 'small' | 'medium';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Button = ({ children, onPress, size, disabled, style }: ButtonProps) => {
  const handlePress = () => {
    if (disabled) return;
    onPress && onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={disabled ? 1 : 0.5}
      style={[
        styles.container,
        { backgroundColor: disabled ? 'whitesmoke' : 'pink' },
        style,
      ]}
    >
      <Text style={[{ fontSize: size === 'small' ? 40 : 50 }, styles.text]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    width: windowWidth / 4.5,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default Button;
