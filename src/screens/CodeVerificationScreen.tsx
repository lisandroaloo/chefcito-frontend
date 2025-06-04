"use client"

import { useState } from "react"
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "../../App"
import ChefcitoLogo from "../components/ChefcitoLogo"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"

type CodeVerificationScreenNavigationProp = StackNavigationProp<RootStackParamList, "CodeVerification">

interface Props {
  navigation: CodeVerificationScreenNavigationProp
}

export default function CodeVerificationScreen({ navigation }: Props) {
  const [code, setCode] = useState("")

  const handleConfirm = () => {
    if (code) {
      navigation.navigate("PasswordChange")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
        <View style={styles.content}>
          <ChefcitoLogo size="large" />

          <View style={styles.formContainer}>
            <CustomInput placeholder="Code" value={code} onChangeText={setCode} keyboardType="numeric" maxLength={6} />

            <CustomButton title="Confirm" onPress={handleConfirm} style={styles.confirmButton} />
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
  confirmButton: {
    marginTop: 20,
  },
})
