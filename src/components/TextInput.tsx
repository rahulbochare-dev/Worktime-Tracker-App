import Lucide from "@react-native-vector-icons/lucide";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  placeholder: string;
  label?: string;
  name: string;
  func: (name: string, text: string) => void;
};

const TextInputField = ({ placeholder, label, name, func }: Props) => {
  return (
    <View style={styles.mainContainer}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="#6B6B76"
          selectionColor="white"
          cursorColor="white"
          onChangeText={(text) => func(name, text)}
        />
      </View>
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginTop: 8,
  },

  label: {
    fontSize: 14,
    fontFamily: "GeistMedium",
    color: "white",
    marginBottom: 6,
  },

  container: {
    width: "100%",
    height: 52,
    borderWidth: 0.5,
    borderColor: "#2F3240",
    borderRadius: 18,
    backgroundColor: "#0d0d0d",
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textInput: {
    flex: 1,
    height: "100%",
    color: "white",
    fontSize: 16,
    fontFamily: "GeistRegular",
    paddingVertical: 0,
    marginRight: 10,
  },
});