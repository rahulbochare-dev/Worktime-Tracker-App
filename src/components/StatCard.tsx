import { Lucide } from '@react-native-vector-icons/lucide'
import { StyleSheet, Text, View } from 'react-native'

type props = {
  icon: String,
  iconColor: String,
  title: String,
  mainNumber: Number | String,
  mainNumberText: String,
  tip: String
}

const MainStatCard = ({ icon, iconColor, title, mainNumber, mainNumberText, tip }: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.statHeading}>{title || "N/A"}</Text>
        <Lucide name={icon || "file-question-mark"} size={24} color={iconColor || "white"}/>
      </View>
      <Text style={styles.goalNumberText}>{mainNumber || "N/A"} <Text style={styles.goalNumberDaysText}>{mainNumberText}</Text></Text>
      <View style={styles.tipContainer}>
        <Text style={styles.tipText}>{tip || "N/A"}</Text>
      </View>
    </View>
  )
}

export default MainStatCard

const styles = StyleSheet.create({
  container: {
    width: "48%",
    minHeight: 135,
    backgroundColor: "#151515",
    marginTop: 14,
    borderRadius: 16,
    alignSelf: "center",
    paddingLeft: 18,
    paddingRight: 8
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
  goalNumberDaysText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white",
  },
  tipContainer: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "flex-start",
    textAlign: "left",
    gap: 8,
  },
  headingContainer: {
    width: "100%",
    height: 32,
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 3,
    gap: 4,
  },
  tipText: {
    fontSize: 12,
    fontFamily: "GeistRegular",
    color: "white",
  }
})