import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Note: undefined;
};


export type ScreenProps = NativeStackScreenProps<RootStackParamList>;

export type ListNoteProps = {
  id: string,
  date: string;
  heading: string;
  content: string;
};
