import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { useFocusEffect } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainStatCard from '@/components/MainStatCard'
import StatCard from '@/components/StatCard'
import WeekLineChart from '@/components/WeekLineChart'
import { useStatsStore } from '../../store/stats.store'
import { getCurrentStreak } from '@/db/queries/stats.queries'

const Stats = () => {
  const { getWeekTotalTime, getMonthTotalTime } = useStatsStore()
  const [streak, setStreak] = useState(null)

  useFocusEffect(() => {
    const callApi = async () => {
      await getWeekTotalTime()
      const response = await getMonthTotalTime()
      const streakResponse = await getCurrentStreak()
      setStreak(streakResponse)

    }
    callApi()
  })

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.statsText}>Stats</Text>
          <Text style={styles.heading2Text}>12 Projects</Text>
        </View>
      </View>
      <ScrollView>
        <MainStatCard />
        <View style={styles.cardContainer}>
          <StatCard
            title={"Streak"}
            icon={"flame"}
            iconColor={"orange"}
            mainNumber={streak}
            mainNumberText={"Days"}
            tip={"35 Days away from 100"} />
          <StatCard
            title={"Avg/day"}
            icon={"timer"}
            iconColor={"#0090FF"}
            mainNumber={4.3}
            mainNumberText={"Hours"}
            tip={"2 hr more than last day"} />
          <StatCard
            title={"This Month"}
            icon={"calendar-1"}
            iconColor={"#AF53FF"}
            mainNumber={136}
            mainNumberText={"Hours"}
            tip={"22 hrs more than last month"} />
          <StatCard
            title={"This Week"}
            icon={"calendar-days"}
            iconColor={"#78C749"}
            mainNumber={35.7}
            mainNumberText={"Hours"}
            tip={"3 hrs less than last week"} />
        </View>
        <WeekLineChart />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Stats

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0d0d0d",
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
  statsText: {
    fontSize: 20,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
    marginTop: 8
  },
  heading2Text: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "#828282",
  },
  cardContainer: {
    width: "100%",
    marginTop: 8,
    marginBottom: 16,
    paddingTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
})