import { http } from '../axios';
import { AxiosResponse } from 'axios';

export const postService = {
  getPosts: async () => {
    try {
      const { data }: AxiosResponse = await http.get('/posts');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
