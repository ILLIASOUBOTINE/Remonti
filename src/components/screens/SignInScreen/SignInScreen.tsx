import React, {useState, useEffect} from 'react';
import {View, Button, TextInput, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function onAuthStateChanged(user) {
    if (user) {
      // Hide the code input and show a success message
      setMessage('User successfully signed in!');
      // You can navigate to another screen here if you need
    }
  }

  async function signInWithPhoneNumber() {
    if (!phoneNumber) {
      setMessage('Please enter a phone number');
      return;
    }
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error(error);
      setMessage('Failed to send verification code. Please try again.');
    }
  }

  async function confirmCode() {
    if (!code) {
      setMessage('Please enter the verification code');
      return;
    }
    try {
      await confirm.confirm(code);
      setMessage('Code confirmed successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Invalid code. Please try again.');
    }
  }

  return (
    <View style={styles.container}>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      {!confirm ? (
        <>
          {console.log('Rendering phone number input and sign-in button')}
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
          />

          <Text onPress={signInWithPhoneNumber} style={styles.buttonText}>
            Phone Number Sign In
          </Text>
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Verification Code"
            keyboardType="number-pad"
            onChangeText={text => setCode(text)}
            value={code}
          />
          <Button title="Confirm Code" onPress={confirmCode} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonText: {
    color: 'blue',
    textAlign: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'blue',
    marginBottom: 12,
  },
  message: {
    marginBottom: 12,
    color: 'red',
  },
});

export default SignInScreen;
