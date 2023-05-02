import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import * as RootNavigation from "./RootNavigation";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/dashboardScreen/DashboardScreen";
import RepairScreen from "../screens/repairScreen/RepairScreen";
import LoadScreen from "../screens/loadScreen/LoadScreen";
import { setCurrentScreen } from "../redux/menu/menuSlice";
import CreateNewPassword from "../screens/authScreens/createNewPassword/CreateNewPassword";
import ForgotPassword from "../screens/authScreens/forgotPassword/ForgotPassword";
import GetStarted from "../screens/authScreens/getStarted/GetStarted";
import SwitchCompanyScreen from "../screens/authScreens/switchCompanyScreen/SwitchCompanyScreen";
import ConfirmationCodeScreen from "../screens/authScreens/confirmationCodeScreen/ConfirmationCodeScreen";
import RegisterScreen from "../screens/authScreens/registerScreen/RegisterScreen";
import SignInScreen from "../screens/authScreens/signInScreens/SignInScreen";
import AuthScreen from "../screens/authScreens/AuthScreen";
import { RootState } from "../redux/store/store";
import FuelScreen from "../screens/fuelScreen/FuelScreen";
import Menu from "../screens/menu/Menu";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector((state: RootState) => state.auth);
  const isBlured = useSelector((state: RootState) => state.blur.isBlured);
  const { isSearchInputFocused, focusedRepairShop } = useSelector(
    (state: RootState) => state.repairData
  );

  React.useEffect(() => {
    if (loginSuccess) {
      dispatch(
        setCurrentScreen(
          RootNavigation?.navigationRef?.current?.getCurrentRoute()?.name
        )
      );
    }
  }, []);

  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        hidden={false}
        translucent={true}
        backgroundColor={"transparent"}
        networkActivityIndicatorVisible={true}
      />
      <NavigationContainer ref={RootNavigation.navigationRef}>
        <Stack.Navigator>
          {loginSuccess ? (
            <Stack.Group>
              <Stack.Screen
                name="dashboard-screen"
                component={DashboardScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="repair-screen"
                component={RepairScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="load-screen"
                component={LoadScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="fuel-screen"
                component={FuelScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen
                name="auth-screen"
                component={AuthScreen}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="signIn-screen"
                component={SignInScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="register-screen"
                component={RegisterScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="confirmation-code-screen"
                component={ConfirmationCodeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="switch-company-screen"
                component={SwitchCompanyScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="get-started"
                component={GetStarted}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="forgot-password-screen"
                component={ForgotPassword}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="create-new-password-screen"
                component={CreateNewPassword}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Group>
          )}
        </Stack.Navigator>
        <>
          {loginSuccess && (!isSearchInputFocused ? (
            !isBlured ? (
              Object.keys(focusedRepairShop).length === 0 ? (
                <Menu />
              ) : null
            ) : null
          ) : null)}
        </>
      </NavigationContainer>
    </>
  );
};

export default MainStackNavigator;
