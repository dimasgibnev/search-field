import { BsSearch } from 'react-icons/bs';
import { FC, KeyboardEvent, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { postService } from '../../api/services/postService';
import { useDispatch } from 'react-redux';
import { Post, setPosts } from '../../store/slices/postSlice';

import styles from './SearchField.module.sass';

type TPops = {
  refetch: () => void;
  className: string;
};

export const SearchField: FC<TPops> = ({ refetch, className }) => {
  const memorySearch = localStorage.getItem('searchTerm') || '';
  const [searchTerm, setSearchTerm] = useState(memorySearch);
  const dispatch = useDispatch();
  useQueryClient();

  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => postService.getPosts(),
    refetchOnWindowFocus: false,
    select: data =>
      data.filter((post: Post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
  });

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.trim()) {
        localStorage.setItem('searchTerm', searchTerm);
        dispatch(setPosts(data));
        refetch();
      }
    }
  };

  return (
    <div className={styles.field + ' ' + className}>
      <label>
        <BsSearch className={styles.icon} size={22} />
        <input
          type='text'
          placeholder='Введите поисковой запрос или URL'
          onKeyDown={handleSearch}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </label>
    </div>
  );
};
