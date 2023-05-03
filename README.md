# Desafio Bovcontrol


## Projeto Checklists

### regras de negócio
- Gerenciar os checklists de forma online ou offline.
- Ter a possibilidade de listar, editar e cadastrar os checklists.
- Para criação do checklist será necessário fornecer os seguintes dados: Nome do fazendeiro, nome e cidade da fazenda, nome do supervisor, tipo do checklist (BPA, Antibiótico, BPF), quantidade de leite produzida no mês, quantidade de cabeça de gado e um booleano informando se teve supervisão no mês em curso (na criação deve registrar a data de criação e atualização para histórico).
- Para atualização do checklist será necessário fornecer os seguintes dados: Nome do fazendeiro, nome e cidade da fazenda, nome do supervisor, quantidade de leite produzida no mês, quantidade de cabeça de gado (na atualização deve registrar a data de atualização).
- Sincronizar os checklists cadastrados offline com a api.

### Requisitos
- [x] Libraries and patterns
- [x] React-native 0.65 ou superior. (Fique a vontade para utilizar o expo)
- [x] UTILIZE STYLED COMPONENTS
- [x] Hooks
- [x] ContextAPI
- [x] Banco de Dados (RealmDB)

### Layout

### Packages

- expo
- realmDB
- styled-components
- phosphor-react-native
- @react-native-community/netinf
- @react-navigation/**
- axios
- date-fns
- react-hook-form

### Deployment

- Create environment file with api url.

- Package download
```bash
  yarn 
```

- Run command

```bash
  yarn ios:build | yarn android:build
```


Made with much :purple_heart: and :muscle: by Jhow Paes :blush: <a href="https://www.linkedin.com/in/jhowpaes/">Talk to me!</a>
