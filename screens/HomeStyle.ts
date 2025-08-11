import { StyleSheet } from "react-native";
export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderColor: "#a1abc0",
    paddingTop: 100,
  },
  topBarView: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    paddingLeft: 10,
  },
  subbarView: { flexDirection: "row" },
  titleText: {
    color: "#a1abc0",
    fontSize: 30,
    marginRight: 40,
  },
  circleView: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  searchBarView: {
    width: "100%",
    padding: 10,
    marginTop: 50,
    borderRadius: 50,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginBottom:10
  },
  searchText: {
    fontSize: 20,
    marginLeft: 20,
    fontStyle: "italic",
    flex:1
  },
  plusIcon: {
    width: 30,
    height: 30,
  },
  settingIcon: {
    width: 30,
    height: 30,
  },
  searchIcon: {
    width: 23,
    height: 23,
    tintColor: "#12a0bb",
  },
});