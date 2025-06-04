import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"

// Screens
import LoginScreen from "./src/screens/LoginScreen"
import CodeVerificationScreen from "./src/screens/CodeVerificationScreen"
import PasswordChangeScreen from "./src/screens/PasswordChangeScreen"
import DashboardScreen from "./src/screens/DashboardScreen"
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen"
import RecipeSearchScreen from "./src/screens/RecipeSearchScreen"
import OrdersScreen from "./src/screens/OrdersScreen"
import ProfileScreen from "./src/screens/ProfileScreen"

export type RootStackParamList = {
  Login: undefined
  CodeVerification: undefined
  PasswordChange: undefined
  Dashboard: undefined
  RecipeDetail: { recipeId: string }
  RecipeSearch: undefined
  Orders: undefined
  Profile: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CodeVerification" component={CodeVerificationScreen} />
        <Stack.Screen name="PasswordChange" component={PasswordChangeScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        <Stack.Screen name="RecipeSearch" component={RecipeSearchScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
