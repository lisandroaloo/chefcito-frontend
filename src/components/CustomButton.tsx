import { TouchableOpacity, Text, StyleSheet, type ViewStyle, type TextStyle } from "react-native"

interface CustomButtonProps {
  title: string
  onPress: () => void
  style?: ViewStyle
  textStyle?: TextStyle
  disabled?: boolean
}

export default function CustomButton({ title, onPress, style, textStyle, disabled = false }: CustomButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style, disabled && styles.disabled]} onPress={onPress} disabled={disabled}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8B4513",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabled: {
    backgroundColor: "#ccc",
  },
})
