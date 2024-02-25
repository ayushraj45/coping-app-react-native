import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './BottomMenuStyle';
import icons from '../../constants/icons';


const BottomMenu = () => {
  return (
    <View style={styles.container}>
    <View style={styles.bottomMenu}>
      <TouchableOpacity onPress={() => handleMenuPress()} style={styles.menuItem}>
        <Image source={icons.AllEntryBtn} style={styles.menuSymbol} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleMenuPress()} style={styles.menuItem}>
        <Image source={icons.AddNewBtn} style={styles.menuSymbolAddNew} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleMenuPress()} style={styles.menuItem}>
        <Image source={icons.GratiTokenBtn} style={styles.menuSymbol} />
      </TouchableOpacity>
    </View>
  </View>
);
};

export default BottomMenu;
