import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import EmotionBtn from './EmotionBtn';
import icons from '../../constants/icons';
import styles from './EmotionBtnFlatListStyle';
//import happybtn from '../../assets/btns/happybtn';


const EmotionBtnFlatList = () => {
console.log("success");

// const emotionBtnData = [
//     {id: '1', imageUrl: happybtn},
//     {id: '2', imageUrl: happybtn},
//     {id: '3', imageUrl: happybtn},

// ];

const emotionBtnData = [
    {id: '1', imageUrl: icons.menu},
    {id: '2', imageUrl: icons.menu},
    {id: '3', imageUrl: icons.menu},
    {id: '4', imageUrl: icons.menu},
    {id: '5', imageUrl: icons.happybtn},
    {id: '6', imageUrl: icons.happybtn}
];

const renderItem = ({item}) => {
    <EmotionBtn iconUrl={item.imageUrl} dimension="100%" />
}

return (
    <View style={styles.container}>
      <FlatList
        data={emotionBtnData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} 
      />
    </View>
  );
};

export default EmotionBtnFlatList;