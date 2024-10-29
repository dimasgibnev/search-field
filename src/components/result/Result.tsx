import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PostItem } from './PostItem.tsx';
import { SearchField } from '../search-field/SearchField.tsx';

import { useSelector } from 'react-redux';
import { Post, selectPosts } from '../../store/slices/postSlice';

import styles from './Result.module.scss';

export const Result: FC = () => {
  const posts: Post[] = useSelector(selectPosts);

  const handleSearch = () => {};

  return (
    <div>
      <div className={styles.header}>
        <div>
          <Link to='/'>
            <img src='/google.svg' alt='google' />
          </Link>
        </div>
        <SearchField className={styles.field} refetch={handleSearch} />
      </div>
      <div className={styles.posts}>
        {posts?.length ? (
          <>
            <p>Результатов найдено: {posts.length}</p>
            {posts.map(post => (
              <PostItem key={post.id} post={post} />
            ))}
          </>
        ) : (
          <p>Результатов не найдено!</p>
        )}
      </div>
    </div>
  );
};
