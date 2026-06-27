import Button from '@/components/Button'
import StartSessionModal from '@/components/StartSessionModal'
import Lucide from '@react-native-vector-icons/lucide'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { convertFormat } from '../../utils/convertFormat'
import { end, getElapsedTime, getIsEnded, getStatus, pause, resetTimer, resume, start } from '../../utils/timer'
import { useProjectStore } from '@/store/projects.store'

const Track = () => {
  const [time, setTime] = useState(0)
  const [status, setStatus] = useState(null)
  const [isEnded, setIsEnded] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const {projects} = useProjectStore()
  const [currentProject, setCurrentProject] = useState(null)

  const { hours, minutes, seconds } = convertFormat(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getElapsedTime())
    }, 1000)

    setStatus(getStatus())
    setIsEnded(getIsEnded())

    return () => clearInterval(interval)
  }, [])

  const findProject = (id: number) => {
    return projects?.find((project) => project.id === id);
  }

  const onSelect = async (id: number) => {
    const result = await findProject(id)
    setCurrentProject(result)
    setModalVisible(!modalVisible)
  }

  const handleStart = () => {
    start()
    setStatus(getStatus())
  }

  const handlePause = () => {
    pause()
    setStatus(getStatus())
  }

  const handleResume = () => {
    resume()
    setStatus(getStatus())
    setIsEnded(getIsEnded())
  }

  const handleEnd = () => {
    end()
    setStatus(getStatus())
    setIsEnded(getIsEnded())
  }

  const handleReset = () => {
    resetTimer()
    setStatus(getStatus())
    setIsEnded(getIsEnded())
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.todaysSummaryText}>Track Time</Text>
          <Text style={styles.totalProjectText}>Today's total: 4hr 33min</Text>
        </View>
      </View>
      <View style={styles.trackContainer}>
        <View style={styles.trackHeadingContainer}>
          <View style={styles.trackHeadingContainerLeft}>
            <Text style={styles.projectDeatilsHeading}>{currentProject?.name}</Text>
            <Text style={styles.projectDeatilsAgo}>Started: 33min ago</Text>
          </View>
          <Lucide name='timer-reset' size={24} color={"white"} onPress={handleReset} />
        </View>
        <View style={styles.trackTimerContainer}>
          <Text style={styles.timerText}>{`${hours}:${minutes}:${seconds}`}</Text>
          <View style={styles.trackTimerLableContainer}>
            <Text style={styles.trackTimerLableText}>H</Text>
            <Text style={styles.trackTimerLableText}>M</Text>
            <Text style={styles.trackTimerLableText}>S</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button title={isEnded ? "Start" : status ? "Running" : time > 0 ? "Resume" : "Start"} primary={false} width={"48%"} disabled={status} func={handleResume} />
          {status ? <Button title={"Pause"} primary={false} width={"48%"} disabled={false} func={handlePause} /> :
            <Button title={"Pause"} primary={false} width={"48%"} disabled={true} />
          }
          <Button title={"End Session"} primary={false} width={"100%"} disabled={false} func={handleEnd} />
        </View>
      </View>
      <View style={styles.startButtonContainer}>
        <Button title={"Start new Session"} primary={true} width={214} disabled={false} func={() => setModalVisible(!modalVisible)}/>
      </View>
      <StartSessionModal visible={modalVisible} cancelFunc={() => setModalVisible(!modalVisible)} startFunc={onSelect}/>
    </SafeAreaView>
  )
}

export default Track

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
  todaysSummaryText: {
    fontSize: 20,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
    marginTop: 8
  },
  totalProjectText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "#828282",
  },
  trackContainer: {
    width: "100%",
    minHeight: 300,
    marginTop: 14,
    backgroundColor: "#1F1F29",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingTop: 10
  },
  trackHeadingContainer: {
    width: "100%",
    minHeight: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trackHeadingContainerLeft: {
    width: "80%",
    minHeight: 55,
  },
  projectDeatilsHeading: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
  },
  projectDeatilsAgo: {
    fontSize: 14,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "#828282",
  },
  trackTimerContainer: {
    width: "100%",
    height: 88,
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  timerText: {
    fontSize: 52,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
    marginTop: 8
  },
  trackTimerLableContainer: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 64,
    alignItems: "center",
  },
  trackTimerLableText: {
    fontSize: 12,
    fontFamily: "GeistRegular",
    color: "#828282",
  },
  buttonsContainer: {
    width: "100%",
    height: 122,
    marginTop: 16,
    paddingTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 8
  },
  startButtonContainer: {
    width: "100%",
    minHeight: 252,
    paddingTop: 8,
    borderRadius: 16,
    borderTopWidth: 0.3,
    borderTopColor: "#464646",
    justifyContent: "flex-end"
  },
  notesHeadingContainer: {
    width: "100%",
    minHeight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
})