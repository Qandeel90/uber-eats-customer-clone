import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";

import { register } from "../../Api/Api";
import { useNavigation } from "@react-navigation/native";
const countries = [
  { label: "Country 1", value: "country1" },
  { label: "Country 2", value: "country2" },
  { label: "Country 3", value: "country3" },
  // Add more countries as needed
];
const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleRegister = () => {
    const payload = {
      email,
      password,
      name,
      phone,
      address: {
        city,
        country,
      },
    };
    register(payload, navigation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <View style={styles.registerContainer}>
        <TextInput
          placeholder="Email..."
          onChangeText={(text) => setEmail(text)}
          inputMode="email"
          style={styles.inputs}
        />
        <TextInput
          placeholder="Password..."
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={styles.inputs}
        />
        <TextInput
          placeholder="Name..."
          onChangeText={(text) => setName(text)}
          style={styles.inputs}
        />
        <TextInput
          placeholder="Phone..."
          onChangeText={(text) => setPhone(text)}
          style={styles.inputs}
        />
        <TextInput
          placeholder="Address..."
          onChangeText={(text) => setAddress(text)}
          style={styles.inputs}
        />
        <TextInput
          placeholder="City..."
          onChangeText={(text) => setCity(text)}
          style={styles.inputs}
        />
        {/*   <Picker
          selectedValue={country}
          onValueChange={(value) => setCountry(value)}
        >
          {countries.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker> */}

        {/* Add profile picture input field here */}

        <TouchableOpacity style={styles.registerbtn} onPress={handleRegister}>
          <Text style={styles.registertxt}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginbtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.logintxt}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
