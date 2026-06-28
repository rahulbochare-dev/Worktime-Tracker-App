import MainStatCard from '@/components/MainStatCard'
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
      <MainStatCard icon='target' iconColor='orange' title='Total time' time='3hrs 44mins' insight='Focused for 3hrs 44mins'/>
      <View style={styles.fromToContainer}>

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
    height: "20%",
    backgroundColor: "red"
  }
})