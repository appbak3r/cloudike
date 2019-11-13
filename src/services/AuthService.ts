import { axiosClient } from "../config/axios";

type AuthorizePayload = {
  password: string;
};

type AuthorizePhonePayload = {
  phone: string;
} & AuthorizePayload;

type AuthorizeEmailPayload = {
  email: string;
} & AuthorizePayload;

export class AuthService {
  static async getAuth() {
    try {
      const response = await axiosClient.get(`/api/2/accounts/get/`);

      return response.data;
    } catch (error) {
      return {
        error
      };
    }
  }

  static async authorizeWithEmail(data: AuthorizeEmailPayload) {
    try {
      const response = await axiosClient.post("/api/2/accounts/login/", data);

      return response.data;
    } catch (error) {
      return {
        error
      };
    }
  }

  static async authorizeWithPhone(data: AuthorizePhonePayload) {
    try {
      const response = await axiosClient.post(
        "/api/2/accounts/login_by_phone/",
        data
      );

      return response.data;
    } catch (error) {
      return {
        error
      };
    }
  }
}
