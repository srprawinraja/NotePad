import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  InputAccessoryView,
  TextInput,
} from "react-native";
import homeStyle from "./HomeStyle";
import styles from "./NoteStyle"
import { ScreenProps } from './Type'; // adjust path accordingly



export default function HomeScreen({ navigation }: ScreenProps) {  return (
    <View style={styles.containerView}>
        <View style={styles.bar}>
        <TouchableOpacity style={homeStyle.circleView} onPress={()=>{navigation.goBack()}}>
      <Image
        src="https://img.icons8.com/?size=100&id=bb5otgOrCxAR&format=png&color=12a0bb"
        style={styles.backIcon}
      />
      </TouchableOpacity>
      </View>

      <View style={styles.subContainerView}>
        <TextInput
          placeholder="Title"
          allowFontScaling
          style={styles.titleText}
        ></TextInput>
        <TextInput style={styles.contentText} multiline>sljfdsljfdkls</TextInput>
      </View>
    </View>
  );
}

