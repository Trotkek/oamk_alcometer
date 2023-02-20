import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const App = () => {
  const [weight, setWeight] = useState('');
  const [bottlesConsumed, setBottlesConsumed] = useState('');
  const [timeSinceConsuming, setTimeSinceConsuming] = useState('');
  const [bac, setBac] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [gender, setGender] = useState('male');

  const calculateBAC = () => {
    let r = gender === 'male' ? 0.68 : 0.55;
    let bac = ((bottlesConsumed * 0.33 * 5.14) / (weight * r)) - (0.015 * timeSinceConsuming);
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
        <Text style={[titleStyle, textStyle]}>Alcometer</Text>
      </View>

      <Text style={[styles.label, textStyle]}>Enter your weight (in pounds):</Text>
      <TextInput
        style={[styles.input, textStyle]}
        keyboardType="numeric"
        onChangeText={text => setWeight(text)}
        value={weight}
      />

      <Text style={[styles.label, textStyle]}>Enter the number of bottles consumed (each bottle is 0.33 liters):</Text>
      <TextInput
        style={[styles.input, textStyle]}
        keyboardType="numeric"
        onChangeText={text => setBottlesConsumed(text)}
        value={bottlesConsumed}
      />

      <Text style={[styles.label, textStyle]}>Enter the time since consuming alcohol (in hours):</Text>
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

      <View style={styles.genderContainer}>
        <Text style={[styles.label, textStyle]}>Select your gender:</Text>
        <View style={{flexDirection: 'row'}}>
         <View style={{alignItems: 'center', flexDirection: 'row'}}>
           <RadioButton
             value="male"
             status={gender === 'male' ? 'checked' : 'unchecked'}
             onPress={() => setGender('male')}
           />
           <Text style={textStyle}>Male</Text>
         </View>
         <View style={{alignItems: 'center', flexDirection: 'row'}}>
           <RadioButton
             value="female"
             status={gender === 'female' ? 'checked' : 'unchecked'}
             onPress={() => setGender('female')}
           />
           <Text style={textStyle}>Female</Text>
         </View>
       </View>
      </View>

  <Button title="Calculate" onPress={calculateBAC} />

  {bac > 0 &&
    <Text style={[styles.result, textStyle]}>
      Your BAC is {bac}. {bac >= 0.08 ? "It's not safe for you to drive." : ""}
    </Text>
  }
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