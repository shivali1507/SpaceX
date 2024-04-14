import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import CustomPasswordInput from "../components/CustomPasswordInput";
import SubmitButton from "../components/SubmitButton";
import Toast from "react-native-toast-message";
import { isEmail } from "validator";
import { style } from "../styles/pages/signup";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { signupFunction } from "../redux/action";

export default function Signup() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const signupFail = useSelector((state) => state.reducer.signupFail);
  const signupSuccess = useSelector((state) => state.reducer.signupSuccess);
  const signupPrcessing = useSelector((state) => state.reducer.signupPrcessing);
  const signupMessage = useSelector((state) => state.reducer.signupMessage);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleUserInput = (name, text) => {
    setUserInput((previousData) => ({
      ...previousData,
      [name]: text.trim(),
    }));
  };

  const handleLoginRedirect = () => {
    navigation.replace("Login");
  };

  const handleSubmitData = () => {
    if (!userInput.name) {
      showToast("error", "Please enter your name.");
      return;
    }

    if (!userInput.email || !isEmail(userInput.email)) {
      showToast("error", "Please enter a valid email address.");
      return;
    }

    if (!userInput.password) {
      showToast("error", "Please enter your password.");
      return;
    }

    if (userInput.password.length < 4) {
      showToast("error", "minimum password length is 4.");
      return;
    }

    dispatch(signupFunction(userInput));
  };

  const showToast = (status, text) => {
    Toast.show({
      type: status,
      text1: text,
    });
  };

  useEffect(() => {
    if (!signupFail && signupSuccess && !signupPrcessing) {
      showToast("success", "Signup Success, Please Login To Continue!");

      setUserInput({ name: "", email: "", password: "" });
    }

    if (signupFail && !signupSuccess && !signupPrcessing) {
      showToast("error", signupMessage);
    }
  }, [signupFail, signupSuccess, signupPrcessing]);

  return (
    <View style={style.container}>
      <Text style={style.title}> Signup </Text>

      <CustomTextInput
        labelText={"Name"}
        placeHolderText={"Enter Your Name"}
        onChangeText={(text) => handleUserInput("name", text)}
      />

      <CustomTextInput
        labelText={"Email"}
        placeHolderText={"Enter Your Email"}
        onChangeText={(text) => handleUserInput("email", text)}
      />

      <CustomPasswordInput
        labelText={"Password"}
        placeHolderText={"Enter Your password"}
        onChangeText={(text) => handleUserInput("password", text)}
      />

      <SubmitButton
        processing={signupPrcessing}
        buttonName={"Signup"}
        onPress={handleSubmitData}
      />

      <View style={style.loginText}>
        <Text>Already have an account. </Text>
        <TouchableOpacity onPress={handleLoginRedirect}>
          <Text style={style.loginLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
