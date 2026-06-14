import { StyleSheet, Text, View } from 'react-native'
import { Lucide } from '@react-native-vector-icons/lucide'

const MainStatCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.statHeading}>Worked so Far</Text>
      <Text style={styles.goalNumberText}>243hr 33min</Text>
      <View style={styles.tipContainer}>
        <Lucide name='trending-up' size={18} color={"#11FF00"} />
        <Text style={styles.tipText}>+122 hrs in last month</Text>
      </View>
    </View>
  )
}

export default MainStatCard

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 135,
    backgroundColor: "#1F1F29",
    marginTop: 14,
    borderRadius: 16,
    alignSelf: "center",
    paddingHorizontal: 18
  },
  statHeading: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white",
    marginTop: 8
  },
  goalNumberText: {
    fontSize: 36,
    marginTop: 6,
    fontFamily: "GeistMedium",
    color: "white",
  },
  tipContainer: {
    width: "100%",
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  tipText: {
    fontSize: 12,
    fontFamily: "GeistRegular",
    color: "white",
  }
})