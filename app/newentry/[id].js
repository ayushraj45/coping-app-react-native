import React, { useState } from 'react';
import {COLORS} from '../../constants/theme';
import {useRouter, Stack } from 'expo-router';
import {SafeAreaView, Text, TextInput, View } from 'react-native';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import icons from '../../constants/icons';
import styles from './[id]Styles';

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
               <Text style={styles.title}>Title</Text>
                   <TextInput
                      style={styles.coloredBox}
                      placeholder="Real-Time Questions (AI)"
                      onChangeText={(text) => setContent(text)}
                      value={content}
                    />
            </View>

    </SafeAreaView>
  )
};


export default newEmotionEntry;