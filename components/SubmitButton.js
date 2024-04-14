import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function SubmitButton({ onPress, processing, buttonName }) {
  return (
    <TouchableOpacity
      style={[styles.button, { opacity: processing ? 0.6 : 1 }]}
      onPress={onPress}
      disabled={processing}
    >
      {processing ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="white" />
          <Text style={styles.loadingText}>Please wait</Text>
        </View>
      ) : (
        <Text style={styles.buttonText}>{buttonName}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 4,
    backgroundColor: "#5D5FEF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#5D5FEF",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loadingText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
