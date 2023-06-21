import { View, Text, Button, Image, Modal, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";

import { useNavigation, CommonActions } from "@react-navigation/native";
import { RetrieveUserById, UpdateUser } from "../../Api/Api";
import { TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import * as ImagePicker from "expo-image-picker";
const ProfileImg =
  "https://png.pngitem.com/pimgs/s/678-6785836_my-account-icon-png-png-download-instagram-profile.png";
const Profile = ({ handleLogout }) => {
  const [user, setUser] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(ProfileImg);

  useEffect(() => {
    RetrieveUserById().then((data) => {
      setUser(data);
    });
  }, [modalVisible]);

  const handleUpdate = () => {
    console.log("call");
    setModalVisible(true);
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        {image && <Image source={{ uri: image }} style={styles.profileImg} />}
        <TouchableOpacity onPress={pickImage} style={styles.cameraIcon}>
          <Feather name="camera" color={"black"} size={10} />
        </TouchableOpacity>
      </View>
      <View style={styles.UserData}>
        <View style={styles.data}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.userTxt}>{user?.name}</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.userTxt}>{user?.email}</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.userTxt}>{user?.phone}</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.userTxt}>
            {user?.address?.city} {user?.address?.country}
          </Text>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <EditCard user={user} setModalVisible={setModalVisible} />
      </Modal>
      <View style={styles.bottomBtn}>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutTxt}>Logout</Text>
          <Ionicons name="power" color={"red"} size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
          <Text style={styles.updateTxt}>Update</Text>
          <Feather name="edit" color={"white"} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const EditCard = (props) => {
  const { user, setModalVisible } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  handleUpdate = () => {
    const payload = {
      name,
      phone,
      addrees: { country, city },
    };
    UpdateUser(payload).then((res) => {
      console.log("update sucessfully");
      Toast.show({
        type: "success",
        text1: "Register Successfully",
      });
      setModalVisible(false);
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffffba",
      }}
    >
      <View
        style={{
          backgroundColor: "#eee",
          width: "80%",
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={{ position: "absolute", top: 5, left: 5 }}
        >
          <Ionicons name="close" color={"red"} size={25} />
        </TouchableOpacity>
        <View style={{ width: "100%", paddingVertical: 5 }}>
          <View style={styles.modelData}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              onChangeText={(text) => setName(text)}
              style={styles.inputs}
            />
          </View>
          <View style={styles.modelData}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              onChangeText={(text) => setName(text)}
              style={styles.inputs}
              editable={false}
              defaultValue={user?.email}
            />
          </View>
          <View style={styles.modelData}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              onChangeText={(text) => setPhone(text)}
              style={styles.inputs}
            />
          </View>
          <View style={styles.modelData}>
            <Text style={styles.label}>Country</Text>
            <TextInput
              onChangeText={(text) => setCountry(text)}
              style={styles.inputs}
            />
          </View>
          <View style={styles.modelData}>
            <Text style={styles.label}>City</Text>
            <TextInput
              onChangeText={(text) => setCity(text)}
              style={styles.inputs}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => handleUpdate()}
          style={{
            alignSelf: "center",
            backgroundColor: "black",
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
