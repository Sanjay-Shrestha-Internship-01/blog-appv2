import * as Actions from '../constant/actions';

const blogReducer =(state=[], action)=>{
    switch(action.type){
        case Actions.SET_BLOG_LIST:
            return[...action.payload]
            default:
                return[...state]
    }
}

export default blogReducer;