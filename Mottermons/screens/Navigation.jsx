import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FullPostScreen } from "./FullPost";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./Home";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Mattermost'}} />
        <Stack.Screen name="FullPost" component={FullPostScreen} options={{title:'Mattermost.Alfastrah'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
