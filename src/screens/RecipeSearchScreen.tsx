"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "../../App"

type RecipeSearchScreenNavigationProp = StackNavigationProp<RootStackParamList, "RecipeSearch">

interface Props {
  navigation: RecipeSearchScreenNavigationProp
}

interface RecipeCardProps {
  title: string
  emoji: string
  onPress: () => void
}

function RecipeCard({ title, emoji, onPress }: RecipeCardProps) {
  return (
    <TouchableOpacity style={styles.recipeCard} onPress={onPress}>
      <View style={styles.recipeIcon}>
        <Text style={styles.recipeEmoji}>{emoji}</Text>
      </View>
      <Text style={styles.recipeTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default function RecipeSearchScreen({ navigation }: Props) {
  const [searchText, setSearchText] = useState("")

  const recipes = [
    { title: "Milanesa", emoji: "🍖" },
    { title: "Pasta", emoji: "🍝" },
    { title: "Pizza", emoji: "🍕" },
    { title: "Ensalada", emoji: "🥗" },
    { title: "Sopa", emoji: "🍲" },
    { title: "Tacos", emoji: "🌮" },
    { title: "Hamburguesa", emoji: "🍔" },
    { title: "Sushi", emoji: "🍣" },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Chefcito</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar recetas"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.recipesGrid}>
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              emoji={recipe.emoji}
              onPress={() => navigation.navigate("RecipeDetail", { recipeId: index.toString() })}
            />
          ))}
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
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  recipesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  recipeCard: {
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
  recipeIcon: {
    marginBottom: 10,
  },
  recipeEmoji: {
    fontSize: 40,
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
})
