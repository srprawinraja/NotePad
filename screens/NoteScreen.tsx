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
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from './Type'; // adjust path accordingly


// 2. Create the native stack navigator typed with RootStackParamList
const Stack = createNativeStackNavigator<RootStackParamList>();

// 3. Home Screen props type
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Note'>;
export default function HomeScreen({ navigation }: HomeScreenProps) {  return (
    <View style={styles.containerView}>
        <View style={{paddingLeft:20, width:"100%"}}>
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

