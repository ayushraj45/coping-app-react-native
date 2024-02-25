import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/theme";


// const styles = StyleSheet.create({
//     btnContainer: {
  
     
    //   backgroundColor: COLORS.background,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   marginTop: 10,
//     },  
//     row: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       marginBottom: 16,
//     },
//     btnImg: (dimension) => ({
//       width: dimension,
//       height: dimension,
//       borderRadius: 1,
//     }),
//   });
  
//   export default styles;


const styles = StyleSheet.create({
    btnContainer:  {
        width: 164,  
      height: 138,
      //backgroundColor: COLORS.background,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      padding: 0
    
     
    },
    btnImg: (dimension) => ({
      width: dimension,  
      height: dimension,  
      borderRadius: 8,
    }),
  });
  

export default styles;