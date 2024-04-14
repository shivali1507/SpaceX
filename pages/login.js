import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import CustomTextInput from "../Components/CustomTextInput";
import CustomPasswordInput from "../Components/CustomPasswordInput";
import SubmitButton from "../Components/SubmitButton";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loginFunction } from "../redux/action";
import { isEmail } from "validator";
import { style } from "../styles/pages/login";

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loginFail = useSelector((state) => state.reducer.loginFail);
  const loginSuccess = useSelector((state) => state.reducer.loginSuccess);
  const loginPrcessing = useSelector((state) => state.reducer.loginPrcessing);
  const loginMessage = useSelector((state) => state.reducer.loginMessage);
  const [userInput, setUserInput] = useState({ email: "", password: "" });

  const handleUserInput = (name, text) => {
    setUserInput((previousData) => ({
      ...previousData,
      [name]: text.trim(),
    }));
  };

  const handleLoginRedirect = () => {
    navigation.replace("Signup");
  };

  const handleSubmitData = () => {
    if (!userInput.email || !isEmail(userInput.email)) {
      showToast("error", "Please enter a valid email address.");
      return;
    }

    if (!userInput.password) {
      showToast("error", "Please enter your password.");
      return;
    }

    dispatch(loginFunction(userInput));
  };

  const showToast = (status, text) => {
    Toast.show({
      type: status,
      text1: text,
    });
  };

  useEffect(() => {
    if (loginSuccess && !loginPrcessing) {
      showToast("success", "Login success");
      navigation.replace("Signup");
    }

    if (loginFail && !loginPrcessing) {
      showToast("error", loginMessage);
    }
  }, [loginFail, loginSuccess, loginPrcessing]);

  return (
    <View style={style.container}>
      <Text style={style.title}> Login </Text>

      <CustomTextInput
        labelText={"Email"}
        placeHolderText={"Enter Your Email"}
        onChangeText={(text) => handleUserInput("email", text)}
      />

      <CustomPasswordInput
        labelText={"Password"}
        placeHolderText={"Enter Your Password"}
        onChangeText={(text) => handleUserInput("password", text)}
      />

      <SubmitButton
        processing={loginPrcessing}
        buttonName={"Login"}
        onPress={handleSubmitData}
      />

      <View style={style.loginText}>
        <Text>Dont't have account. </Text>
        <TouchableOpacity onPress={handleLoginRedirect}>
          <Text style={style.loginLink}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
