import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import PhotoUpdate from './PhotoUpdate';
import Image from '../Helper/Image';
import UserPhotoPostUpdate from '../User/UserPhotoPostUpdate';


const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  // const { photo, comments } = data;

  const [photo, setPhoto] = React.useState(data.photo);
  const [comments, setComments] = React.useState(data.comments);

  const [updatePhoto, setUpdatePhoto] = React.useState(null);

  return (


    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      


      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
        
      </div>
      {/* <br></br> */}
      {updatePhoto && (
        
        <UserPhotoPostUpdate user= {user} photo={photo} setUpdatePhoto={setUpdatePhoto} setPhoto={setPhoto} />
      )}
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.user_login === photo.author ? 
            (
              <PhotoDelete id={photo.id} />
              
              // <PhotoUpdate id={photo.id} />
              
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            {user.data && user.data.user_login === photo.author ? 
            (
              // <PhotoDelete id={photo.id} />
              
              <PhotoUpdate photo={photo} setUpdatePhoto={setUpdatePhoto}/>
              
            ) : (
              <h1></h1>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes1}>
            {/* <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li> */}
            <li >{photo.photo_logradouro} </li>
          </ul>
          {photo.photo_complemento &&
      
          <ul className={styles.attributes1}>
            <li >{photo.photo_complemento} </li>
          </ul>
          }
          <ul className={styles.attributes2}>
            <li >{photo.photo_bairro} </li>
            <li >{photo.photo_localidade} </li>
            <li  >{photo.photo_uf} </li>
            <li>{photo.photo_cep} </li>
          </ul>

          <br></br>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />

    </div>

  );
};

export default PhotoContent;
