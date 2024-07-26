# Organo

Meu primeiro projeto em React, ainda usando JavaScript.

O Organo é uma aplicação web criada para adicionar e exibir equipes. 

## Tecnologias usadas

* JavaScript;
* React;
  * React-icons: para utilização de ícones;
  * [Hex-to-rgba](https://www.npmjs.com/package/hex-to-rgba): Utilizado para alterar a opacidade do plano de fundo dos times utilizando a mesma cor dos cards de colaborador no componente Team;

* [uuid](https://www.npmjs.com/package/uuid);

## Como usar

Você precisará possuir o [Node.js](https://nodejs.org/en/download/package-manager) instalado na versão v20.9.0 ou superior.

* Clone repositório do projeto do Github:

```shell
git clone https://github.com/Juliocoi/organo.git
```

* Dentro do novo diretório criado com o projeto, instale suas dependências:

```shell
npm install
```

* Para executar a aplicação rode o comando abaixo:

```shell
npm start
```

Cadastre um novo membro da equipe:

![organo](https://i.imgur.com/kDixcsa.png)

Para uma imagem use o link da sua conta do github e adicione um `.png` ao final. Dessa forma:

```tex
https://github.com/juliocoi.png
```

![equipes](https://i.imgur.com/20aBGAp.png)

Equipes vazias não são exibidas. 

