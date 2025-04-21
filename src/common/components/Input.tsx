import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

const Input = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor="#a1a1aa"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 16,
    fontSize: 14,
  },
});

export default Input;
