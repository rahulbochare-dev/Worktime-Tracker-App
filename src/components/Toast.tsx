import Lucide from '@react-native-vector-icons/lucide'
import { StyleSheet, Text, View } from 'react-native'

type props = {
  varient: string,
  message: string,
  messageSecondary: string,
}

const Toast = ({varient, message, messageSecondary}: props) => {
  return (
    <View style={[varient == "success" ? styles.container : styles.containerError]}>
      {varient == "success"? <Lucide name='check-circle-2' size={24} color={"#14C100"}/> :
      <Lucide name='x-circle' size={24} color={"#D50000"}/>}
      <View>
        <Text style={styles.textTop}>{message}</Text>
        {messageSecondary && <Text style={styles.textBottom}>{messageSecondary}</Text>}
      </View>
    </View>
  )
}

export default Toast

const styles = StyleSheet.create({
  container: {
    width: 342,
    height: 62,
    backgroundColor: "#00240F",
    borderWidth: 0.8,
    borderColor: "#093600",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
    paddingLeft: 16,
    elevation: 10,
    zIndex: 10,
    paddingRight: 8,
    position: "absolute",
    bottom: 30,
    alignSelf: "center"
  },
  containerError: {
    width: 342,
    height: 62,
    backgroundColor: "#2D0000",
    borderWidth: 0.8,
    borderColor: "#560000",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
    paddingLeft: 16,
    elevation: 10,
    zIndex: 10,
    position: "absolute",
    bottom: 30,
    alignSelf: "center"
  },
  textTop: {
    fontSize: 14,
    fontFamily: "GeistRegular",
    color: 'white',
  },
  textBottom: {
    fontSize: 12,
    fontFamily: "GeistRegular",
    color: '#828282',
  },
})