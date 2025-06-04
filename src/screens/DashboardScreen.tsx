import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "../../App"

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, "Dashboard">

interface Props {
  navigation: DashboardScreenNavigationProp
}

interface MenuItemProps {
  title: string
  icon: string
  onPress: () => void
}

function MenuItem({ title, icon, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default function DashboardScreen({ navigation }: Props) {
  const menuItems = [
    { title: "Recetas de hoy", icon: "📅", onPress: () => navigation.navigate("RecipeSearch") },
    { title: "Recetas", icon: "📖", onPress: () => navigation.navigate("RecipeSearch") },
    { title: "Pedidos", icon: "🛒", onPress: () => navigation.navigate("Orders") },
    { title: "Mis recetas", icon: "👨‍🍳", onPress: () => navigation.navigate("Profile") },
    { title: "Ingredientes", icon: "🥕", onPress: () => navigation.navigate("Orders") },
    { title: "IA", icon: "🤖", onPress: () => {} },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chefcito</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.appImageContainer}>
        <View style={styles.appImage}>
          <Text style={styles.appImageText}>📱</Text>
          <Text style={styles.appImageSubtext}>Conoce nuestra App</Text>
        </View>
      </View>

      <View style={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} title={item.title} icon={item.icon} onPress={item.onPress} />
        ))}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FF8C42",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  profileIcon: {
    fontSize: 24,
    color: "#fff",
  },
  appImageContainer: {
    padding: 20,
  },
  appImage: {
    backgroundColor: "#ddd",
    borderRadius: 15,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 120,
  },
  appImageText: {
    fontSize: 40,
    marginBottom: 10,
  },
  appImageSubtext: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  menuItem: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
  },
  menuText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
})
