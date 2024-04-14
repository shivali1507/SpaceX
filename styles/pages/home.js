import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  subContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  pickerContainer: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    marginTop: 10,
  },
  picker: {
    height: 40,
    flex: 1,
    width: "40%",
    borderRadius: 6,
    marginHorizontal: "2.5%",
  },
  searchBox: {
    marginHorizontal: "2.5%",
    width: "50%",
    marginTop: 10,
    marginBottom: 2,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  tasksContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  card: {
    backgroundColor: "#DFDFFC",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    maxWidth: "280px",
    height: "320px",
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  heading: {
    fontWeight: "bold",
    paddingTop: 20,
  },
  logoutButton: {
    marginTop: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#5D5FEF",
    marginHorizontal: "2.5%",
    height: 40,
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
});
