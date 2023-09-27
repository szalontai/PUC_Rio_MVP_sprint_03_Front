// import React from 'react';

import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';
import useFetchImg from '../../Hooks/useFetchImg';
// import { PHOTO_GET2 } from '../../Api';
import Loading from '../Helper/Loading';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {


//   const { data, loading, error, request } = useFetchImg();
//   const [infinite, setInfinite] = React.useState(true);
//   const myImage = React.createElement("img", {
//     src: photo.src,
//     // any other image attributes you need go here
//  }, null);


  function handleClick() {
    setModalPhoto(photo);
  }

  // React.useEffect(() => {
  //   async function fetchPhotos() {
  //     const { url, options } = PHOTO_GET2(photo.id);
  //     const { response, json } = await request(url, options);
  //     if (response && response.ok) setInfinite(false);
   
  //   }
  //   fetchPhotos();
  // }, [request]);

  // if (loading) return <Loading />;
  // if (data)
  

    return (
      
      <li className={styles.photo} onClick={handleClick}>
        {/* {myImage}  */}
        <Image src={photo.src} alt={photo.title} />
        {/* {myImage} */}
        <span className={styles.visualizacao}>{photo.acessos}</span>
      </li>
    );
  // else return null;
};



export default FeedPhotosItem;








// import styles from './FeedPhotosItem.module.css';
// import Image from '../Helper/Image';
// import React, { useState, useEffect } from 'react';

// const FeedPhotosItem = ({ photo, setModalPhoto }) => {

//   function handleClick() {
//     setModalPhoto(photo);
//   }


//   useEffect(() => {
//     // Substitua a URL pelo endpoint Flask que retorna o arquivo codificado em base64
//     const apiUrl = 'http://localhost:5000/uploads/alex-ramon-QdUKqkaT1gE-unsplash.jpg';

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         // Decodifique o conteúdo base64 em bytes
//         const bytes = atob(data.file_content_base64);

//         // Crie um blob a partir dos bytes
//         const blob = new Blob([new Uint8Array(bytes)], { type: 'application/octet-stream' });

//         // Crie uma URL para o blob
//         const fileUrl = URL.createObjectURL(blob);

//         // Defina a URL como o conteúdo do arquivo
//         setFileData(fileUrl);
//       })
//       .catch((error) => {
//         console.error('Erro ao buscar o arquivo:', error);
//       });
//   }, []);


//   return (
   
//   //  <li className={styles.photo} onClick={handleClick}>
//   //     <Image src={photo.src} alt={photo.title} />
//   //     <span className={styles.visualizacao}>{photo.acessos}</span>
//   //   </li>


//     <div>
//     {fileData ? (
//       <a href={fileData} >
//         Baixar Arquivo
//       </a>
//     ) : (
//       <p>Carregando...</p>
//     )}
//     </div>

//   );



  
// };



// export default FeedPhotosItem;



// // import React, { useState, useEffect } from 'react';

// // const FileViewer: React.FC = () => {
// //   const [fileData, setFileData] = useState<string | null>(null);

// //   useEffect(() => {
// //     // Substitua a URL pelo endpoint Flask que retorna o arquivo codificado em base64
// //     const apiUrl = 'http://localhost:5000/uploads/alex-ramon-QdUKqkaT1gE-unsplash.jpg';

// //     fetch(apiUrl)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         // Decodifique o conteúdo base64 em bytes
// //         const bytes = atob(data.file_content_base64);

// //         // Crie um blob a partir dos bytes
// //         const blob = new Blob([new Uint8Array(bytes)], { type: 'application/octet-stream' });

// //         // Crie uma URL para o blob
// //         const fileUrl = URL.createObjectURL(blob);

// //         // Defina a URL como o conteúdo do arquivo
// //         setFileData(fileUrl);
// //       })
// //       .catch((error) => {
// //         console.error('Erro ao buscar o arquivo:', error);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       {fileData ? (
// //         <a href={fileData} download="arquivo.jpg">
// //           Baixar Arquivo
// //         </a>
// //       ) : (
// //         <p>Carregando...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default FileViewer;
