"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "../../App"
import CustomButton from "../components/CustomButton"

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, "Profile">

interface Props {
  navigation: ProfileScreenNavigationProp
}

interface RecipeItemProps {
  title: string
  onRemove: () => void
}

function RecipeItem({ title, onRemove }: RecipeItemProps) {
  return (
    <View style={styles.recipeItem}>
      <Text style={styles.recipeItemText}>{title}</Text>
      <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function ProfileScreen({ navigation }: Props) {
  const [userRecipes, setUserRecipes] = useState(["Receta 1", "Receta 2", "Receta 3"])

  const removeRecipe = (index: number) => {
    setUserRecipes(userRecipes.filter((_, i) => i !== index))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Chefcito</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarEmoji}>👨‍🍳</Text>
            </View>
          </View>
          <Text style={styles.aliasText}>Alias</Text>
        </View>

        <View style={styles.recipesSection}>
          <Text style={styles.sectionTitle}>Mis Recetas</Text>
          <View style={styles.recipesList}>
            {userRecipes.map((recipe, index) => (
              <RecipeItem key={index} title={recipe} onRemove={() => removeRecipe(index)} />
            ))}
          </View>
        </View>

        <View style={styles.buttonsSection}>
          <CustomButton
            title="Crear receta"
            onPress={() => {
              // Handle create recipe
            }}
            style={styles.actionButton}
          />

          <CustomButton
            title="Editar perfil"
            onPress={() => {
              // Handle edit profile
            }}
            style={styles.actionButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF8C42",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 30,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarEmoji: {
    fontSize: 50,
  },
  aliasText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  recipesSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  recipesList: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
  },
  recipeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  recipeItemText: {
    fontSize: 16,
    color: "#333",
  },
  removeButton: {
    backgroundColor: "#ff4444",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonsSection: {
    marginBottom: 30,
  },
  actionButton: {
    marginBottom: 15,
  },
})
