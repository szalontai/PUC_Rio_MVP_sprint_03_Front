import React from 'react';
import styles from './PhotoUpdate.module.css';
import useFetch from '../../Hooks/useFetch';
// import { useNavigate } from 'react-router-dom';

const PhotoUpdate = ({ photo, setUpdatePhoto }) => {
  const {loading, request } = useFetch();

  async function handleClick() {
    
    setUpdatePhoto(photo);
  }


  return (
    <>
      {loading ? (
        <button className={styles.update} disabled>
          Alterar endereço
        </button>
      ) : (
        <button onClick={handleClick} className={styles.update}>
          Alterar endereço
        </button>
      )}
    </>
  );
};

export default PhotoUpdate;
