import Lucide from "@react-native-vector-icons/lucide";
import { useFonts } from "expo-font";
import { Redirect, Stack, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { useUserStore } from "../../store/user.store";

export default function TabLayout() {
  const [loaded] = useFonts({
    GeistThin: require("../../assets/fonts/Geist-Thin.ttf"),
    GeistLight: require("../../assets/fonts/Geist-Light.ttf"),
    GeistRegular: require("../../assets/fonts/Geist-Regular.ttf"),
    GeistMedium: require("../../assets/fonts/Geist-Medium.ttf"),
    GeistSemiBold: require("../../assets/fonts/Geist-SemiBold.ttf"),
    GeistBold: require("../../assets/fonts/Geist-Bold.ttf"),
    GeistBlack: require("../../assets/fonts/Geist-Black.ttf"),
  });

  if (!loaded) return null;

  const { user } = useUserStore()

  if(!user){
    return <Redirect href={"/Register"}/>
  }

  return (
    <>
      <Tabs screenOptions={{
        tabBarActiveTintColor: "#00000",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#1F1F29",
          height: 108,
          borderWidth: 0.5,
          borderColor: "#464646",
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingHorizontal: 12,
        },
        tabBarButton: (props) => {
          const focused = props["aria-selected"];
          return (
            <Pressable
              onPress={props.onPress}
              onLongPress={props.onLongPress}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                overflow: "hidden",
                backgroundColor: focused ? "yellow" : "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}>{props.children}</Pressable>
          );
        },
      }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color }) => {
              return <Lucide name="home" size={24} color={color} />
            }
          }}
        />
        <Tabs.Screen
          name="Projects"
          options={{
            tabBarIcon: ({ color }) => {
              return <Lucide name="clipboard" size={24} color={color} />
            }
          }}
        />
        <Tabs.Screen
          name="Track"
          options={{
            tabBarIcon: ({ color }) => {
              return <Lucide name="alarm-clock-check" size={24} color={color} />
            }
          }}
        />
        <Tabs.Screen
          name="Stats"
          options={{
            tabBarIcon: ({ color }) => {
              return <Lucide name="chart-line" size={24} color={color} />
            }
          }}
        />
        <Tabs.Screen
          name="Settings"
          options={{
            tabBarIcon: ({ color }) => {
              return <Lucide name="settings" size={24} color={color} />
            }
          }}
        />
      </Tabs>
    </>
  );
}
