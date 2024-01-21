import React, {useState} from 'react';
import {View, StyleSheet, Text, Platform, TextInput} from 'react-native';

const Contact = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  return (
    <View style={styles.contactContainer}>
      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Hello, Contact </Text>
        <Text style={styles.showResult}>
          {text}, {number}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          selectionColor="#183153"
          textAlign="center"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
          selectionColor="#183153"
          textAlign="center"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flex: 1,
  },
  contact: {
    flex: 1,
    padding: 5,
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
  },
  contactTitle: {
    textAlign: 'center',
  },
  showResult: {
    padding: 10,
    textAlign: 'center',
    color: 'red',
    fontSize: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
  },
});

export default Contact;
