import API from 'constants/apis';
import request from 'utils/request';
import { GetProfileResponse, LogInRequest, LogInResponse } from './type';

const apis = {
  login: (data: LogInRequest) => request.post<LogInResponse>(API.LOGIN, data),

  getProfile: () => request.get<GetProfileResponse>(API.NHM_ACCOUNT_PROFILE),
};

export default apis;
