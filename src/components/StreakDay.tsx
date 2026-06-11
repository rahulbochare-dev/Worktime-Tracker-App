import { StyleSheet, Text, View } from 'react-native'
import Lucide from '@react-native-vector-icons/lucide'

const StreakDay = ({day, isActive}) => {
  return (
    <View style={styles.container}>
      <View style={isActive? styles.iconContainerActive : styles.iconContainerInactive}>
        <Lucide size={24} name='check'/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.dayText}>{day || "N/A"}</Text>
      </View>
    </View>
  )
}

export default StreakDay

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 48,
  },
  iconContainerActive: {
    width: 32,
    height: "65%",
    backgroundColor: "yellow",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  iconContainerInactive: {
    width: 32,
    height: "65%",
    backgroundColor: "#2C2C36",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    width: 32,
    height: "35%",
    justifyContent: "center",
    alignItems: "center"
  },
  dayText: {
    fontSize: 12,
    fontWeight: "100",
    color: "white"
  }
})