# Componente A - FRONT - Rede social de fotos de residências


Este projeto faz parte do material didático da Disciplina **Arquitetura de Software - Sprint 3** 

Esta interface é baseada no site https://dogs.origamid.dev/, que é uma rede social de fotos de cachorros. Ele é todo feito no curso de React do site https://www.origamid.com/.
As API´s que o site utiliza são feitas em WordPress. 


Para uso da aplicação no curso, o frontend foi adpatado para ser uma rede social de fotos de residências, usando React e Vite. O backend foi criado em Python e Flask. 

O esquema de funcionamento da aplicação com os componentes está no arquivo esquema.pdf

![image](https://github.com/szalontai/PUC_Rio_MVP_sprint_03_Front/assets/3637113/d6e15c8d-76f5-4ebb-b670-6a463a22778f)

As rotas estão acessando as seguintes URL´s.

USER_URL    = "http://127.0.0.1:5173/login/resetar" - URL que é enviada para o microserviço de gestão de acesso via rota /user/password_lost
API_TOKEN   = "http://127.0.0.1:5020" - URL do microserviço de gestão de acesso.
API_PHOTO   = "http://127.0.0.1:5030" - URL do microserviço de gestão de foto, que é acessada para buscar as fotos de todos os usuários sem a necessidade do token. 


As rotas estão todas agrupadas no arquivo Api.jsx através das seguintes funções:


**USER_POST**    - Faz a chamada da rota /user/post

**USER_GET**    - faz a chamada da rota /user/get

**TOKEN_GET**    - faz a chamada da rota /token/get

**TOKEN_VALIDATE_GET**    - faz a chamada da rota /token/validate

**PHOTO_POST**    - faz a chamada da rota /photo/post

**PHOTO_PUT**    - faz a chamada da rota /photo/put

**PHOTOS_GET**    - faz a chamada da rota /photos/get com o token

**PHOTOS2_GET**    - faz a chamada da rota /photos/get sem o token

**PHOTO_GET**    - faz a chamada da rota /photo/get com o token

**PHOTO2_GET**    - faz a chamada da rota /photo/get sem o token

**PHOTO_DELETE**    - faz a chamada da rota /photo/delete

**CEP_GET**    - faz a chamada da rota /cep/get - **Essa é a chamada da API externa - Componente B**




---

### Executando o servidor


Para executar a aplicação, basta executar o comando abaixo na raiz da aplicação:

```
 npm run dev
```


## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile e o requirements.txt no terminal.
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t front-service .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -p 5173:5173 front-service
```

Uma vez executando, para acessar a API, basta abrir o [http://localhost:5000/#/](http://localhost:5000/#/) no navegador.


