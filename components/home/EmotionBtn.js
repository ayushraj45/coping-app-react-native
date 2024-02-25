import { Image, Pressable, TouchableOpacity } from "react-native";

import styles from "./EmotionBtnStyle";

const EmotionBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        contentFit='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default EmotionBtn;