import {
  setAuthErrorPassword,
  setConfirmPassword,
  setLoading,
} from "../redux/auth/authSlice";
import {
  createAccount,
  createDriverPassword,
  forgotPassword,
  login,
  setNewPassword,
} from "../api/auth/authActions";
import errorStrings from "./errorStrings";

const isDataValidate =
  (
    info: {
      loading: boolean;
      email: string;
      authError: {
        email?: string;
        password?: string;
        confirmPassword?: string;
      };
      password: string;
      confirmPassword: string;
    },
    inputsType: string | undefined,
    page: string | undefined,
    confirmationEmail: string | undefined,
    resetPassword: boolean | undefined
  ) =>
  (
    handleRedirect: () => void,
    dispatch: (arg0: any) => void
  ) => {
    if (inputsType === "email") {
      if (resetPassword) {
        forgotPassword(confirmationEmail, info)(
          handleRedirect,
          dispatch
        );
      } else {
        createAccount(confirmationEmail, info)(
          handleRedirect,
          dispatch
        );
      }
    } else if (inputsType === "email-password") {
      login(info)(dispatch, handleRedirect);
    } else if (inputsType === "password-confirmPassword") {
      setTimeout(() => {
        if (info.password !== info.confirmPassword) {
          console.log(errorStrings.passwordsNotMatch);
          dispatch(setConfirmPassword(""));
          dispatch(setLoading(false));
          dispatch(setAuthErrorPassword(errorStrings.passwordsNotMatch));
        } else {
          if (page === "switch-company-screen") {
            createDriverPassword(confirmationEmail, info)(
              dispatch,
              handleRedirect,
            );
          } else {
            setNewPassword(info)(dispatch, handleRedirect);
          }
        }
      }, 1500);
    }
  };

export default isDataValidate;
