import { View, Text, StyleSheet } from "react-native"

interface ChefcitoLogoProps {
  size?: "small" | "medium" | "large"
}

export default function ChefcitoLogo({ size = "large" }: ChefcitoLogoProps) {
  const logoSize = size === "large" ? 120 : size === "medium" ? 80 : 60
  const textSize = size === "large" ? 32 : size === "medium" ? 24 : 18

  return (
    <View style={styles.container}>
      <View style={[styles.chefHat, { width: logoSize, height: logoSize }]}>
        <Text style={[styles.chefEmoji, { fontSize: logoSize * 0.6 }]}>👨‍🍳</Text>
      </View>
      <Text style={[styles.logoText, { fontSize: textSize }]}>Chefcito</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  chefHat: {
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chefEmoji: {
    textAlign: "center",
  },
  logoText: {
    fontWeight: "bold",
    color: "#8B4513",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
})
