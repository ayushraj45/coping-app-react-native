import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Move the bottom menu to the bottom of the screen
  },
  bottomMenu: {
    flexDirection: 'row', // Arrange the menu items in a row
    justifyContent: 'space-around', // Evenly distribute the menu items
    backgroundColor: COLORS.background, // Set the background color of the menu
    height: 60, // Set the height of the menu
    paddingTop: 10, // Add some padding at the top of the menu
    paddingBottom: 10, // Add some padding at the bottom of the menu
  },
  menuItem: {
    alignItems: 'center', // Center the menu items vertically
    width: '33%', 
},
  menuSymbol: {
    width: 32, 
    height: 32,
  },
  menuSymbolAddNew: {
    width: 55, 
    height: 55, 
    marginTop: -10, // Add a negative margin-top to adjust the vertical position
  alignItems: 'center', // Center the content within the larger symbol
  justifyContent: 'center',
  },
});

export default styles;