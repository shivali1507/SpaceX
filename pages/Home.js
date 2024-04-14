import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  ScrollView,
  Image,
  Picker,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getLaunchData, logoutFunction } from "../redux/action";
import CustomTextInput from "../Components/CustomTextInput";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/pages/home";

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const dispatch = useDispatch();
  const launchesData = useSelector((state) => state.reducer.launchesData);
  const logoutSuccess = useSelector((state) => state.reducer.logoutSuccess);
  const getLaunchesDataProcessing = useSelector(
    (state) => state.reducer.getLaunchesDataProcessing
  );
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getLaunchData(search, selectedYear, selectedStatus));
  }, [search, selectedYear, selectedStatus]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const logout = () => {
    dispatch(logoutFunction());
  };

  const years = Array.from({ length: 25 }, (_, index) => 2000 + index);

  useEffect(() => {
    navigation.replace("/");
  }, [logoutSuccess]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.searchBox}>
          <CustomTextInput
            placeHolderText={"Search By Title"}
            onChangeText={(text) => setSearch(text)}
          />
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedYear}
            style={styles.picker}
            onValueChange={(itemValue) => {
              setSelectedYear(itemValue === "" ? "" : itemValue);
            }}
          >
            <Picker.Item label="Select Year" value="" />
            {years.map((year) => (
              <Picker.Item
                key={year}
                label={String(year)}
                value={String(year)}
              />
            ))}
          </Picker>

          <Picker
            selectedValue={selectedStatus}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedStatus(itemValue)}
          >
            <Picker.Item label="Select Status" value="" />
            <Picker.Item label="Success" value="true" />
            <Picker.Item label="Fail" value="false" />
          </Picker>
        </View>
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}> Items Found: {launchesData.length} </Text>
      {getLaunchesDataProcessing ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <ScrollView contentContainerStyle={styles.tasksContainer}>
          {launchesData?.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={{ uri: item.links.mission_patch_small }}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.text}>{item.mission_name}</Text>
              <Text style={styles.text}>
                {formatDate(item.launch_date_local)}
              </Text>
              <Text style={styles.text}>{item.rocket.rocket_name}</Text>
              <Text style={styles.text}>{item.launch_site.site_name}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Home;
