import { StyleSheet, Text, View, Pressable } from 'react-native'
import Lucide from '@react-native-vector-icons/lucide'

type props = {
  title: String,
  width: Number | String,
  primary: Boolean,
  disabled: Boolean,
  destructive: boolean,
  func: Function
}

const Button = ({ title = "Click Here", width = "100%", primary = false, disabled, destructive = false, func }: props) => {
  return (
    <Pressable
      onPress={func}
      disabled={disabled}
      style={({ pressed }) => [
        destructive
          ? styles.buttonDestructive
          : primary
            ? styles.buttonPrimary
            : styles.buttonSecondary,

        { width },

        disabled &&
        (destructive
          ? styles.buttonDestructiveDisabled
          : primary
            ? styles.buttonPrimaryDisabled
            : styles.buttonSecondaryDisabled),

        pressed &&
        (destructive
          ? styles.buttonPressedDestructive
          : primary
            ? styles.buttonPressedPrimary
            : styles.buttonPressedSecondary),
      ]}>
      {destructive && (
        <Lucide name="trash-2" size={24} color="#FF3B30" />
      )}
      <Text
        style={[
          destructive
            ? styles.buttonTextDestructive
            : primary
              ? styles.buttonTextPrimary
              : styles.buttonTextSecondary,

          disabled &&
          (destructive
            ? styles.buttonTextDestructiveDisabled
            : primary
              ? styles.buttonTextPrimaryDisabled
              : styles.buttonTextSecondaryDisabled),
        ]}
      >
        {title}
      </Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonPrimary: {
    height: 50,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    alignSelf: "center",
  },
  buttonSecondary: {
    height: 50,
    backgroundColor: "#0d0d0d",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#707070",
    borderWidth: 0.5,
    alignSelf: "center",
  },
  buttonPrimaryDisabled: {
    backgroundColor: "#746A0E",
  },
  buttonSecondaryDisabled: {
    backgroundColor: "#0d0d0d",
  },
  buttonPressedPrimary: {
    backgroundColor: "#DEC800",
  },
  buttonPressedSecondary: {
    backgroundColor: "#1B1B21",
  },
  buttonTextPrimary: {
    color: "black",
    fontSize: 16,
    fontFamily: "GeistMedium",
  },
  buttonTextPrimaryDisabled: {
    color: "black",
    fontSize: 16,
    fontFamily: "GeistMedium",
  },
  buttonTextSecondary: {
    color: "white",
    fontSize: 16,
    fontFamily: "GeistMedium",
  },
  buttonTextSecondaryDisabled: {
    color: "#828282",
    fontSize: 16,
    fontFamily: "GeistMedium",
  },
  buttonDestructive: {
    height: 50,
    backgroundColor: "#2A0F0F",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#FF3B30",
    borderWidth: 0.5,
    alignSelf: "center",
  },

  buttonPressedDestructive: {
    backgroundColor: "#3A1515",
  },

  buttonDestructiveDisabled: {
    backgroundColor: "#1A0A0A",
    borderColor: "#5A1F1F",
  },

  buttonTextDestructive: {
    color: "#FF3B30",
    fontSize: 16,
    fontFamily: "GeistMedium",
  },

  buttonTextDestructiveDisabled: {
    color: "#A70000",
    fontSize: 16,
    fontFamily: "GeistMedium",
  },
})