import React from 'react';
import styles from './UserPhotoPostUpdate.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { UserContext } from '../../UserContext';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import {CEP_GET} from '../../Api';
import Head from '../Helper/Head';
import {useState} from 'react';

const UserPhotoPostUpdate = ({user, photo, setUpdatePhoto,setPhoto }) => {

  // const { photo } = data;
  const getcep = useForm('cep');
  const logradouro = useForm();
  const complemento = useForm();
  const bairro = useForm();
  const localidade = useForm();
  const uf = useForm();
  const { userPhoto} = React.useContext(UserContext);
  const [cep, setCep] = React.useState('');
  const { request, ceperror } = useFetch();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {

    logradouro.setValue(photo.photo_logradouro)
    complemento.setValue(photo.photo_complemento)
    bairro.setValue(photo.photo_bairro)
    localidade.setValue(photo.photo_localidade)
    uf.setValue(photo.photo_uf)
    getcep.setValue(photo.photo_cep)
  }, []);

  
  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (data) navigate('/conta');
  // }, [data, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('photo_id', photo.id);
    formData.append('photo_user', user.data.user_id);
    formData.append('photo_login', photo.author);
    formData.append('photo_descricao',photo.title);
    formData.append('photo_logradouro', logradouro.value);
    formData.append('photo_complemento', complemento.value);
    formData.append('photo_bairro', bairro.value);
    formData.append('photo_localidade', localidade.value);
    formData.append('photo_uf', uf.value);
    formData.append('photo_cep', getcep.value);
   

    try {
      setError(null);
      setLoading(true);
      const response = await userPhoto(formData,"U");

      if (response.ok) 
      {
        setUpdatePhoto(null)
      }
      } catch (err) {
        setError(err.message);
        // setLogin(false);
      } finally {
        setLoading(false)
        setUpdatePhoto(null)

        photo.photo_complemento = complemento.value
        setPhoto(photo)
        // setUpdatePhoto(setPhoto)
        ;
  }
  }


  async function handleCEP(event) {

    event.preventDefault();
    if (getcep.validate())
    {
      const { url, options } = CEP_GET(getcep.value);
      // const response = await fetch(url, options);

      const { response, json } = await request(url, options);
      if (response.ok) 
      {
        setCep((cep) => [...cep, json]);
        logradouro.setValue(json.logradouro)
        complemento.setValue(json.complemento)
        bairro.setValue(json.bairro)
        localidade.setValue(json.localidade)
        uf.setValue(json.uf)
      }
      
    }
  }


  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste a foto do imóvel" />

      <form onSubmit={handleSubmit}>
        {/* <Input label="CEP" type="text" name="cep" {...cep} onChange={handleCEP} />
        <Input label="Descrição" type="text" name="descricao" {...descricao} /> */}
        <Input label="Endereço" type="text" name="Endereço" value= {logradouro.value} onChange={e => logradouro.setValue(e.target.value)} />
        <Input label="Complemento" type="text" name="complemento"  value= {complemento.value} onChange={e => complemento.setValue(e.target.value)} />
        <Input label="Bairro" type="text" name="bairro"  value= {bairro.value} onChange={e => bairro.setValue(e.target.value)}  />
        <Input label="Cidade" type="text" name="cidade"  value= {localidade.value} onChange={e => localidade.setValue(e.target.value)}  />
        <Input label="Estado" type="text" name="Estado"  value= {uf.value} onChange={e => uf.setValue(e.target.value)}  />

        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Salvar</Button>
        )}
        <Error error={error && error } />
      </form>
      <form onSubmit={handleCEP}>
          <Input label="CEP" type="text" name="cep" {...getcep}  />

        {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Busca CEP</Button>
          )}
          <Error error={ceperror && ceperror } />
          {/* <div>
          {data && (
            

            <Input label="CEP" type="text" name="cep" {...data.bairro}  />



          )}
        </div> */}
        </form>

    </section>
  );
};

export default UserPhotoPostUpdate;
