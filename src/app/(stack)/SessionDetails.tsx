import MainStatCard from '@/components/MainStatCard'
import Button from '@/components/Button'
import Lucide from '@react-native-vector-icons/lucide'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SessionDetails = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.heading}>Session Details</Text>
          <Text style={styles.headingSecond}>Study Drizzle</Text>
        </View>
      </View>
      <Text style={styles.sessionNumber}>Session #34</Text>
      <MainStatCard icon='target' iconColor='orange' title='Total time' time='3hrs 44mins' insight='Focused for 3hrs 44mins' />
      <View style={styles.fromToContainer}>
        <View style={styles.fromToTextContainer}>
          <Text style={styles.fromToText}>9:34</Text>
          <Text style={styles.ampmText}>AM</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.ampmText}>TO</Text>
          <Text style={styles.dateText}>24 July 2026</Text>
        </View>
        <View style={styles.fromToTextContainer}>
          <Text style={styles.fromToText}>12:34</Text>
          <Text style={styles.ampmText}>PM</Text>
        </View>
      </View>
      <View style={styles.projectContainer}>
        <Text style={styles.projectContainerHeading}>Project</Text>
        <View style={styles.projectNameContainer}>
          <View style={styles.projectNameBadge}></View>
          <View style={styles.projectName}>
            <Text style={styles.projectNameText}>Study Drizzle</Text>
            <Text style={styles.createdAtText}>Created at: 23 Feb 2026</Text>
          </View>
        </View>
      </View>
      <View style={styles.projectTotalTimeContainer}>
        <Text style={styles.projectTotalTimeHeading}>Total time on this project</Text>
        <View style={styles.projectTotalTimeTextContainer}>
          <Lucide name='timer' color={"skyblue"} size={32}/>
          <Text style={styles.projectTotalTimeText}>144hrs 45mins</Text>
        </View>
      </View>
      <View style={styles.buttonConatiner}>
        <Button/>
      </View>
    </SafeAreaView>
  )
}

export default SessionDetails

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#13131A",
    paddingHorizontal: 16,
  },
  headingContainer: {
    width: "100%",
    height: 74,
    borderBottomWidth: 0.3,
    borderBottomColor: "#464646",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
    paddingRight: 14
  },
  heading: {
    fontSize: 20,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
    marginTop: 8
  },
  headingSecond: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "#828282",
  },
  fromToContainer: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  fromToTextContainer: {
    width: "34%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  dateContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    gap: 8
  },
  fromToText: {
    fontSize: 32,
    fontFamily: "GeistMedium",
    color: "white",
  },
  ampmText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "#828282",
  },
  dateText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white",
  },
  sessionNumber: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white",
    marginTop: 12
  },
  projectContainer: {
    width: "100%",
    height: "15%",
    marginTop: 12,
    borderBottomWidth: 0.3,
    borderBottomColor: "#464646",
    borderTopWidth: 0.3,
    borderTopColor: "#464646",
    paddingLeft: 16,
    paddingTop: 10
  },
  projectContainerHeading: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white",
  },
  projectNameContainer: {
    width: "100%",
    height: "70%",
    flexDirection: "row",
    marginTop: 8
  },
  projectNameBadge: {
    width: "1.5%",
    height: "80%",
    backgroundColor: "orange",
    borderRadius: 66
  },
  projectName: {
    width: "100%",
    height: "80%",
    paddingLeft: 14,
    gap: 4,
    justifyContent: "flex-end",
  },
  projectNameText: {
    fontSize: 24,
    fontFamily: "GeistMedium",
    color: "white",
  },
  createdAtText: {
    fontSize: 12,
    fontFamily: "GeistMedium",
    color: "#828282",
  },
  projectTotalTimeContainer: {
    width: "100%",
    height: "14%",
    marginTop: 18,
    backgroundColor: "#1F1F29",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 14
  },
  projectTotalTimeHeading: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white",
  },
  projectTotalTimeTextContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "4%",
    gap: 12,
  },
  projectTotalTimeText: {
    fontSize: 24,
    fontFamily: "GeistMedium",
    color: "white",
  },
  buttonConatiner: {
    width: "100%",
    top: "5%"
  }
})