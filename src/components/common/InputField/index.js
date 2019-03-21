import React from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';

const InputField = props => {
  const {
    placeholder,
    onChangeText
  } = props;

  return(
    <TextInput
      style={styles.inputStyle}
      onChangeText={(text) => onChangeText({text})}
      placeholder={placeholder}
    />
  )};

const styles = StyleSheet.create({
  inputStyle: {
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 5,
    padding:15,
    fontSize: 18,
    borderRadius: 10,
    marginTop: 10,
  }
});

export default InputField