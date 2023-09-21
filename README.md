# Site para buscar CEP


</{Linguagens usadas}>:

~> JavaScript
~> Css

</{Api usada}>: 

~> https://viacep.com.br

</{Consumo da Api}>: 

# AXIOS 

```js
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});
export default api;
```


<div>
  <hr></hr>
</div>

![image](https://github.com/DarkBBR/Search-CEP/blob/main/imagem_2023-09-21_164401335.png)

# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

