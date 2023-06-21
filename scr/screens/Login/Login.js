import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";
import { login } from "../../Api/Api";

const Login = ({ handleLogin }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const payload = {
    email,
    pass,
  };

  const handleLoginPress = () => {
    login(payload, navigation);
    handleLogin();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>Login</Text>
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="Email..."
          onChangeText={(text) => setEmail(text)}
          inputMode="email"
          style={styles.inputs}
        />
        <TextInput
          placeholder="Password..."
          onChangeText={(text) => setPass(text)}
          secureTextEntry={true}
          style={styles.inputs}
        />

        <TouchableOpacity style={styles.loginbtn} onPress={handleLoginPress}>
          <Text style={styles.logintxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerbtn}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.regtxt}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
