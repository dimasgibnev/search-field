import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Post {
  id: number;
  title: string;
  body: string;
}

const postSlice = createSlice({
  name: 'posts',
  initialState: { data: [] } as { data: Post[] },
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.data = action.payload;
    }
  }
});

export const { setPosts } = postSlice.actions;

export const selectPosts = (state: RootState) => state.posts.data;

export default postSlice.reducer;
