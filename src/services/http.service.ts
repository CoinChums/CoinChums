import { COINCHUMS_API } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig } from 'axios';
import { ASYNC_STORAGE, CONSTANTS, EReqMethod } from '../constants/enums';
import { isNetworkConnected } from './network.service';

type HttpServiceType = {
  url: string;
  method: EReqMethod;
  authRequired: boolean;
  body?: any;
  header?: { [key: string]: string } | undefined;
  baseUrlRequired?: boolean;
};

export const HttpService = async (param: HttpServiceType) => {
  const hasNetwork = await isNetworkConnected();
  if (!hasNetwork) {
    return Promise.resolve({
      resultStatus: {
        status: 'ERROR',
        errorMessage: 'Network connection is down',
      },
    });
  }

  const {
    url,
    authRequired = true,
    method,
    baseUrlRequired = true,
    body = undefined,
    header,
  } = param;

  let headers: { [key: string]: string } | undefined;
  let requestUrl = COINCHUMS_API;
  if (baseUrlRequired) requestUrl = requestUrl + url;
  else requestUrl = url;

  if (header !== undefined) {
    headers = header;
  } else {
    headers = {
      'Content-type': 'application/json',
    };
  }

  if (authRequired) {
    const bearerToken = await AsyncStorage.getItem(ASYNC_STORAGE.ACCESS_TOKEN);
    const tokenType = 'Bearer';
    headers.authorization = `${tokenType} ${bearerToken}`;
  }

  const axiosParams: AxiosRequestConfig = {
    method: method as string,
    url: requestUrl,
    data: body,
    headers: headers,
  };

  const resp = await axios(axiosParams).catch(error => {
    console.error(error, requestUrl);
    return Promise.reject(CONSTANTS.SERVER_RESOURCE_NOT_FOUND);
  });

  return resp.data;
};
