"use client"

import { useState } from "react"
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "../../App"
import ChefcitoLogo from "../components/ChefcitoLogo"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"

type PasswordChangeScreenNavigationProp = StackNavigationProp<RootStackParamList, "PasswordChange">

interface Props {
  navigation: PasswordChangeScreenNavigationProp
}

export default function PasswordChangeScreen({ navigation }: Props) {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleChange = () => {
    if (password && confirmPassword && password === confirmPassword) {
      navigation.navigate("Dashboard")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
        <View style={styles.content}>
          <ChefcitoLogo size="large" />

          <View style={styles.formContainer}>
            <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

            <CustomInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

            <CustomButton title="Change" onPress={handleChange} style={styles.changeButton} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF8C42",
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  formContainer: {
    marginTop: 40,
  },
  changeButton: {
    marginTop: 20,
  },
})
