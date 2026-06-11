import Lucide from "@react-native-vector-icons/lucide";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    GeistThin: require("../assets/fonts/Geist-Thin.ttf"),
    GeistLight: require("../assets/fonts/Geist-Light.ttf"),
    GeistRegular: require("../assets/fonts/Geist-Regular.ttf"),
    GeistMedium: require("../assets/fonts/Geist-Medium.ttf"),
    GeistSemiBold: require("../assets/fonts/Geist-SemiBold.ttf"),
    GeistBold: require("../assets/fonts/Geist-Bold.ttf"),
    GeistBlack: require("../assets/fonts/Geist-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }

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
