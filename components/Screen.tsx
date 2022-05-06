import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

interface ScreenProps {
  value: string;
  onChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

const Screen = ({ value, onChange, style }: ScreenProps) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: 'gainsboro',
  },
  textInput: {
    paddingRight: 20,
    textAlign: 'right',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: 50,
  },
});

export default Screen;
