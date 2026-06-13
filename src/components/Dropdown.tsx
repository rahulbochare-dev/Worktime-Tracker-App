import Lucide from '@react-native-vector-icons/lucide'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Dropdown = () => {
  return (
    <Pressable style={styles.dropdownContainer}>
      <Text style={styles.totalProjectText}>Select Project</Text>
      <Lucide name='chevron-down' size={24} color={"white"}/>
    </Pressable>
  )
}

export default Dropdown

const styles = StyleSheet.create({
  dropdownContainer: {
    width: "100%",
    height: 44,
    borderWidth: 0.5,
    borderColor: "#464646",
    marginTop: 8,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  totalProjectText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "#828282",
  }
})