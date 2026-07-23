import { StyleSheet, Text, View } from 'react-native'
import { Lucide } from '@react-native-vector-icons/lucide'

type props = {
  title: string,
  time: string | number,
  icon: string,
  insight: string,
  iconColor: string
}

const MainStatCard = ({title, time, icon, insight, iconColor}: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.statHeading}>{title}</Text>
      <Text style={styles.goalNumberText}>{time}</Text>
      <View style={styles.tipContainer}>
        <Lucide name={icon} size={18} color={iconColor} />
        <Text style={styles.tipText}>{insight}</Text>
      </View>
    </View>
  )
}

export default MainStatCard

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 135,
    backgroundColor: "#151515",
    marginTop: 14,
    borderRadius: 16,
    alignSelf: "center",
    paddingHorizontal: 18,
    paddingVertical: 10
  },
  statHeading: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white",
    marginTop: 8
  },
  goalNumberText: {
    fontSize: 32,
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