"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import type { StackNavigationProp } from "@react-navigation/stack"
import type { RootStackParamList } from "../../App"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"

type OrdersScreenNavigationProp = StackNavigationProp<RootStackParamList, "Orders">

interface Props {
  navigation: OrdersScreenNavigationProp
}

interface OrderItemProps {
  title: string
  onRemove: () => void
}

function OrderItem({ title, onRemove }: OrderItemProps) {
  return (
    <View style={styles.orderItem}>
      <Text style={styles.orderItemText}>{title}</Text>
      <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function OrdersScreen({ navigation }: Props) {
  const [nombre, setNombre] = useState("")
  const [ingredients, setIngredients] = useState(["Tomate", "Cebolla", "Ajo"])
  const [recipes, setRecipes] = useState(["Milanesa", "Pasta"])

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index))
  }

  const removeRecipe = (index: number) => {
    setRecipes(recipes.filter((_, i) => i !== index))
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
        <View style={styles.formSection}>
          <CustomInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredientes</Text>
          <View style={styles.itemsList}>
            {ingredients.map((ingredient, index) => (
              <OrderItem key={index} title={ingredient} onRemove={() => removeIngredient(index)} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recetas</Text>
          <View style={styles.itemsList}>
            {recipes.map((recipe, index) => (
              <OrderItem key={index} title={recipe} onRemove={() => removeRecipe(index)} />
            ))}
          </View>
        </View>

        <CustomButton
          title="Realizar Pedido"
          onPress={() => {
            // Handle order submission
            navigation.goBack()
          }}
          style={styles.orderButton}
        />
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
  formSection: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  itemsList: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  orderItemText: {
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
  orderButton: {
    marginBottom: 30,
  },
})
