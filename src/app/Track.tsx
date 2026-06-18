import Button from '@/components/Button'
import Lucide from '@react-native-vector-icons/lucide'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { start, pause, resume, end, getElapsedTime, getStatus, getIsEnded } from '../utils/timer'
import { convertFormat } from '../utils/convertFormat'
import { useState, useEffect } from 'react'

const Track = () => {
  const [time, setTime] = useState(0)
  const [status, setStatus] = useState(null)
  const [isEnded, setIsEnded] = useState(null)

  const { hours, minutes, seconds } = convertFormat(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getElapsedTime())
      console.log(getElapsedTime())
    }, 1000)

    setStatus(getStatus())
    setIsEnded(getIsEnded())
    
    return () => clearInterval(interval)
  }, [])
  console.log(status)

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
            <Text style={styles.projectDeatilsHeading}>Practice Kanji</Text>
            <Text style={styles.projectDeatilsAgo}>Started: 33min ago</Text>
          </View>
          <Lucide name='timer-reset' size={24} color={"white"} />
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
          <Button title={isEnded? "Start" : status? "Running" : time > 0? "Resume" : "Start"} primary={false} width={"48%"} disabled={status} func={handleResume}/>
          {status? <Button title={"Pause"} primary={false} width={"48%"} disabled={false} func={handlePause}/> :
          <Button title={"Pause"} primary={false} width={"48%"} disabled={true}/>
          }
          <Button title={"End Session"} primary={false} width={"100%"} disabled={false} func={handleEnd}/>
        </View>
      </View>
      <View style={styles.notesContainer}>
        <View style={styles.notesHeadingContainer}>
          <Text style={styles.projectDeatilsHeading}>Notes</Text>
          <Lucide name='plus' size={24} color={"white"} />
        </View>
      </View>
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
  notesContainer: {
    width: "100%",
    minHeight: 252,
    marginTop: 12,
    paddingTop: 8,
    borderRadius: 16,
    borderTopWidth: 0.3,
    borderTopColor: "#464646",
  },
  notesHeadingContainer: {
    width: "100%",
    minHeight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
})