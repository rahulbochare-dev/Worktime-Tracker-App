import MainStatCard from '@/components/MainStatCard'
import Button from '@/components/Button'
import { formatSessionTime } from '../../utils/formatSessionTime'
import Lucide from '@react-native-vector-icons/lucide'
import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'
import { useSessionStore } from '@/store/session.store'

const SessionDetails = () => {
  const { id } = useLocalSearchParams()
  const { sessionDetails, getSessionDetails } = useSessionStore()

  useEffect(() => {
    const getDetails = async () => {
      const response = await getSessionDetails(id)
    }
    getDetails()
  }, [])

  const formatTime = (date: Date) => {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const period = hours >= 12 ? "PM" : "AM"
    const formattedHours = hours % 12 || 12

    return {
      time: `${formattedHours}:${String(minutes).padStart(2, "0")}`,
      period,
    }
  }

  const totalTimeOfSession = formatSessionTime(sessionDetails?.totalTime)
  const start = formatTime(new Date(sessionDetails?.startTime))
  const end = formatTime(new Date(sessionDetails?.endTime))

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.heading}>Session Details</Text>
          <Text style={styles.headingSecond}>{sessionDetails?.project.name}</Text>
        </View>
      </View>
      <Text style={styles.sessionNumber}>Session #{sessionDetails?.id}</Text>
      <MainStatCard icon='target' iconColor='orange' title='Total time' time={totalTimeOfSession} insight={`Focused for ${totalTimeOfSession}`}/>
      <View style={styles.fromToContainer}>
        <View style={styles.fromToTextContainer}>
          <Text style={styles.fromToText}>{start?.time}</Text>
          <Text style={styles.ampmText}>{start?.period}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.ampmText}>TO</Text>
          <Text style={styles.dateText}>
            {new Date(sessionDetails?.createdAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Text>
        </View>
        <View style={styles.fromToTextContainer}>
          <Text style={styles.fromToText}>{end?.time}</Text>
          <Text style={styles.ampmText}>{end?.period}</Text>
        </View>
      </View>
      <View style={styles.projectContainer}>
        <Text style={styles.projectContainerHeading}>Project</Text>
        <View style={styles.projectNameContainer}>
          <View style={styles.projectNameBadge}></View>
          <View style={styles.projectName}>
            <Text style={styles.projectNameText}>{sessionDetails?.project.name}</Text>
            <Text style={styles.createdAtText}>Created at:
              {new Date(sessionDetails?.project.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.projectTotalTimeContainer}>
        <Text style={styles.projectTotalTimeHeading}>Total time on this project</Text>
        <View style={styles.projectTotalTimeTextContainer}>
          <Lucide name='timer' color={"skyblue"} size={32} />
          <Text style={styles.projectTotalTimeText}>144hrs 45mins</Text>
        </View>
      </View>
      <View style={styles.buttonConatiner}>
        <Button />
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