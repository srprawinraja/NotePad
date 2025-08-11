import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import styles from './ListNotesComponentStyle'

type ListNotesProps = {
  date: string;
  heading: string;
  content: string;
};

export default function ListNotes({ date, heading, content }: ListNotesProps) {
  return (
    <TouchableOpacity style={styles.notesView}>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.notesTitleText}>{heading}</Text>
      <Text style={styles.notesContentText}>{content.slice(0, 140) + '...'}</Text>
    </TouchableOpacity>
  );
}