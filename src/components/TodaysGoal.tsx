import Lucide from '@react-native-vector-icons/lucide'
import { StyleSheet, Text, View } from 'react-native'

type props = {
  progress: Number
}

const TodaysGoal = ({progress = 78}: props) => {
  return (
    <View style={styles.todaysGoalContainer}>
      <View style={styles.goalCardNumberContainer}>
        <Text style={styles.todaysGoalText}>Today's Goal</Text>
        <Text style={styles.goalNumberText}>{progress.toString()}% <Text style={styles.goalNumberDaysText}>Completed</Text></Text>
      </View>
      <View style={styles.goalProgressContainer}>
        <View style={styles.progressLabelRow}>
          <Text style={styles.progressLabel}>0</Text>
          <Text style={styles.progressLabel}>25</Text>
          <Text style={styles.progressLabel}>50</Text>
          <Text style={styles.progressLabel}>75</Text>
          <Text style={styles.progressLabel}>100</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>
      <View style={styles.tipContainer}>
        <Lucide name='info' size={18} color={"#f5d100"}/>
        <Text style={styles.tipText}>{100 - progress}% Remaining to reach goal</Text>
      </View>
    </View>
  )
}

export default TodaysGoal

const styles = StyleSheet.create({
  todaysGoalContainer: {
    width: "100%",
    minHeight: 195,
    backgroundColor: "#1F1F29",
    marginTop: 14,
    borderRadius: 16,
    alignSelf: "center",
    paddingHorizontal: 18
  },
  goalCardNumberContainer: {
    height: 100,
    width: "100%",
    borderBottomWidth: 0.3,
    borderBottomColor: "#464646"
  },
  todaysGoalText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white",
    marginTop: 8
  },
  goalNumberText: {
    fontSize: 36,
    marginTop: 4,
    fontFamily: "GeistMedium",
    color: "white",
  },
  goalNumberDaysText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white",
  },
  goalProgressContainer: {
    height: 48,
    paddingTop: 6,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 12,
    fontFamily: "GeistRegular",
    color: 'white',
  },
  progressTrack: {
    width: '100%',
    height: 18,
    backgroundColor: '#2C2C36',
    borderRadius: 50,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#f5d100',
    borderRadius: 50,
  },
  tipContainer: {
    width: "100%",
    height: 32,
    paddingTop: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  tipText: {
    fontSize: 12,
    fontFamily: "GeistRegular",
    color: "white"
  }
})