import React from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { setCodeExpired } from "../../../redux/auth/authSlice";
import { timerStyles } from "./Timer.style";

interface IProps {}

const Timer = ({}: IProps) => {
  const [timeLeft, setTimeLeft] = React.useState(59);
  const [minutes, setMinutes] = React.useState(9);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft < 2 && minutes > 0) {
        setMinutes(minutes - 1);
        setTimeLeft(59);
      } else if (minutes === 0 && timeLeft < 2) {
        clearInterval(interval);
        dispatch(setCodeExpired(true));
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <View style={timerStyles.holder}>
      <Text style={timerStyles.text}>
        CODE EXPIRES IN {minutes}:{timeLeft < 10 ? "0" + timeLeft : timeLeft}
      </Text>
    </View>
  );
};
export default Timer;
