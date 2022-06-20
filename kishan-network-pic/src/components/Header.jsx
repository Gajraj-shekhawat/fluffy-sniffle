
import styles from './styles/header.module.css';
import {AiOutlineMenu} from 'react-icons/ai'
const Header = () => {
  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.logo}>
          <h3>OYODO</h3>
        </div>
        <div className={styles.heading_options}>
          <h5>HOME</h5>
          <h5>DAPIBUS</h5>
          <h5>ULTRICIES</h5>
          <h5>BIBENDUM</h5>
          <h5>MAGMA</h5>
        </div>
        <div className={styles.menu}>
          <AiOutlineMenu color={ 'white'} />
          
        </div>
      </div>
      <div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          debitis fugiat susc
        </span>
        <br />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        </span>
        <br />
        <span>Lorem ipsum dolor sit amet consecte</span>
      </div>
    </div>
  );
};

export default Header;
