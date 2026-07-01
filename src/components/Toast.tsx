import Lucide from '@react-native-vector-icons/lucide'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRef, useEffect } from 'react'

type props = {
  varient: string,
  message: string,
  messageSecondary: string,
  onHide: () => void;
}

const Toast = ({ varient, message, messageSecondary, onHide }: props) => {
  const insets = useSafeAreaInsets();
  const translateY = useRef(new Animated.Value(40)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  const hideAnimation = (onComplete: () => void) => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),

      Animated.timing(translateY, {
        toValue: 40,
        duration: 250,
        useNativeDriver: true,
      }),

      Animated.timing(scale, {
        toValue: 0.95,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(onComplete);
  };

  useEffect(() => {
    translateY.setValue(40);
    opacity.setValue(0);
    scale.setValue(0.9);

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),

      Animated.spring(translateY, {
        toValue: 0,
        friction: 8,
        tension: 80,
        useNativeDriver: true,
      }),

      Animated.spring(scale, {
        toValue: 1,
        friction: 8,
        tension: 80,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      hideAnimation(onHide);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        varient == "success" ? styles.container : styles.containerError,
        {
          bottom: insets.bottom + 50,
        },
        {opacity,
          transform: [
            { translateY },
            { scale },
          ],
        },
      ]} >
      {varient == "success" ? <Lucide name='check-circle-2' size={24} color={"#14C100"} /> :
        <Lucide name='x-circle' size={24} color={"#D50000"} />}

      <View style={{ flex: 1, paddingRight: 12 }}>
        <Text numberOfLines={2}
          ellipsizeMode="tail" style={styles.textTop}>{message}</Text>

        {messageSecondary && <Text style={styles.textBottom}>{messageSecondary}</Text>}
      </View>
    </Animated.View>
  )
}

export default Toast

const styles = StyleSheet.create({
  container: {
    width: 342,
    maxWidth: "90%",
    height: 62,
    backgroundColor: "#00240F",
    borderWidth: 0.8,
    borderColor: "#093600",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 12,
    paddingLeft: 16,
    elevation: 10,
    zIndex: 10,
    paddingRight: 8,
    position: "absolute",
    bottom: 30,
    alignSelf: "center"
  },
  containerError: {
    width: 342,
    maxWidth: "90%",
    height: 62,
    backgroundColor: "#2D0000",
    borderWidth: 0.8,
    borderColor: "#560000",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 12,
    paddingLeft: 16,
    elevation: 10,
    zIndex: 10,
    position: "absolute",
    bottom: 30,
    alignSelf: "center"
  },
  textTop: {
    fontSize: 14,
    fontFamily: "GeistRegular",
    color: 'white',
    flexShrink: 1,
    flexWrap: "wrap",
  },
  textBottom: {
    fontSize: 12,
    fontFamily: "GeistRegular",
    color: '#828282',
    flexShrink: 1,
    flexWrap: "wrap",
  },
})