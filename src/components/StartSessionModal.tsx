import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./Button";
import Dropdown from "./Dropdown";

type StartSessionModalProps = {
  visible: boolean;
};

const StartSessionModal = ({ visible }: StartSessionModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleText}>Start New Session</Text>
          <Dropdown/>
          <Button title={"Start Session"} primary={true} disabled={false} width={"100%"}/>
          <Button title={"Cancel"} primary={false} disabled={false} width={"100%"}/>
        </View>
      </View>
    </Modal>
  );
};

export default StartSessionModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  modalContainer: {
    width: "90%",
    maxWidth: 380,
    backgroundColor: "#090913",
    borderRadius: 16,
    borderWidth: 0.3,
    borderColor: "#464646",
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    gap: 16
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
});