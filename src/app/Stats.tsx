import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Lucide } from '@react-native-vector-icons/lucide'
import MainStatCard from '@/components/MainStatCard'

const Stats = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.statsText}>Stats</Text>
          <Text style={styles.heading2Text}>12 Projects</Text>
        </View>
      </View>
      <MainStatCard/>
    </SafeAreaView>
  )
}

export default Stats

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
  }
})