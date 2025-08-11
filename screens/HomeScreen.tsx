import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./HomeStyle";
import ListNotes from "../components/ListNotesComponent";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from './Type'; 



// 2. Create the native stack navigator typed with RootStackParamList
const Stack = createNativeStackNavigator<RootStackParamList>();

// 3. Home Screen props type
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export default function HomeScreen({ navigation }: HomeScreenProps) {

  return (
    <View style={styles.containerView}>
      <View style={styles.topBarView}>
        <Text style={styles.titleText}>My notes</Text>
        <View style={styles.subbarView}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Note')}}>
            <View style={styles.circleView}>
              <Image
                source={{
                  uri: "https://img.icons8.com/?size=100&id=62888&format=png&color=22C3E6",
                }}
                style={styles.plusIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.circleView}>
              <Image
                source={{
                  uri: "https://img.icons8.com/?size=100&id=364&format=png&color=a1abc0",
                }}
                style={styles.settingIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.searchBarView}>
        <Image
          source={{
            uri: "https://img.icons8.com/?size=100&id=xd0qGgq6OvFG&format=png&color=000000",
          }}
          style={styles.searchIcon}
        />
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>
      <ListNotes
        date="29.11.2002"
        heading="Toughest Men Prawin"
        content="Iam stronger than any in the world. you may be smarter than me, cooler than me, 
               stronger than me if we get down on treadmill any one of things gonna happen IAM GONNA DIE OR 
               YOU GONNA GET OFF THE TREADMILLS"
      />
    </View>
  );
}
