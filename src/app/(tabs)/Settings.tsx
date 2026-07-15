import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SetGoalModal from '../../components/SetGoalModal'
import { useState } from 'react'
import SetGoal from '@/components/SetGoal'

const Settings = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleModalVisible = () => {
    setModalVisible(!modalVisible)
  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.heading1Text}>Settings</Text>
        </View>
      </View>
      <SetGoal func={handleModalVisible}/>
      <SetGoalModal visible={modalVisible} cancelFunc={() => setModalVisible(!modalVisible)} toggleModal={setModalVisible} />
    </SafeAreaView>
  )
}

export default Settings

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
  heading1Text: {
    fontSize: 20,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
    marginTop: 8
  }
})