# alura-node-express-mongo

# Utilizei a imagem com o docker

- Rodar o node e deixar na máquina

```
docker run -ti -d --name nodejs -v "$PWD":/alura-node -w /alura-node node:alpine sh
```

Precisando executar...

```
docker exec -ti nodejs sh
```

# Node.js v19.8.1 documentation

<https://nodejs.org/api/>

# Passos

npm install nodemon@2.0.15 -D

npm install express@4.17.3

- Após executar npm run dev, o sistema vai reclamar que não temos o "type": "module" em package.json, então devemos incluir sempre essa linha lá:

"type": "module",

- Instalar o Mongoose

```
npm install mongoose@7.0.3
```

Criar a pasta config e o arquivo dbConnect.js

- Instalar o Dot env

```
npm install dotenv@16.0.3
```

- ESLINT

```
  npm init @eslint/config
```

Corrigindo o código manualmente

```
npx eslint ./src --fix
```

Automatico:
 Usando Ctrl + Shift  + P
 Será aberta uma janela de busca na parte superior, onde digitamos "settings".

A primeira opção exibida é "Preferências: Abrir as Configurações do Usuário (JSON)", selecionamos teclando "Enter".

settings.json

{
  "editor.codeActionsOnSave":{
        "source.fixAll.eslint": true
    }
}

- Instalar o auto-populate:

```
npm install mongoose-autopopulate
```

- Repositório do Curso

<https://github.com/alura-cursos/api-node-express-2>
