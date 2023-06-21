import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../Firebase";
import { saveLoginPref } from "./Storage";
import Toast from "react-native-toast-message";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getDatabase, ref, set, push } from "firebase/database";
import { getLoginPref } from "./Storage";
import React, { useState, useEffect } from "react";
export const register = async (payload, navigation) => {
  const { email, password, name, phone, address } = payload;

  // Register the user with email and password
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Get the newly registered user's ID
      const userId = userCredential.user.uid;

      // Create a reference to the user document using the user ID
      const userRef = doc(db, "users", userId);

      // Store the additional user data in the document
      await setDoc(userRef, {
        name,
        email,
        phone,
        address,
      });

      console.log("User registered successfully!");
      Toast.show({
        type: "success",
        text1: "Register Successfully",
      });

      navigation.navigate("Login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, ">>>code");
      console.log(errorMessage, ">>>Message");
      Toast.show({
        type: "error",
        text1: errorCode,
      });
    });
};

export const login = (payload, navigation) => {
  const { email, pass } = payload;

  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user, ">>> user Credential");

      saveLoginPref(user);

      //  navigation.navigate("TabNav");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, ">>>code");
      console.log(errorMessage, ">>>Message");
      Toast.show({
        type: "error",
        text1: errorCode,
      });
    });
};

export const RetrieveUserById = async () => {
  const userId = await getLoginPref();
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const user = await docSnap.data();
    console.log("Document data:", user);
    return user;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
export const UpdateUser = async (payload) => {
  const userId = await getLoginPref();
  const docRef = doc(db, "users", userId);
  await updateDoc(docRef, payload);
};

export const CreateOrder = async (userdata, restaurant) => {
  const db = getDatabase();
  const ordersRef = ref(db, "orders");
  const newOrderRef = push(ordersRef);
  const orderId = newOrderRef.key;
  const currentDate = new Date().toISOString();
  const userid = getLoginPref();
  const status = "NEW";

  const orderData = {
    id: orderId,
    userID: userid,
    status: status,
    createdAt: currentDate,
    updatedAt: currentDate,
    orderRestaurantId: restaurant[0].id,
    Restaurant: restaurant,
    User: userdata,
  };

  set(newOrderRef, orderData);
};
