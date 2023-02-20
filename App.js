import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';
//import { styles } from './styles/styles.js';

const App = () => {
  const [weight, setWeight] = useState('');
  const [bottlesConsumed, setBottlesConsumed] = useState('');
  const [timeSinceConsuming, setTimeSinceConsuming] = useState('');
  const [bac, setBac] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [gender, setGender] = useState('male');

  const calculateBAC = () => {

    let r = gender === 'male' ? 0.7 : 0.6;
    let litres = bottlesConsumed * 0.33;
    let alc_grams = litres * 8 * 4.5
    let burning = weight / 10;
    let remaining = alc_grams - (burning * timeSinceConsuming);
    let bac = remaining / (weight * r);
    if (bac < 0) bac = 0;
    setBac(bac.toFixed(2));
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  const toggleGender = () => {
    const newGender = gender === 'male' ? 'female' : 'male';
    setGender(newGender);
  }

  const containerStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isDarkMode ? '#222' : '#fff',
  };

  const titleStyle = {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: isDarkMode ? '#fff' : '#000',
  };

  const textStyle = {
    color: isDarkMode ? '#fff' : '#000',
  };

  const isSafe = {
    color: '#0f0',
  };

  const dangerous = {
    color: '#f00',
  };

  const nonZero = {
    color: '#ff0',
  };

  const topContainer = {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: isDarkMode ? '#1E1E1E' : '#E8E8E8',
  };

  const topContainerItem = {
    marginRight: 20,
  }

  return (
    <View style={containerStyle}>
      <View style={topContainer}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleDarkMode}
          value={isDarkMode}
          style={topContainerItem}
        />
        
      </View>
      <View>
        <Text style={[titleStyle, textStyle]}>Alcometer</Text>
      </View>

      <Text style={[styles.label, textStyle]}>Weight (kg)</Text>
      <TextInput
        style={[styles.input, textStyle]}
        keyboardType="numeric"
        onChangeText={text => setWeight(text)}
        value={weight}
      />

      <Text style={[styles.label, textStyle]}>Bottles consumed (each bottle 0.33l)</Text>
      <TextInput
        style={[styles.input, textStyle]}
        keyboardType="numeric"
        onChangeText={text => setBottlesConsumed(text)}
        value={bottlesConsumed}
      />

      <Text style={[styles.label, textStyle]}>Time since consumption (h)</Text>
      <TextInput
        style={[styles.input, textStyle]}
        keyboardType="numeric"
        onChangeText={text => setTimeSinceConsuming(text)}
        value={timeSinceConsuming}
      />

      <View style={styles.genderContainer}>
        <Text style={[styles.label, textStyle]}>Select your gender:</Text>
        <Button title={gender} onPress={toggleGender} />
      </View>

  {weight === '' &&
    <Text style={[styles.result, dangerous]}>
      Please input your weight!
    </Text>
  }
  {weight <= 0 &&
    <Text style={[styles.result, dangerous]}>
      Weight value must be above 0!
    </Text>
  }
  {bac > 0.05 &&
    <Text style={[styles.result, dangerous]}>
      {bac}
    </Text>
  }
  {bac < 0.01 &&
    <Text style={[styles.result, isSafe]}>
      0.00
    </Text>
  }
  {bac < 0.05 && weight != '' && bac > 0.00 &&
    <Text style={[styles.result, nonZero]}>
      {bac}
    </Text>
  }

  <Button title="Calculate" onPress={calculateBAC} />



</View>
);
};

const styles = StyleSheet.create({
  input: {
  borderWidth: 1,
  borderColor: 'gray',
  borderRadius: 5,
  width: '90%',
  padding: 10,
  marginBottom: 10,
  },
  label: {
  fontSize: 18,
  fontWeight: 'bold',
  width: '90%',
  marginBottom: 5,
  },
  result: {
  fontSize: 20,
  marginTop: 10,
  },
  genderContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '90%',
  marginBottom: 10,
  },
  });


export default App;