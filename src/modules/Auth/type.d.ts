export type LogInRequest = {
  email: string;
  password: string;
};

export type LogInResponse = BaseResponse & {
  data: NHMAccount;
  token: string;
};

export type GetProfileResponse = BaseResponse & {
  data: NHMAccount;
};

export interface AuthState {
  auth: NHMAccount | null;
  token: string | null;
  authenticating: boolean;
}
