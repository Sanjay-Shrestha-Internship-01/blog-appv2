import config from '../config';
import * as Actions from '../constant/actions';

export function getBlogList() {
    return async (dispatch) => {
        try {
            const response = await fetch(config.blogUrl);
            const blogList = await response.json();
            dispatch({
                type: Actions.SET_BLOG_LIST,
                payload: blogList.data,
            });
        } catch (e) {
            console.log(e);
        }
    };
}