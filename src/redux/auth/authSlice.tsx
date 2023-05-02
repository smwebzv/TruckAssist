import { createSlice } from "@reduxjs/toolkit";
import { IAuthProps } from "../../helpers/stateTypes/authTypes";

const initialState: IAuthProps = {
  token: "",
  email: "",
  password: "",
  confirmPassword: "",
  authError: {
    email: "",
    password: "",
    verifyCode: "",
    confirmPassword: "",
  },
  loading: false,
  codeExpired: false,
  userData: {},
  loginSuccess: false,
  companyUserData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setAuthErrorEmail: (state, action) => {
      state.authError.email = action.payload;
    },
    setAuthErrorPassword: (state, action) => {
      state.authError.password = action.payload;
    },
    setAuthErrorVerifyCode: (state, action) => {
      state.authError.verifyCode = action.payload;
    },
    setAuthErrorConfirmPassword: (state, action) => {
      state.authError.confirmPassword = action.payload;
    },
    setEmptyAuthError: (state) => {
      state.authError.email = "";
      state.authError.password = "";
      state.authError.verifyCode = "";
      state.authError.confirmPassword = "";
    },
    clearInfo: (state) => {
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCodeExpired: (state, action) => {
      state.codeExpired = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setloginSuccess: (state, action) => {
      state.loginSuccess = action.payload;
    },
    setCompanyUserData: (state, action) => {
      state.companyUserData = action.payload;
    },
  },
});

export const {
  setToken,
  setEmail,
  setPassword,
  setConfirmPassword,
  setAuthErrorEmail,
  clearInfo,
  setLoading,
  setCodeExpired,
  setUserData,
  setloginSuccess,
  setCompanyUserData,
  setAuthErrorPassword,
  setAuthErrorVerifyCode,
  setAuthErrorConfirmPassword,
  setEmptyAuthError,
} = authSlice.actions;

export default authSlice.reducer;
