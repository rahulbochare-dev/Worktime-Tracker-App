import { StyleSheet, Text, TextInput, View } from "react-native";

type props = {
  label?: string;
  placeholder: string;
  name: string;
  value: string;
  func: Function
};

const TextAreaField = ({label, placeholder, name, value, func}: props) => {
  return (
    <View style={styles.mainContainer}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.container}>
        <TextInput
          style={styles.textArea}
          placeholder={placeholder}
          placeholderTextColor="#6B6B76"
          selectionColor="white"
          cursorColor="white"
          multiline
          textAlignVertical="top"
          value={value}
          onChangeText={(text) => func(name, text)}
        />
      </View>
    </View>
  );
};

export default TextAreaField;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginTop: 12,
  },
  label: {
    fontSize: 14,
    fontFamily: "GeistMedium",
    color: "white",
    marginBottom: 6,
  },
  container: {
    width: "100%",
    minHeight: 120,
    borderWidth: 0.5,
    borderColor: "#2F3240",
    borderRadius: 18,
    backgroundColor: "#0D111C",
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  textArea: {
    width: "100%",
    minHeight: 90,
    color: "white",
    fontSize: 16,
    fontFamily: "GeistRegular",
  },
});