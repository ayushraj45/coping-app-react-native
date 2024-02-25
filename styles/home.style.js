import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start', 
        paddingTop: 10, // Adjust this value based on your header's height or any other space you want to leave at the top
        paddingHorizontal: 12,
        alignItems: 'center',
        paddingRight: 10
      },
      text: {
        textAlign: 'center',
        fontSize: 30, 
      },
      bold: {
        fontWeight: 'bold',
      },
      btnemptyContainer:  {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
      padding: 0
    }
    });

export default styles;