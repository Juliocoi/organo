![](https://uploadimage.io/images/2024/09/08/banner.png)

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

## Features

### Cadastrando um novo colaborador

Cadastre um novo membro da equipe:

![organo](https://i.imgur.com/kDixcsa.png)

Para uma imagem use algum link direto para alguma imagem. Uma boa ideia é usar o link do seu profile no Github e adicione um `.png` ao final. Dessa forma:

```tex
https://github.com/juliocoi.png
```

As equipes serão exibidas no formato abaixo:

![equipes](https://uploadimage.io/images/2024/09/08/Equipe.png)

### Criando novo time

Para criar um novo time informe o nome do time e escolha uma cor:

![Novo time](https://uploadimage.io/images/2024/09/08/novotime.png)

Equipes vazias não são exibidas na página. Após criar uma nova equipe [adicione um novo colaborador](#Cadastrando um novo colaborador). A nova equipe já deve estar disponível no menu dropdown do formulário usado para cadastrar colaboradores.

### Alterar a cor da equipe

Para alterar a cor de uma equipe, clique no input de cor localizado no canto superior direito da equipe.

![MudançaDeCor](https://uploadimage.io/images/2024/09/08/1.png)

![MudançaDeCor2](https://uploadimage.io/images/2024/09/08/2.png)

![MudançaDeCor3](https://uploadimage.io/images/2024/09/08/3.png)

Além das features apresentas acima, também é possível excluir e favoritar um colaborador.
