import React from 'react';
import { TOKEN_GET, TOKEN_VALIDATE_GET, USER_GET,PHOTO_POST,PHOTO_PUT} from './Api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(async function () {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(user_login, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_GET({ user_login, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userPhoto(formData,type) {
    try {

      if (type=="I"){

     
      setError(null);
      setLoading(true);
      const token = window.localStorage.getItem('token');  
      const { url, options } = PHOTO_POST(formData,token);
      const response = await fetch(url, options);
      if (!response.ok)
        if (response.status==409) 
          // throw new Error('Imagem já cadastrada !');
          throw new Error('Imagem já cadastrada !');
        else
          throw new Error('Erro na inclusão da Photo!');
      else
        navigate('/conta');
      }
      else{
        setError(null);
        setLoading(true);
        const token = window.localStorage.getItem('token');  
        const { url, options } = PHOTO_PUT(formData,token);
        const response = await fetch(url, options);
        if (!response.ok)
          if (response.status==409) 
            // throw new Error('Imagem já cadastrada !');
            throw new Error('Imagem não cadastrada !');
          else
            throw new Error('Erro na alteração da Photo!');
        else
          navigate('/conta');

      }


    } catch (err) {
      setError(err.message);
      // setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_GET(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login,userPhoto }}
    >
      {children}
    </UserContext.Provider>
  );
};
