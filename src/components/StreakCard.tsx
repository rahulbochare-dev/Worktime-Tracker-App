import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StreakCard = () => {
    return (
        <View style={styles.streakCardContainer}>
            <View style={styles.streakCardNumberContainer}>
                <Text style={styles.currentStreakText}>Current Streak</Text>
                <Text style={styles.currentStreakNumberText}>23 <Text style={styles.currentStreakNumberDaysText}>Days</Text></Text>
            </View>
            <View style={styles.streakCardIconContainer}>

            </View>
        </View>
    )
}

export default StreakCard

const styles = StyleSheet.create({
    streakCardContainer: {
        width: "100%",
        minHeight: 170,
        backgroundColor: "#1F1F29",
        marginTop: 14,
        borderRadius: 16,
        alignSelf: "center",
        flexDirection: "row",
        paddingHorizontal: 18
    },
    streakCardNumberContainer: {
        height: 104,
        width: "70%",
        borderBottomWidth: 0.3,
        borderBottomColor: "#464646"
    },
    currentStreakText: {
        fontSize: 16,
        color: "white",
        marginTop: 8
    },
    currentStreakNumberText: {
        fontSize: 44,
        color: "white",
    },
    currentStreakNumberDaysText: {
        fontSize: 16,
        color: "white",
    },
    streakCardIconContainer: {
        height: 104,
        width: "30%",
        borderBottomWidth: 0.3,
        borderBottomColor: "#464646"
    },
})