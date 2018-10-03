import { SET_CURRENT_USER,PRUEBA_USER,DE_SET_CURRENT_USER, NEW_NOTICIA, LISTAR_NOTICIA, NOTICIA_UNICA, LIMPIAR_NOTICIA, CATEGORIAS, NUEVOCV, LISTADOCV, CVUNICO } from '../actions/types';
import isEmpty from '../validation/is-empty';

const initialState = {
    isAuthenticated: false,
    user: {},
    prueba: {},
    noticia: {},
    noticias: [],
    notiUnica: {},
    categorias : [],
    cv: {},
    listadocv: [],
    cvUnico: {}
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,

            }
        case PRUEBA_USER:
          return {
            ...state,
            prueba: action.payload
          }
        case DE_SET_CURRENT_USER:
            return{
              ...state,
              isAuthenticated: !isEmpty(action.payload),
              user:action.payload,
              prueba: {}
            }
        case NEW_NOTICIA:
          return{
            ...state,
            noticia: action.payload
          }
        case LISTAR_NOTICIA:
          return{
            ...state,
            noticias: [...state.noticias, ...action.payload]
          }
        case NOTICIA_UNICA:
          return{
            ...state,
            notiUnica: action.payload
          }
        case LIMPIAR_NOTICIA:
          return{
            ...state,
            noticias: []
          }
        case CATEGORIAS:
          return{
            ...state,
            categorias: action.payload
          }
        case NUEVOCV:
          return{
            ...state,
            nuevoCv: action.payload
          }
        case LISTADOCV:
          return{
            ...state,
            listadocv: action.payload
          }
        case CVUNICO:
            return{
              ...state,
              cvUnico: action.payload
            }
        default:
            return state;
    }
}
