import { useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFocusEffect } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import StreakCard from '../../components/StreakCard'
import TodaysGoal from '../../components/TodaysGoal'
import { useUserStore } from '@/store/user.store'
import { useStatsStore } from '@/store/stats.store'
import { getCurrentStreak } from '../../db/queries/stats.queries'

const Home = () => {
  const { firstName } = useUserStore()
  const { getGoalPercent, goalCompletePerecnt } = useStatsStore()

  useFocusEffect(
    useCallback(() => {
      const callApi = async () => {
        await getGoalPercent();
      }

      callApi();
    }, [])
  )

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}><Text style={styles.welcomeTextGrey}>Good Evening,</Text> {firstName}</Text>
      </View>
      <View>
        <Text style={styles.todaysSummaryText}>Today's Summary</Text>
      </View>
      <StreakCard/>
      <TodaysGoal progress={Math.round(goalCompletePerecnt)} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0d0d0d",
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
    fontFamily: "GeistMedium",
    color: "white"
  },
  welcomeTextGrey: {
    fontSize: 26,
    color: "#828282"
  },
  todaysSummaryText: {
    fontSize: 20,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
    marginTop: 8
  },
})