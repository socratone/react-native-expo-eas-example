import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './components/Button';
import Row from './components/Row';
import Screen from './components/Screen';

export default function App() {
  const [value, setValue] = useState('');

  const handleAdd = (value: string) => {
    setValue((preValue) => preValue + value);
  };

  return (
    <View style={styles.container}>
      <Screen value={value} onChange={setValue} style={{ marginBottom: 10 }} />
      <Row style={{ marginBottom: 10 }}>
        <Button onPress={() => handleAdd('%')}>%</Button>
        <Button onPress={() => handleAdd('√')}>√</Button>
        <Button onPress={() => setValue('')} size="small">
          CE
        </Button>
        <Button onPress={() => handleAdd('')} size="small">
          ON
        </Button>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Button onPress={() => handleAdd('7')}>7</Button>
        <Button onPress={() => handleAdd('8')}>8</Button>
        <Button onPress={() => handleAdd('9')}>9</Button>
        <Button onPress={() => handleAdd('÷')}>÷</Button>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Button onPress={() => handleAdd('4')}>4</Button>
        <Button onPress={() => handleAdd('5')}>5</Button>
        <Button onPress={() => handleAdd('6')}>6</Button>
        <Button onPress={() => handleAdd('×')}>×</Button>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Button onPress={() => handleAdd('1')}>1</Button>
        <Button onPress={() => handleAdd('2')}>2</Button>
        <Button onPress={() => handleAdd('3')}>3</Button>
        <Button onPress={() => handleAdd('−')}>−</Button>
      </Row>
      <Row>
        <Button onPress={() => handleAdd('0')}>0</Button>
        <Button onPress={() => handleAdd('·')}>·</Button>
        <Button onPress={() => handleAdd('=')}>=</Button>
        <Button onPress={() => handleAdd('+')}>+</Button>
      </Row>
      <StatusBar style="auto" />
    </View>
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
