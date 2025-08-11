import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./homeStyle";
import ListNotes from "../components/ListNotesComponent";
export default function Home() {
  return (
    <View style={styles.containerView}>
      <View style={styles.topBarView}>
        <Text style={styles.titleText}>My notes</Text>
        <View style={styles.subbarView}>
          <TouchableOpacity>
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
