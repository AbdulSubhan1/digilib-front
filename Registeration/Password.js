import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Error from './Error';
import Home from '../Components/Home';
import {createStackNavigator} from '@react-navigation/stack';

function Password({navigation}) {
  const [password, setPassword] = useState('');
  const [cnfrmPassword, setCnfrmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const handleSubmit = () => {
    const user = {
      password,
      cnfrmPassword,
    };
    if (password === '' && cnfrmPassword === '') {
      setError('Please ! Enter your Password');
    } else if (password != cnfrmPassword) {
      setError('The Password you enter is incorrect');
    } else {
      console.log('Success..!!');
    }
  };
  const handleNext = () => {
    handleSubmit();
    navigation.navigate('Home') || navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.register}>Password</Text>

      <TextInput
        style={styles.text}
        placeholder="Enter Password"
        secureTextEntry={!showPass}
        value={password}
        onChangeText={id => setPassword(id.toLowerCase())}
      />
      <TextInput
        style={styles.text}
        placeholder="Confirm Password"
        secureTextEntry={!showPass}
        value={cnfrmPassword}
        onChangeText={id => setCnfrmPassword(id.toLowerCase())}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={showPass}
          onValueChange={setShowPass}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Password {showPass ? 'Hide' : 'Show'}?</Text>
      </View>
      {/* <CheckBox value={showPass} onValueChange={setShowPass} /> */}

      <View style={styles.btn}>
        {error ? <Error message={error} /> : null}
        <Button
          title="Set Password"
          style={[{with: 50}]}
          onPress={() => handleNext()}
        />
      </View>
    </View>
  );
}

export default Password;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    borderBottomWidth: 2,
    margin: 10,
    marginVertical: 10,
    padding: 10,
    width: 250,
  },
  register: {
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'sans',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
