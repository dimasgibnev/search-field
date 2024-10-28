import { SearchField } from '../search-field/SearchField';
import styles from './Home.module.sass';

function Home() {
  return (
    <div className={styles.home}>
      <img src='/logo.svg' alt='google' />
      <SearchField />
    </div>
  );
}

export default Home;
