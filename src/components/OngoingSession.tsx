import { StyleSheet, Text, View } from 'react-native'

const OngoingSession = () => {
  return (
    <View style={styles.ongoinSessionContainer}>
      <View style={styles.ongoinSessionTextConatiner}>
        <Text style={styles.ongoingSessionText}>OngoingSession</Text>
      </View>
      <Text style={styles.noOngoingSessionText}>No Ongoing Sessions</Text>
      
    </View>
  )
}

export default OngoingSession

const styles = StyleSheet.create({
  ongoinSessionContainer: {
    width: "100%",
    minHeight: 170,
    backgroundColor: "#1F1F29",
    marginTop: 14,
    borderRadius: 16,
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  ongoinSessionTextConatiner: {
    width: "100%",
    minHeight: 22,
  },
  ongoingSessionText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white",
    marginTop: 8
  },
  noOngoingSessionText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "#828282",
    marginTop: 24
  },
})