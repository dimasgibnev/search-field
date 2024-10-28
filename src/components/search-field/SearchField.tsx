import {BsSearch} from 'react-icons/bs'
import styles from './SearchField.module.sass'

export const SearchField = () => {
  return (
    <div className={styles.field}>
      <BsSearch className={styles.icon} size={22}/>
      <input type='text' placeholder='Введите поисковой запрос или URL'/>
    </div>
  );
};
