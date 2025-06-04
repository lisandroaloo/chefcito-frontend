"use client"

import { useState } from "react"
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "../../App"
import ChefcitoLogo from "../components/ChefcitoLogo"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">

interface Props {
  navigation: LoginScreenNavigationProp
}

export default function LoginScreen({ navigation }: Props) {
  const [alias, setAlias] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    // Simulate login logic
    if (alias && password) {
      navigation.navigate("Dashboard")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
        <View style={styles.content}>
          <ChefcitoLogo size="large" />

          <View style={styles.formContainer}>
            <CustomInput placeholder="Alias" value={alias} onChangeText={setAlias} autoCapitalize="none" />

            <CustomInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

            <CustomButton title="Login" onPress={handleLogin} style={styles.loginButton} />
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
  loginButton: {
    marginTop: 20,
  },
})
