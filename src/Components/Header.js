import React from 'react';
import styles from '../Styles/Header.module.css';
import {Link} from 'react-router-dom';
// Importando svg
import {ReactComponent as Dogs} from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  console.log(data);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? 
        (<Link className={styles.login} to='/login'>{data.nome}</Link>) : 
        (<Link className={styles.login} to='/login'>Login/Criar</Link>)
        }
      </nav>
    </header>
  )
}

export default Header;
