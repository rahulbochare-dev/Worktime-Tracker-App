import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { useState } from "react";
import { useProjectStore } from "../store/projects.store";
import TimeField from "./TimeField";
import Button from "./Button";

type props = {
  visible: boolean,
  toggleModal: Function,
  cancelFunc: Function
};

const SetGoalModal = ({ visible, toggleModal, cancelFunc }: props) => {
  const [goalTime, setGoalTime] = useState({
    hours: null,
    minutes: null
  })

  const onChange = (name: string, number: string) => {
    setGoalTime({ ...goalTime, [name]: number })
  }
  console.log(goalTime)

  return (
    <>
      {visible && (
        <Animated.View
          entering={FadeIn.duration(150)}
          exiting={FadeOut.duration(120)}
          style={styles.backdrop}
        >
          <Animated.View
            entering={FadeIn.duration(150)}
            exiting={FadeOut.duration(120)}
            style={[
              styles.modalContainer,
              {
                transform: [{ scale: 0.96 }],
              },
            ]}
          >
            <Text style={styles.titleText}>Set Goal</Text>
            <View style={styles.inputConatiner}>
              <TimeField
                name="hours"
                placeholder="Hours"
                func={onChange}
              />
              <TimeField
                name="minutes"
                placeholder="Minutes"
                func={onChange}
              />
            </View>
            <Button
              title="Create Project"
              primary={true}
              disabled={false}
              width="100%"
            />

            <Button
              title="Cancel"
              primary={false}
              disabled={false}
              width="100%"
              func={cancelFunc}
            />
          </Animated.View>
        </Animated.View>
      )}
    </>
  );
}

export default SetGoalModal

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    elevation: 9999,
  },
  modalContainer: {
    width: "90%",
    maxWidth: 380,
    backgroundColor: "#0d0d0d",
    borderRadius: 16,
    borderWidth: 0.3,
    borderColor: "#464646",
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    transform: [{ scale: 0.98 }],
  },
  inputConatiner: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleText: {
    fontSize: 20,
    fontFamily: "GeistMedium",
    color: "white",
  },
  projectPlaceholder: {
    color: "#8A8A8A",
    fontSize: 16,
    fontFamily: "GeistRegular",
  }
})