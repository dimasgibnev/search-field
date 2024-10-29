import { FC, useEffect } from 'react';
import { SearchField } from '../search-field/SearchField.tsx';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.sass';

export const Home: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('searchTerm');
  }, []);

  const handleSearch = () => {
    navigate('/results');
  };

  return (
    <div className={styles.home}>
      <img src='/logo.svg' alt='google' />
      <SearchField refetch={handleSearch} className={styles.field} />
    </div>
  );
};
