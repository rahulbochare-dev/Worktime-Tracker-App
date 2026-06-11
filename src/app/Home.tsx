import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Good Evening, User</Text>
      </View>
      <View>
        <Text style={styles.todaysSummaryText}>Today's Summary</Text>
      </View>
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
    height: 54,
    marginTop: 8,
    borderBottomWidth: 0.3,
    borderBottomColor: "#464646"
  },
  welcomeText: {
    fontSize: 28,
    color: "white"
  },
  todaysSummaryText: {
    fontSize: 20,
    color: "white",
    marginTop: 8
  },
})