import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import StreakCard from '../components/StreakCard'
import TodaysGoal from '../components/TodaysGoal'

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}><Text style={styles.welcomeTextGrey}>Good Evening,</Text> User</Text>
      </View>
      <View>
        <Text style={styles.todaysSummaryText}>Today's Summary</Text>
      </View>
      <StreakCard/>
      <TodaysGoal/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#13131A",
    paddingHorizontal: 16
  },
  welcomeTextContainer: {
    width: "auto",
    height: 48,
    borderBottomWidth: 0.3,
    borderBottomColor: "#464646"
  },
  welcomeText: {
    fontSize: 26,
    color: "white"
  },
  welcomeTextGrey: {
    fontSize: 26,
    color: "#828282"
  },
  todaysSummaryText: {
    fontSize: 20,
    fontWeight: "100",
    color: "white",
    marginTop: 8
  },
})