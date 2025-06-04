import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RouteProp } from "@react-navigation/native"
import type { RootStackParamList } from "../../App"
import CustomButton from "../components/CustomButton"

type RecipeDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, "RecipeDetail">
type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, "RecipeDetail">

interface Props {
  navigation: RecipeDetailScreenNavigationProp
  route: RecipeDetailScreenRouteProp
}

export default function RecipeDetailScreen({ navigation }: Props) {
  const ingredients = ["Milanesa de carne", "Pan rallado", "Huevos", "Papas fritas", "Ensalada", "Limón"]

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
        <View style={styles.recipeImageContainer}>
          <View style={styles.recipeImage}>
            <Text style={styles.recipeImageText}>🍖</Text>
          </View>
        </View>

        <View style={styles.recipeInfo}>
          <Text style={styles.recipeName}>Milanesa</Text>
          <View style={styles.rating}>
            <Text style={styles.stars}>⭐⭐⭐</Text>
          </View>
        </View>

        <View style={styles.ingredientsSection}>
          <Text style={styles.sectionTitle}>Ingredientes:</Text>
          {ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
              <Text style={styles.ingredientText}>• {ingredient}</Text>
            </View>
          ))}
        </View>

        <View style={styles.instructionsSection}>
          <Text style={styles.sectionTitle}>Preparación:</Text>
          <View style={styles.instructionItem}>
            <Text style={styles.instructionText}>1. Preparar la milanesa</Text>
          </View>
          <View style={styles.instructionItem}>
            <Text style={styles.instructionText}>2. Freír las papas</Text>
          </View>
          <View style={styles.instructionItem}>
            <Text style={styles.instructionText}>3. Preparar ensalada</Text>
          </View>
        </View>

        <CustomButton title="Pedido" onPress={() => navigation.navigate("Orders")} style={styles.orderButton} />
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
  recipeImageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  recipeImage: {
    width: 200,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  recipeImageText: {
    fontSize: 60,
  },
  recipeInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  recipeName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  rating: {
    marginBottom: 10,
  },
  stars: {
    fontSize: 20,
  },
  ingredientsSection: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  ingredientItem: {
    paddingVertical: 5,
  },
  ingredientText: {
    fontSize: 16,
    color: "#666",
  },
  instructionsSection: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  instructionItem: {
    paddingVertical: 5,
  },
  instructionText: {
    fontSize: 16,
    color: "#666",
  },
  orderButton: {
    marginBottom: 30,
  },
})
