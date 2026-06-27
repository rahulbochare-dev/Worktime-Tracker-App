import Lucide from '@react-native-vector-icons/lucide'
import { StyleSheet, Text, View } from 'react-native'
import { formatSessionTime } from '../utils/formatSessionTime'

type props = {
  projectName: string,
  totalTime: string,
  timeAgo: string
}

const SessionHistoryListItem = ({projectName, totalTime, timeAgo}: props) => {
  const formattedTime = formatSessionTime(totalTime)

  return (
    <View style={styles.container}>
      <View style={styles.timeAgoContainer}>
        <Text style={styles.timeAgoText}>33 mins ago</Text>
      </View>
      <View style={styles.badge}></View>
      <View style={styles.detailsContainerMain}>
        <View style={styles.details}>
          <Text style={styles.projectNameText}>{projectName}</Text>
          <Text style={styles.projectTimeText}>Total time: {formattedTime}</Text>
        </View>
      <Lucide name='chevron-right' color={"white"} size={24} />
      </View>
    </View>
  )
}

export default SessionHistoryListItem

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    marginVertical: 12
  },
  timeAgoContainer: {
    width: "24%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  badge: {
    width: "1.5%",
    height: "100%",
    backgroundColor: "orange",
    borderRadius: 66
  },
  timeAgoText: {
    fontSize: 16,
    flexWrap: "wrap",
    textAlign: "center",
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "#828282",
  },
  detailsContainerMain: {
    flexDirection: "row",
    alignItems: "center"
  },
  details: {
    width: "80%",
    height: "100%",
    paddingLeft: 10,
    justifyContent: "center",
    gap: 4,
  },
  projectNameText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white"
  },
  projectTimeText: {
    fontSize: 14,
    fontFamily: "GeistMedium",
    color: "#828282"
  },
})