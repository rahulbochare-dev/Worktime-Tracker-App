import { StyleSheet, Text, View, Image } from 'react-native'
import StreakDay from '../components/StreakDay'

const StreakCard = () => {
    return (
        <View style={styles.streakCardContainer}>
            <View style={styles.streakFlex}>
                <View style={styles.streakCardNumberContainer}>
                    <Text style={styles.currentStreakText}>Current Streak</Text>
                    <Text style={styles.currentStreakNumberText}>23 <Text style={styles.currentStreakNumberDaysText}>Days</Text></Text>
                </View>
                <View style={styles.streakCardIconContainer}>
                    <Image width={34} src='src/assets/burn.png' />
                </View>
            </View>
            <View style={styles.streakCardDaysContainer}>
                <StreakDay day={"Mon"} isActive={true} />
                <StreakDay day={"Tue"} isActive={true} />
                <StreakDay day={"Wed"} isActive={true} />
                <StreakDay day={"Thu"} isActive={true} />
                <StreakDay day={"Fri"} isActive={true} />
                <StreakDay day={"Sat"} isActive={true} />
                <StreakDay day={"Sun"} isActive={false} />
            </View>
        </View>
    )
}

export default StreakCard

const styles = StyleSheet.create({
    streakCardContainer: {
        width: "100%",
        minHeight: 160,
        backgroundColor: "#131313",
        marginTop: 14,
        borderRadius: 16,
        alignSelf: "center",
        paddingHorizontal: 18,
    },
    streakFlex: {
        flexDirection: "row"
    },
    streakCardNumberContainer: {
        height: 95,
        width: "70%",
        borderBottomWidth: 0.3,
        borderBottomColor: "#464646"
    },
    currentStreakText: {
        fontSize: 16,
        fontFamily: "GeistMedium",
        color: "white",
        marginTop: 8
    },
    currentStreakNumberText: {
        fontSize: 36,
        fontFamily: "GeistMedium",
        color: "white",
    },
    currentStreakNumberDaysText: {
        fontSize: 16,
        fontFamily: "GeistMedium",
        color: "white",
    },
    streakCardIconContainer: {
        height: 95,
        width: "30%",
        borderBottomWidth: 0.3,
        borderBottomColor: "#464646",
    },
    streakCardDaysContainer: {
        height: 60,
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        paddingTop: 8,
        justifyContent: "space-between"
    },
})