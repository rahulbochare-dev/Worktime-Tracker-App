import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type props = {
  func: () => void
}

const SetGoal = ({func}: props) => {
  return (
    <Pressable style={styles.container} onPress={func}>
      <Text style={styles.setGoalText}>SetGoal</Text>
      <Text style={styles.goalNoText}>4hr 33min</Text>
    </Pressable>
  )
}

export default SetGoal

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    backgroundColor: "#151515",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16
  },
  setGoalText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
  },
  goalNoText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "#828282",
  }
})