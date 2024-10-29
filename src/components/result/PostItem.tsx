import { FC } from 'react';
import { Post } from '../../store/slices/postSlice';

import styles from './Result.module.scss';
type TProps = {
  post: Post;
};

export const PostItem: FC<TProps> = ({ post }) => {
  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
