import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const QuestionBox = () => {
  const [title, setTitle] = useState(''); // State variable for the title
  const [content, setContent] = useState(''); // State variable for the content in the colored box
  const [entry, setEntry] = useState(''); // State variable for the entry in the big text input box

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.coloredBox}
        placeholder="Real-Time Questions (AI)"
        onChangeText={(text) => setContent(text)}
        value={content}
      />
      <TextInput
        style={styles.entryBox}
        placeholder="Describe what you're feeling and get Al generated real-time questions to help you cope."
        onChangeText={(text) => setEntry(text)}
        value={entry}
        multiline={true} // Allow multiple lines of text
      />
      <View style={styles.buttonRow}>
        <Button title="Button 1" onPress={() => { /* Handle button press here */ }} />
        <Button title="Button 2" onPress={() => { /* Handle button press here */ }} />
        <Button title="Button 3" onPress={() => { /* Handle button press here */ }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  coloredBox: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  entryBox: {
    padding: 10,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default QuestionBox;