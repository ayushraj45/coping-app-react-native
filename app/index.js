import {View, Text, ScrollView, SafeAreaView, FlatList, Pressable, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import {useRouter, Stack } from 'expo-router';
import {COLORS} from '../constants/theme';
import icons from '../constants/icons';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import styles from '../styles/home.style';
import EmotionBtnFlatList from '../components/home/EmotionBtnFlatList';
import EmotionBtn from '../components/home/EmotionBtn';
import BottomMenu from '../components/common/BottomMenu';

const Home = () => {

    const router = useRouter();
    const menuIcon = "copingaitwo\\assets\\icons\\SideBarMenuBtn.png";
    const userName = "dummy";

    const emotionBtnData = [
        {id: 'happy', imageUrl: icons.happybtn},
        {id: 'sad', imageUrl: icons.SadBtn},
        {id: 'jealous', imageUrl: icons.JealousBtn},
        {id: 'scared', imageUrl: icons.ScaredBtn},
        {id: 'angry', imageUrl: icons.AngryBtn},
        {id: 'anxious', imageUrl: icons.AnxiousBtn}
 
    ];

    const handleEmotionPress = (item) => {

        router.push(`/newentry/${item.id}`);

    }

    return (
       <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background }}>

            <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.background},
                headerTitle: userName + "'s Coping",
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                )
            }}/>

            <View style={styles.container}>
            <Text style={styles.text}>
        <Text style={styles.bold}>How are you{'\n'}
        feeling today?</Text>
      </Text>
      <FlatList 
                data={emotionBtnData}
                renderItem={({ item }) => (
                    <EmotionBtn iconUrl={item.imageUrl} dimension="100%"/>
                )}
                numColumns={2} 
                columnWrapperStyle={{gap:15}}
                ItemSeparatorComponent={() => <View style={{width: 20}} />}/>
            </View>

            <View>
            
            </View>

            <TouchableOpacity style={styles.btnemptyContainer}>
      <Image
        source={icons.btnEmpty}
        contentFit='cover'
       // style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
                <BottomMenu/>
       </SafeAreaView>
       

    )
}

export default Home; 