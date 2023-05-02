export interface IAuthErrorsProps {
  email?: string;
  password?: string;
  verifyCode?: string;
  confirmPassword?: string;
}

export interface ICompanys {
  companyName?: string;
  id?: number;
  isActive?: boolean;
  isDivision?: boolean;
  lastLogin?: string;
  logo?: string;
  companyId?: number;
}

export interface IUserDataProps {
  areSettingsUpdated?: boolean;
  avatar?: any;
  companies?: ICompanys[];
  companyName?: string;
  companyUserId?: number;
  driverId?: number;
  firstName?: string;
  lastName?: string;
  refreshToken?: string;
  token?: string;
  userId?: number;
}

export interface IAuthProps {
  token: string;
  email: string;
  password: string;
  confirmPassword: string;
  authError: IAuthErrorsProps;
  loading: boolean;
  codeExpired: boolean;
  userData: IUserDataProps;
  loginSuccess: boolean;
  companyUserData: ICompanys;
}
