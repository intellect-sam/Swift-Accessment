export type Notification =
  | 'error'
  | 'loading'
  | 'info'
  | 'warning'
  | 'success'
  | undefined;

export interface ISetAdmin {
  username: string;
  password: string;
}

// export interface ISetAdmin {
//   profileId: string;
//   surname: string;
//   firstName: string;
//   otherName: string;
//   countryId: string;
//   countryFlag: string;
//   status: string;
//   email: string;
//   phoneNumber: string;
//   deviceHasChanged: boolean;
//   hasCreatedSecurityPin: boolean;
//   hasCreatedTransactionPin: boolean;
//   hasValidId: boolean;
//   hasSetBiometrics: boolean;
//   hasValidBvn: boolean;
//   hasProfilePicture: boolean;
//   hasWallet: boolean;
//   hasValidatedMail: boolean;
//   hasValidatedPhone: boolean;
//   hasVirtualAccount: boolean;
//   hasCompletedProfile: boolean;
//   tokenDetail: {
//     error: string;
//     error_description: string;
//     access_token: string;
//     token_type: string;
//     refresh_token: string;
//     expires_in: string;
//     scope: string;
//   };
//   xpressWallet: {
//     accountCode: string;
//     accountName: string;
//     currency: string;
//     balance?: number;
//     currencyCode: string;
//   };
//   walletAccount: string;
//   virtualAccount: {
//     accountNumber: string;
//     bankCode: string;
//     bankName: string;
//     accountName: string;
//   };
// }

export interface LoginResponse {
  data: {
    admin: ISetAdmin;
    token: string;
  };
  message: string;
  success: boolean;
}

export interface UserModel {
  status: string;
  lastName: string;
  firstName: string;
  otherName?: string;
  gender: string;
  mobilePhone: string;
  email: string;
}

export interface RoleModel {
  roleName: 'SuperAdmin';
  permissions: null;
}
