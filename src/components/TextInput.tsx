import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type props = {
  placeholder: string
  label: string
}

const TextInputField = ({ placeholder, label }: props) => {
  const [value, setValue] = useState("")

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text>{label}</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor={"#464646"}
            cursorColor={"black"}
            value={value}
            onChangeText={setValue} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TextInputField

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    width: "90%",
    alignSelf: "center",
  },
  container: {
    width: "100%",
    height: 44,
    borderWidth: 0.5,
    borderColor: "#464646",
    marginTop: 8,
    borderRadius: 16,
    alignItems: "center",
    paddingHorizontal: 12,
  },
  textInput: {
    width: "100%",
    height: "100%"
  }
})