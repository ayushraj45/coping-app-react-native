import React, { useState } from 'react';
import {COLORS} from '../../constants/theme';
import {useRouter, Stack } from 'expo-router';
import {Dimensions, SafeAreaView, Text, TextInput, View } from 'react-native';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import icons from '../../constants/icons';
import styles from './[id]Styles';
import { LinearGradient } from 'expo-linear-gradient';

const newEmotionEntry = () => {
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [entry, setEntry] = useState(''); 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background }}>

            <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.background},
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                )
            }}/>

            <View style={styles.container}>
              <TextInput
                style={styles.inputBoxTitle}
                placeholder="Title"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
              />

              <TextInput
                style={styles.bodyInputBox}
                placeholder="Describe what you’re feeling and get AI generated real-time questions to help you cope. "
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                multiline
                numberOfLines={Math.floor(Dimensions.get('window').height / 4 / 20)} // Adjust the height as needed
              />

              <TextInput
                style={styles.inputBoxNormal}
                placeholder="You can journal anything you don’t want AI to know here."
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                multiline
                onChangeText={(text) => setContent(text)}
                value={content}
              />
            </View>

    </SafeAreaView>
  )
};


export default newEmotionEntry;