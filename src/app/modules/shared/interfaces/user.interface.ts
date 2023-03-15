import { UserRolePlatformEnum } from '../enums/user-role-platform.enum';

export interface IUser {
  id?: number;
  role: UserRolePlatformEnum;
  name: string;
  email: string;
  password?: string;
  phone: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IUserChangePasswordInfo {
  id: number;
  previousPassword: string;
  newPassword: string;
  confirmPassword: string;
}
