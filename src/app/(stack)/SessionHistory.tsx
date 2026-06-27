import Lucide from '@react-native-vector-icons/lucide'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSessionStore } from '../../store/session.store'
import SessionHistoryListItem from '@/components/SessionHistoryListItem'

const SessionHistory = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.heading}>Session History</Text>
          <Text style={styles.headingSecond}>342 Sessions</Text>
        </View>
      </View>
      <ScrollView style={styles.listScrollContainer}>
        <SessionHistoryListItem />
        <SessionHistoryListItem />
        <SessionHistoryListItem />
        <SessionHistoryListItem />
        <SessionHistoryListItem />
        <SessionHistoryListItem />
        <SessionHistoryListItem />
        <SessionHistoryListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default SessionHistory

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
  listScrollContainer: {
    width: "100%",
    height: "auto",
  }
})