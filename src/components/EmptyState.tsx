import Lucide from "@react-native-vector-icons/lucide";
import { StyleSheet, Text, View } from "react-native";

type props = {
  title: string;
  description: string;
  icon: string;
};

const EmptyState = ({ title, description, icon }: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Lucide name={icon} size={32} color="#A1A1AA" />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 28,
    borderRadius: 20,
    marginTop: 14,
  },
  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: "#2A2A35",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: "GeistMedium",
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: "GeistRegular",
    color: "#828282",
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 280,
  },
});