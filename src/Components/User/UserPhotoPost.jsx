import React from 'react';
import styles from './UserPhotoPost.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { UserContext } from '../../UserContext';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { PHOTO_POST,CEP_GET} from '../../Api';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const UserPhotoPost = () => {
  const getcep = useForm('cep');
  const descricao = useForm();
  // const [endereco,setEndereco] =  React.useState('');
  const logradouro = useForm();
  const complemento = useForm();
  const bairro = useForm();
  const localidade = useForm();
  const uf = useForm();
  
  // const peso = useForm('number');
  // const idade = useForm('number');

  const [img, setImg] = React.useState({});
  // const { data, error, loading, request } = useFetch();
  // const { dataCEP, errorCEP, loadingCEP, requestCEP } = useFetch();
  const { userPhoto,error,loading} = React.useContext(UserContext);
  const [cep, setCep] = React.useState('');
  const { request, ceperror } = useFetch();

  // const { data, loading, error, request } = useFetch();


  
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (data) navigate('/conta');
  // }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    // formData.append('photo_user', data.user_id);
    formData.append('photo_descricao', descricao.value);
    formData.append('photo_imagem', img.raw);
    formData.append('photo_logradouro', logradouro.value);
    formData.append('photo_complemento', complemento.value);
    formData.append('photo_bairro', bairro.value);
    formData.append('photo_localidade', localidade.value);
    formData.append('photo_uf', uf.value);
    formData.append('photo_cep', getcep.value);
   
    const response = userPhoto(formData,"I");

  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  
  async function handleCEP(event) {

    event.preventDefault();
    if (getcep.validate())
    {
      const { url, options } = CEP_GET(getcep.value);
      // const response = await fetch(url, options);

      const { response, json } = await request(url, options);
      if (response.ok) {
        setCep((cep) => [...cep, json]);
        // setEndereco(json)
       
        logradouro.setValue(json.logradouro)
        complemento.setValue(json.complemento)
        bairro.setValue(json.bairro)
        localidade.setValue(json.localidade)
        uf.setValue(json.uf)

        // setCep((comments) => [...comments, json]);
      }
      
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste a foto do imóvel" />

      <form onSubmit={handleSubmit}>
        {/* <Input label="CEP" type="text" name="cep" {...cep} onChange={handleCEP} />
        <Input label="Descrição" type="text" name="descricao" {...descricao} /> */}
        <Input label="Descrição" type="text" name="descricao" {...descricao}/>
        <Input label="Endereço" type="text" name="descricao" {...logradouro}/>
        <Input label="Complemento" type="text" name="complemento" {...complemento} />
        <Input label="Bairro" type="text" name="bairro" {...bairro} />
        <Input label="Cidade" type="text" name="cidade" {...localidade} />
        <Input label="Estado" type="text" name="Estado" {...uf} />

        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
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

      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
