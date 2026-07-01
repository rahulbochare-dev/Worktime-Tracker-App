import {Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Lucide from "@react-native-vector-icons/lucide";

type props = {
  visible: boolean;
  onClose: () => void;
  onRename: () => void;
  onDelete: () => void;
};

const Menu = ({visible ,onClose, onRename, onDelete}: props) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.modal}>
          <TouchableOpacity
            style={styles.option}
            activeOpacity={0.8}
            onPress={() => {
              onClose();
              onRename()}}>
            <View style={styles.left}>
              <Lucide name="pencil" size={20} color="#FFFFFF" />
              <Text style={styles.text}>Rename</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            style={styles.option}
            activeOpacity={0.8}
            onPress={() => {
              onClose();
              onDelete()}}>
            <View style={styles.left}>
              <Lucide name="trash-2" size={20} color="#EF4444" />
              <Text style={styles.deleteText}>Delete</Text>
            </View>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default Menu;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: 220,
    backgroundColor: "#0d0d0d",
    borderRadius: 18,
    borderWidth: 0.5,
    borderColor: "#3A3A46",
    overflow: "hidden",
  },
  option: {
    height: 54,
    paddingHorizontal: 18,
    justifyContent: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "GeistMedium",
  },
  deleteText: {
    color: "#EF4444",
    fontSize: 16,
    fontFamily: "GeistMedium",
  },
  divider: {
    height: 0.5,
    backgroundColor: "#3A3A46",
  },
});