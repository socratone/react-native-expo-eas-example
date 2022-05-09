import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './components/Button';
import Row from './components/Row';
import Screen from './components/Screen';
import calculate from './helpers/calculate';
import hasDot from './helpers/hasDot';
import hasOperator from './helpers/hasOperator';

export default function App() {
  const [value, setValue] = useState('');

  const handleNumber = (value: string) => {
    setValue((preValue) => preValue + value);
  };

  const handleZero = () => {
    setValue((preValue) => {
      if (preValue.length > 0 && preValue[0] === '0') return preValue;
      return preValue + '0';
    });
  };

  const handleDot = () => {
    setValue((preValue) => {
      if (preValue.length === 0) return preValue;
      if (hasDot(preValue)) return preValue;
      return preValue + '.';
    });
  };

  const handleSubtract = () => {
    setValue((preValue) => {
      if (preValue.length === 0) return preValue;
      if (!hasOperator(preValue)) return preValue + '-';
      return calculate(preValue) + '-';
    });
  };

  const handleAdd = () => {
    setValue((preValue) => {
      if (preValue.length === 0) return preValue;
      if (!hasOperator(preValue)) return preValue + '+';
      return calculate(preValue) + '+';
    });
  };

  const handleMultiple = () => {
    setValue((preValue) => {
      if (preValue.length === 0) return preValue;
      if (!hasOperator(preValue)) return preValue + '×';
      return calculate(preValue) + '×';
    });
  };

  const handleDivide = () => {
    setValue((preValue) => {
      if (preValue.length === 0) return preValue;
      if (!hasOperator(preValue)) return preValue + '÷';
      return calculate(preValue) + '÷';
    });
  };

  const handleEqual = () => {
    setValue((preValue) => {
      if (preValue.length === 0) return preValue;
      if (!hasOperator(preValue)) return preValue;
      return calculate(preValue);
    });
  };

  const handleBack = () => {
    setValue((preValue) => {
      if (preValue.length === 0) return preValue;
      return preValue.substring(0, preValue.length - 1);
    });
  };

  return (
    <View style={styles.container}>
      <Screen value={value} onChange={setValue} style={{ marginBottom: 10 }} />
      <Row style={{ marginBottom: 10 }}>
        <Button onPress={() => handleNumber('%')} disabled>
          %
        </Button>
        <Button onPress={() => handleNumber('√')} disabled>
          √
        </Button>
        <Button onPress={() => setValue('')} size="small">
          CE
        </Button>
        <Button onPress={handleBack} size="small">
          ←
        </Button>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Button onPress={() => handleNumber('7')}>7</Button>
        <Button onPress={() => handleNumber('8')}>8</Button>
        <Button onPress={() => handleNumber('9')}>9</Button>
        <Button onPress={handleDivide}>÷</Button>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Button onPress={() => handleNumber('4')}>4</Button>
        <Button onPress={() => handleNumber('5')}>5</Button>
        <Button onPress={() => handleNumber('6')}>6</Button>
        <Button onPress={handleMultiple}>×</Button>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Button onPress={() => handleNumber('1')}>1</Button>
        <Button onPress={() => handleNumber('2')}>2</Button>
        <Button onPress={() => handleNumber('3')}>3</Button>
        <Button onPress={handleSubtract}>−</Button>
      </Row>
      <Row>
        <Button onPress={handleZero}>0</Button>
        <Button onPress={handleDot}>·</Button>
        <Button onPress={handleEqual}>=</Button>
        <Button onPress={handleAdd}>+</Button>
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
