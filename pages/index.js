import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Toast from "react-native-toast-message";
import Home from "./Home";
import Signup from "./signup";
import Login from "./Login";
import { useSelector } from "react-redux";
import { styles } from "../styles/pages/index";

const Stack = createStackNavigator();

export default function Index() {
  const loginSuccess = useSelector((state) => state.reducer.loginSuccess);
  const [userAuthenticated, setUserAuthenticated] = useState(loginSuccess);

  useEffect(() => {
    setUserAuthenticated(loginSuccess);
  }, [loginSuccess]);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: {
              backgroundColor: "#DFDFFC",
            },
            headerShown: true,
          }}
        >
          {userAuthenticated ? (
            <Stack.Screen
              name="Welcome To Space-X"
              component={Home}
              options={{
                headerStyle: {
                  backgroundColor: "#5D5FEF",
                },
                headerTitleStyle: {
                  color: "white",
                  fontFamily: "ibarra-regular",
                  fontWeight: "600",
                  fontSize: "20px",
                },
                headerTitleAlign: "center",
              }}
            />
          ) : (
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerStyle: {
                  backgroundColor: "#5D5FEF",
                },
                headerTitleStyle: {
                  color: "white",
                  fontFamily: "ibarra-regular",
                  fontWeight: "600",
                  fontSize: "20px",
                },
                headerTitleAlign: "center",
              }}
            />
          )}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: "#5D5FEF",
              },
              headerTitleStyle: {
                color: "white",
                fontFamily: "ibarra-regular",
                fontWeight: "600",
                fontSize: "20px",
              },
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast />
    </View>
  );
}
