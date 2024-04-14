import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    margin: "auto",
    maxWidth: 400,
    maxHeight: 350,
    gap: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 15,
    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  loginText: {
    display: "flex",
    backgroundColor: "red",
  },

  loginText: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginLink: {
    fontWeight: "bold",
    color: "blue",
  },
});
