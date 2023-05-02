import SecureDBGateway from "../../gateways/SecureDBGateway";
import {
  setAuthErrorEmail,
  setAuthErrorPassword,
  setAuthErrorVerifyCode,
  setCodeExpired,
  setCompanyUserData,
  setEmptyAuthError,
  setLoading,
  setloginSuccess,
  setToken,
  setUserData,
} from "../../redux/auth/authSlice";
import { axiosInstance } from "../../helpers/axiosInterceptor";
import errorStrings from "../../helpers/errorStrings";
import {
  IAuthErrorsProps,
  IUserDataProps,
} from "../../helpers/stateTypes/authTypes";

export const login =
  (info: { email: string; password: string; authError: IAuthErrorsProps }) =>
  (dispatch: any, handleRedirect: any) => {
    const data = {
      email: info.email,
      password: info.password,
    };

    axiosInstance
      .post("account/mobile/login", data)
      .then(async (res) => {
        dispatch(setToken(res?.data.token));
        dispatch(setUserData(res.data));
        await SecureDBGateway.set("user-data", res.data);
        if (res.data.companies.length === 1) {
          selectCompany(res.data.companies[0].id)(dispatch);
          dispatch(setLoading(false));
          dispatch(setEmptyAuthError());
        } else {
          handleRedirect();
        }
      })
      .catch((err) => {
        dispatch(setLoading(false));
        if (err.response.data.errorCode === "403") {
          dispatch(setAuthErrorPassword(errorStrings.wrongPassword));
        } else {
          dispatch(setAuthErrorEmail(err.response.data.error));
        }
      });
  };

export const createAccount =
  (
    confirmationEmail: string | undefined,
    info: { authError: IAuthErrorsProps }
  ) =>
  (handleRedirect: any, dispatch: any) => {
    const data = {
      email: confirmationEmail,
    };

    axiosInstance
      .put("account/mobile/createaccount", data)
      .then((res) => {
        handleRedirect();
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(setLoading(false));
        dispatch(setAuthErrorEmail(err.response.data.error));
      });
  };

export const verifyDriver =
  (
    confirmationEmail: string | undefined,
    loginCode: string | undefined,
    resetPassword: boolean | undefined,
    info: { authError: IAuthErrorsProps },
    route: string
  ) =>
  (dispatch: any, navigate: any) => {
    const data = {
      email: confirmationEmail,
      code: loginCode,
    };

    axiosInstance
      .put("account/mobile/verifydriver", data)
      .then((res) => {
        navigate(route, {
          resetPassword: resetPassword,
          confirmationEmail: confirmationEmail,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(setLoading(false));
        if (err.response.data.errorCode === "401") {
          dispatch(setCodeExpired(true));
        }
        dispatch(setAuthErrorVerifyCode(err.response.data.error));
      });
  };

export const selectCompany = (id: number) => (dispatch: any) => {
  const data = {
    companyId: id,
  };

  axiosInstance
    .post("account/selectcompany", data)
    .then(async (res) => {
      dispatch(setloginSuccess(true));
      dispatch(setCompanyUserData(data));
      await SecureDBGateway.set("company-user-data", res.data);
    })
    .catch((err) => {
      console.log("error", err.response.data);
    });
};

export const createDriverPassword =
  (
    confirmationEmail: string | undefined,
    info: { password: string; authError: IAuthErrorsProps }
  ) =>
  (dispatch: any, handleRedirect: any) => {
    const data = {
      email: confirmationEmail,
      password: info.password,
    };

    axiosInstance
      .put("account/mobile/createpassword", data)
      .then(async (res) => {
        dispatch(setToken(res?.data.token));
        dispatch(setUserData(res.data));
        await SecureDBGateway.set("user-data", res.data);
        if (res.data.companies.length === 2) {
          selectCompany(res.data.companies[0].id)(dispatch);
        } else {
          handleRedirect();
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(setLoading(false));
        dispatch(setAuthErrorPassword(err.response.data.error));
      });
  };

export const forgotPassword =
  (
    confirmationEmail: string | undefined,
    info: { authError: IAuthErrorsProps }
  ) =>
  (handleRedirect: any, dispatch: any) => {
    const data = {
      email: confirmationEmail,
    };

    axiosInstance
      .put("account/mobile/forgotpassword", data)
      .then(async (res) => {
        handleRedirect();
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(setLoading(false));
        dispatch(setAuthErrorPassword(err.response.data.error));
      });
  };

export const verifyResetPassword =
  (
    confirmationEmail: string | undefined,
    loginCode: string | undefined,
    resetPassword: boolean | undefined,
    info: { authError: IAuthErrorsProps; userData: IUserDataProps },
    route: string
  ) =>
  (dispatch: any, navigate: any) => {
    const data = {
      email: confirmationEmail,
      code: loginCode,
    };

    axiosInstance
      .put("account/mobile/verifyforgotpassword", data)
      .then(async (res) => {
        dispatch(setToken(res?.data.token));
        info.userData.token = res.data.token;
        dispatch(setUserData(info.userData));
        await SecureDBGateway.set("user-data", info.userData);
        navigate(route, {
          resetPassword: resetPassword,
          confirmationEmail: confirmationEmail,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(setLoading(false));
        if (err.response.data.errorCode === "401") {
          dispatch(setCodeExpired(true));
        }
        dispatch(setAuthErrorVerifyCode(err.response.data.error));
      });
  };

export const setNewPassword =
  (info: { password: string; authError: IAuthErrorsProps }) =>
  (dispatch: any, handleRedirect: any) => {
    const data = {
      newPassword: info.password,
    };

    axiosInstance
      .put("account/setnewpassword", data)
      .then((res) => {
        handleRedirect();
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(setAuthErrorPassword(err.response.data.error));
      });
  };
