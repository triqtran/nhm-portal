export {};

declare global {
  type BaseResponse = {
    success: boolean;
    data?: any;
    token?: string;
  };

  // Database model
  type NHMAccount = {
    id: number;
    name: string;
    email: string;
    phone?: string;
    role?: string;
    created_at?: string;
    updated_at: string;
  };
}

declare module 'axios' {
  export interface AxiosResponse<T> {
    success: boolean;
    data?: T;
    token?: string;
  }

  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    put<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
    patch<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): Promise<T>;
  }
}
