# Movies APP

## Description
Esta aplicación permite buscar películas, además de ver los detalles de cada una de ellas.

## Version
```bash
Nodejs: v18.17.1

npm: v10.2.5
```

### Configuración de la api themoviedb en el archivo

La api key se debe configurar en el archivo src/config/
config.js

```bash
export const API_KEY = 'API_KEY';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_POSTER_URL = 'https://image.tmdb.org/t/p/original';
export const POSTER_IMAGE = 'https://image.tmdb.org/t/p/w200';
```

La configuracion que utlizo para las consultas se encuentra en el archivo src/Services/api.js

```bash
import {API_KEY, BASE_URL} from '../config';

export const GET = async url => {
  const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`;

  let response = await fetch(API_URL, {method: 'GET'});
  response = response.json();
  return response;
};
```