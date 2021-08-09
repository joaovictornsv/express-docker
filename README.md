<div align="center">

<img src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png" height=100/>
<img src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/plus-2-icon-11-256.png" height=50/>
<img src="https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png" height=100/>

<h1>Docker + Node</h1>

</div>

## Containers
### Criar container
```
docker run <image>
```
#### Flags

- Modo interativo + terminal
```
docker run -it <image>
```

- Modo detached (background)
```
docker run -d <image>
```

- Expondo uma porta para acessar o container
```bash
docker run -p 80:80 <image>

# porta_host:porta_container
```

### Listar containers ativos
```
docker ps
```

### Listar todos os containers
```bash
docker ps --all
#or
docker ps -a
```
### Parando container
```
docker stop <container>
```

### (Re)Iniciando container
```
docker start <container>
```

### Nomeando containers
```bash
docker run --name meu_container <container>

# Usar o nome para parar e iniciar o container
docker start meu_container
docker stop meu_container
```

### Logs do container
```
docker logs <container>
```

### Removendo container
Certifique-se que o container esteja inativo
```
docker rm <container>
```

## Imagens
### Listar imagens
```
docker images ls
```

### Remover imagem
Certifique-se de que não há containers que usam essa imagem
```
dpcker rmi <imagem>
```

### Criando imagem com base em um arquivo *Dockerfile*
Exemplo de Dockerfile:
```docker
# Imagem base
FROM node:alpine

# Diretório de trabalho
WORKDIR /usr/app

# Copiar os arquivos necessários
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

# Copiar o resto dos arquivos
COPY . .

# Executar comandos
RUN yarn install
RUN yarn tsc

# Expor a porta
EXPOSE 3333

# Comando que inicia a aplicação
CMD ["yarn", "start"]
```
Gerando imagem com base no arquivo
```
docker build /path/to/dockerfile/dir
```

Se o Dockerfile estiver no diretório local basta usar o comandos
```
docker build .
```

### Alterando imagem
Fazer o build novamente:
```
docker build .
```

### Nomeando imagem
Fazer o build novamente:
```
docker build -t minha_imagem .
```

### Criando imagens a partir de containers
```
docker commit <container> <nome_da_imagem>
```

### Exportando imagens com arquivos `.tar`
```
docker save -o <nome_do_arquivo>.tar <nome_da_imagem>
```

### Importando imagens com arquivos `.tar`
```
docker load -i <nome_do_arquivo>.tar
```