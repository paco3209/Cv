import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER, PRUEBA_USER,DE_SET_CURRENT_USER, NEW_NOTICIA,LISTAR_NOTICIA,NOTICIA_UNICA,LIMPIAR_NOTICIA, CATEGORIAS,NUEVOCV, LISTADOCV, CVUNICO } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    axios.post('/api/users/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}


export const listadocv = () => dispatch =>{
  axios.get('/api/users/listadocv')
    .then(res => {
      console.log(res.data);
      dispatch({
        type: LISTADOCV,
        payload: res.data
      })
    })
}

export const buscarNoticia = (id) => dispatch => {
  axios.get(`/api/users/noticiaUnica/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch ({
        type: NOTICIA_UNICA,
        payload: res.data
      })
    })
}

export const buscarCv = (id) => dispatch => {
  axios.get(`/api/users/cvu/${id}`)
    .then(res => {
      dispatch({
        type: CVUNICO,
        payload: res.data
      })
    })
}



export const listarNoticiaPaginacion = (page) => dispatch => {
  console.log("prueba");
  axios.get(`/api/users/noticia/${page}`)

    .then(res => {

      dispatch ({
        type: LISTAR_NOTICIA,
        payload: res.data.noticias
      })
    })
    console.log(page);
}

export const limpiarNoticias = () => dispatch => {
  dispatch({
    type: LIMPIAR_NOTICIA,
    payload: []
  })
}

export const listarCategoria = () => dispatch => {
  axios.get('/api/users/categoria')
    .then(res => {
      dispatch({
        type: CATEGORIAS,
        payload: res.data
      })
    })
}

export const consultaUsuario = () => dispatch => {
  axios.get('/api/users/noticia')
    .then(res => {
      dispatch({
      type: PRUEBA_USER,
      payload: res.data
    });
    console.log(res.data);
  }
   )


}
export const listarNoticias = () => dispatch => {
  axios.get('/api/users/listarNoticias')
    .then(res => {
      console.log(res.data);
      dispatch({
        type: LISTAR_NOTICIA,
        payload: res.data
      })
    })
}


export const loginUser = (user) => dispatch => {
    axios.post('/api/users/login', user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
                console.log(decoded);
            })

            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(desetCurrentUser({}));
    history.push('/login');
}

export const desetCurrentUser = decoded => {
    return {
        type: DE_SET_CURRENT_USER,
        payload: decoded
    }
}

export const nuevaNoticia = (noticia) => dispatch => {
  console.log(noticia);
  axios.post('/api/users/newNotica', noticia)
    .then(res => dispatch ({
      type: NEW_NOTICIA,
      payload: res.data
    }))
}

export const nuevoCv = (cv) => dispatch => {
  axios.post('/api/users/nuevoCv', cv)
    .then(res => dispatch({
      type: NUEVOCV,
      payload: res.data
    }) )
}
