import { Tabs } from "expo-router";
import Lucide from "@react-native-vector-icons/lucide";

export default function RootLayout() {
  return(
  <Tabs screenOptions={{
    tabBarActiveTintColor: "#FFFFFF",
    tabBarStyle: {
      marginBottom: 16,
      backgroundColor: "#1F1F29",
    },
    headerShown: false,
    tabBarLabelStyle: {
      fontSize: 12
    }
  }}
  >
    <Tabs.Screen
      name="Home"
      options={{
        tabBarIcon: ({color}) => {
          return <Lucide name="home" size={22} color={color}/>
        }
      }}
    />
    <Tabs.Screen
      name="Projects"
      options={{
        tabBarIcon: ({color}) => {
          return <Lucide name="clipboard" size={22} color={color}/>
        }
      }}
    />
    <Tabs.Screen
      name="Track"
      options={{
        tabBarIcon: ({color}) => {
          return <Lucide name="alarm-clock-check" size={22} color={color}/>
        }
      }}
    />
    <Tabs.Screen
      name="Stats"
      options={{
        tabBarIcon: ({color}) => {
          return <Lucide name="chart-line" size={22} color={color}/>
        }
      }}
    />
    <Tabs.Screen
      name="Settings"
      options={{
        tabBarIcon: ({color}) => {
          return <Lucide name="settings" size={22} color={color}/>
        }
      }}
    />
  </Tabs>
  );
}
