import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { styles } from './styles/styles.js';
import RadioButton from './styles/RadioButton.js';

const App = () => {
  const [weight, setWeight] = useState('');
  const [bottlesConsumed, setBottles] = useState('0');
  const [time, setTime] = useState('0');
  const [bac, setBac] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [gender, setGender] = useState('male');

  const calculateBAC = () => {

    let r = gender === 'male' ? 0.7 : 0.6;
    let litres = bottlesConsumed * 0.33;
    let alc_grams = litres * 8 * 4.5
    let burning = weight / 10;
    let remaining = alc_grams - (burning * time);
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

  const incrTime = () => {
    const newTime = parseInt(time) + 1;
    setTime(newTime.toString());
  };

  const decrTime = () => {
    const newTime = parseInt(time) - 1;
    if (newTime < 0) {
      setTime('0');
    } else {
      setTime(newTime.toString());
    }
  };

  const incrBottle = () => {
    const newBottle = parseInt(bottlesConsumed) + 1;
    setBottles(newBottle.toString());
  };

  const decrBottle = () => {
    const newBottle = parseInt(bottlesConsumed) - 1;
    if (newBottle < 0) {
      setBottles('0');
    } else {
      setBottles(newBottle.toString());
    }
  };

  const containerStyle = {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: isDarkMode ? '#333' : '#fff',
  };

  const textStyle = {
    color: isDarkMode ? '#fff' : '#000',
  };


  const topContainer = {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 5,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: isDarkMode ? '#111' : '#eee',
  };

  return (
    <View style={containerStyle}>
      <ScrollView>
        <View style={topContainer}>
          <Switch
            trackColor={{ false: "#777777", true: "#80bfff" }}
            thumbColor={isDarkMode ? "#ffdd4b" : "#f4f4f4"}
            onValueChange={toggleDarkMode}
            value={isDarkMode}
          />
        </View>
        <View>
          <Text style={[styles.titleStyle, textStyle]}>Alcometer</Text>
        </View>

        <Text style={[styles.label, textStyle]}>Weight (kg)</Text>
        <TextInput
          style={[styles.input, textStyle]}
          keyboardType="numeric"
          onChangeText={text => setWeight(text)}
          value={weight}
        />

        <Text style={[styles.label, textStyle]}>Bottles (0.33l each)</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.button} onPress={decrBottle}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={[styles.input, textStyle]}
            keyboardType="numeric"
            onChangeText={text => setBottles(text)}
            value={bottlesConsumed}
          />
          <TouchableOpacity style={styles.button} onPress={incrBottle}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.label, textStyle]}>Time (h)</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.button} onPress={decrTime}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={[styles.input, textStyle]}
            keyboardType="numeric"
            onChangeText={text => setTime(text)}
            value={time}
          />
          <TouchableOpacity style={styles.button} onPress={incrTime}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gendCont}>
          <Text style={[styles.label, textStyle]}>Select your gender:</Text>
          <Button title={gender} onPress={toggleGender} />
        </View>
        {bac > 0.05 &&
          <Text style={[styles.result, styles.dangerous]}>
            {bac}
          </Text>
        }
        {bac < 0.01 &&
          <Text style={[styles.result, styles.safe]}>
            0.00
          </Text>
        }
        {bac < 0.05 && weight != '' && bac > 0.00 &&
          <Text style={[styles.result, styles.nonZero]}>
            {bac}
          </Text>
        }
        <View style={styles.calcCont}>
          <Button title="Calculate" onPress={calculateBAC} />
        </View>


        {weight === '' &&
          <Text style={[styles.result, styles.dangerous]}>
            Please input your weight!
          </Text>
        }
        {weight <= 0 &&
          <Text style={[styles.result, styles.dangerous]}>
            Weight value must be above 0!
          </Text>
        }

      </ScrollView></View>);
};

export default App;