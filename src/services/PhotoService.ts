import { axiosClient } from "../config/axios";

export class PhotoService {
  static async getAll(userId: number) {
    try {
      const response = await axiosClient.get(
        `/api/3/users/${userId}/photos/items/`,
        {
          params: {
            limit: 5
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

  static async get(userId: number, photoId: string) {
    try {
      const response = await axiosClient.get(
        `/api/3/users/${userId}/photos/items/${photoId}`
      );

      return response.data;
    } catch (error) {
      return { error };
    }
  }
}
