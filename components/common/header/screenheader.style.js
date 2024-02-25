import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants/theme";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.background,
    borderRadius: 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 1.25,
  }),
});

export default styles;