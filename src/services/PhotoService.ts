import { axiosClient } from "../config/axios";

export class PhotoService {
  static async getAll(userId: number) {
    try {
      const response = await axiosClient.get(
        `/api/3/users/${userId}/photos/items/`,
        {
          params: {
            limit: 50
          }
        }
      );

      return response.data;
    } catch (error) {
      return {
        error
      };
    }
  }
}
