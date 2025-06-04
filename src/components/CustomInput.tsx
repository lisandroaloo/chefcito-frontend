import { TextInput, StyleSheet, type TextInputProps } from "react-native"

interface CustomInputProps extends TextInputProps {
  placeholder: string
}

export default function CustomInput({ placeholder, ...props }: CustomInputProps) {
  return <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#999" {...props} />
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    fontSize: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
})
