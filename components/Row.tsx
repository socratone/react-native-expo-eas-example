import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface RowProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Row = ({ children, style }: RowProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Row;
