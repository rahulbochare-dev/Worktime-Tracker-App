import { StyleSheet, Text, View, Pressable } from 'react-native'

type props = {
  title: String,
  width: Number | String,
  primary: Boolean,
  disabled: Boolean
}

const Button = ({ title = "Click Here", width = "100%", primary = false, disabled }: props) => {
  return (
    <Pressable disabled={disabled} style={({pressed}) => [primary ? styles.buttonPrimary : styles.buttonSecondary, { width }, disabled && (primary? styles.buttonPrimaryDisabled : styles.buttonSecondaryDisabled), pressed && (primary? styles.buttonPressedPrimary : styles.buttonPressedSecondary)]}>
      <Text style={[primary ? styles.buttonTextPrimary : styles.buttonTextSecondary, disabled && (primary? styles.buttonTextPrimaryDisabled : styles.buttonTextSecondaryDisabled)]}>{title}</Text>
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
  },
  buttonSecondary: {
    height: 50,
    backgroundColor: "#2C2C36",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#707070",
    borderWidth: 0.5,
  },
  buttonPrimaryDisabled: {
    backgroundColor: "#746A0E",
  },
  buttonSecondaryDisabled: {
    backgroundColor: "#2C2C36",
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
})