import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import styles from "./HomeStyle";
import ListNotes from "../components/ListNoteComponent";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenProps } from "./Type";
import { ListNoteProps } from "./Type";
import { useEffect, useState } from "react";
export default function HomeScreen({ navigation }: ScreenProps) {
  const allNotes: ListNoteProps[] = [
    {
      id: "0",
      date: "29.11.2002",
      heading: "Toughest Men Prawin",
      content:
        "Iam stronger than any in the world. you may be smarter than me, cooler than me, stronger than me if we get down on treadmill any one of things gonna happen IAM GONNA DIE OR YOU GONNA GET OFF THE TREADMILLS",
    },
    {
      id: "1",
      date: "29.11.2002",
      heading: "Toughest Men thanos",
      content:
        "Iam stronger than any in the world. you may be smarter than me, cooler than me, stronger than me if we get down on treadmill any one of things gonna happen IAM GONNA DIE OR YOU GONNA GET OFF THE TREADMILLS",
    },
    {
      id: "2",
      date: "29.11.2002",
      heading: "Toughest Men deadpool",
      content:
        "Iam stronger than any in the world. you may be smarter than me, cooler than me, stronger than me if we get down on treadmill any one of things gonna happen IAM GONNA DIE OR YOU GONNA GET OFF THE TREADMILLS",
    },
  ];

  const [searchText, setSearchText] = useState<string>("");

  const [filteredNotes, setFilteredNotes] = useState<ListNoteProps[]>([]);

  useEffect(() => {
    if (searchText === "") {
      setFilteredNotes(allNotes);
    } else {
      const filtered = allNotes.filter(
        (note) =>
          note.heading.toLowerCase().includes(searchText.toLowerCase()) ||
          note.content.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredNotes(filtered);
    }
  }, [searchText]);
  return (
    <View style={styles.containerView}>
      <View style={styles.topBarView}>
        <Text style={styles.titleText}>My notes</Text>
        <View style={styles.subbarView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Note");
            }}
          >
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
        <TextInput
          style={styles.searchText}
          onChangeText={setSearchText}
          placeholderTextColor={"#12a0bb"}
          placeholder="Search"
          allowFontScaling
        >
          {searchText}
        </TextInput>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={filteredNotes}
        renderItem={({ item }) => <ListNotes {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
