// export const API_URL = 'https://dogsapi.origamid.dev/json';
//export const API_URL ="http://127.0.0.1:5050"
export const API_TOKEN ="http://127.0.0.1:5020"
export const USER_URL ="http://127.0.0.1:5173/login/resetar"
export const API_PHOTO ="http://127.0.0.1:5030"

const formData = new FormData();

export function USER_POST(body) // Inclusão do usuário
 {

  formData.append('user_password', body.user_password);
  formData.append('user_login', body.user_login);
  formData.append('user_email', body.user_email);
  
  return {
    url: API_TOKEN + '/user/post',
    options: {
      method: 'POST',
      body:formData
    },
  };
}

export function USER_GET(token) // Ok Tem o MY
{
  return {
    url: API_TOKEN + '/user/get',
    options: {
      method: 'GET',
      headers: {
        Authorization:'Bearer ' + token,
      },
    },
  };
}

export function TOKEN_GET(body) // Ok Tem o MY
{

  return {
    url: `${API_TOKEN}/token/get?user_login=${body.user_login}&user_password=${body.password}`,

    options: {
      method: 'GET',
    },
  };
}

export function TOKEN_VALIDATE_GET(token) // Ok Tem o MY
{
  return {
    url: API_TOKEN + '/token/validate',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function PHOTO_POST(formData,token) {
  
  return {
    url : API_TOKEN + '/photo/post',
    options: {
      method: 'POST',
      headers: {Authorization: 'Bearer ' + token,   },
      body: formData,
    },
  };

}

export function PHOTO_PUT(formData,token) {
  
    var object = {};
    formData.forEach(
      function(value, key){
    object[key] = value;});

  return {
    url :  `${API_TOKEN}/photo/put?photo_id=${object.photo_id}&photo_user=${object.photo_user}&photo_descricao=${object.photo_descricao}&photo_login=${object.photo_login}&photo_logradouro=${object.photo_logradouro}&photo_complemento=${object.photo_complemento}&photo_bairro=${object.photo_bairro}&photo_localidade=${object.photo_localidade}&photo_uf=${object.photo_uf}&photo_cep=${object.photo_cep}` ,
    options: {
      method: 'PUT',
      headers: {Authorization: 'Bearer ' + token,   },
    },
  };

}

export function PHOTOS_GET(photo_login,photo_page,photo_total) {
  return {
    url: `${API_TOKEN}/photos/get?photo_login=${photo_login}&photo_page=${photo_page}&photo_total=${photo_total}`,
   
    // url: `${API_TOKEN}/photos/get`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
 
  };
}

export function PHOTOS2_GET(photo_login,photo_page,photo_total) {
  return {
    url: `${API_PHOTO}/photos/get?photo_login=${photo_login}&photo_page=${photo_page}&photo_total=${photo_total}`,
  
    options: {
      method: 'GET',
      cache: 'no-store',
    },
 
  };
}

export function  PHOTO_GET(id)  {
  
  return {
    url: `${API_TOKEN}/photo/get?photo_id=${id}`,
   
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}

export function  PHOTO2_GET(id)  {
  
  return {
    url: `${API_PHOTO}/photo/get?photo_id=${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function PHOTO_DELETE(id) {
  return {
    url: `${API_TOKEN}/photo/delete?photo_id=${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}

export function CEP_GET(cep) {
  return {
    url: `${API_TOKEN}/cep/get?cep=${cep}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}



// export function COMMENT_POST(id, body) {
//   return {
//     url: `${API_URL}/api/comment/${id}`,
//     options: {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + window.localStorage.getItem('token'),
//       },
//       body: JSON.stringify(body),
//     },
//   };
// }
// export function COMMENT_POST(formData) {
//   return {
//     url: `${API_URL}/api/comment/${id}`,
//     options: {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + window.localStorage.getItem('token'),
//       },
//       body: JSON.stringify(body),
//     },
//   };
// }


export function COMMENT_POST(id,comment) {

  const formData = new FormData();
  formData.append('comment_post_id', id);
  formData.append('comment_content', comment.comment);

  return {
    url: API_TOKEN + '/photo/comment',
    options: {
      method: 'POST',
      
      headers: {

        Authorization: 'Bearer ' + window.localStorage.getItem('token'),    
      },

      
      body: formData,
    },
  };
}





export function PASSWORD_LOST(body) {



  return {
    url: `${API_TOKEN}/user/password_lost?user_login=${body.login}&user_email=${body.email}&user_url=${USER_URL}`,
    options: {
      method: 'GET',
      
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify(body),

      // body:formData //JSON.stringify(body),
    },
  };






  
}

export function PASSWORD_RESET(body) {
 

  return {
    url: `${API_TOKEN}/user/password_reset?user_login=${body.login}&user_activation_key=${body.key}&user_password=${body.password}`,
    // url: API_TOKEN + '/user/password_reset',
    options: {
      method: 'GET',

         // headers: {
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify(body),

      // body:formData //JSON.stringify(body),
    },
  };
}

export function STATS_GET() {
  return {
    url: API_TOKEN + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}
