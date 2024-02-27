import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    inputBoxTitle: {
      backgroundColor: 'transparent',
      fontSize: 26,
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, 0.7)',
      borderBottomColor: 'black', // Adjust the color as needed
      paddingVertical: 10,
    },
    bodyInputBox: {
      backgroundColor: COLORS.background,
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.7)',
      padding: 10,
      borderWidth: 1,
      height: Dimensions.get('window').height / 4,
      borderColor: 'transparent',
      borderTopColor: '#00FFD1',
      borderRightColor: '#00CCE7',
      borderBottomColor: '#0094FF',
      borderLeftColor: '#00CCE7',
      borderRadius: 20,
    },
    inputBoxNormal: {
      backgroundColor: 'transparent',
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.7)',
      paddingVertical: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    coloredBox: {
      backgroundColor: COLORS.background,
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
})
export default styles;