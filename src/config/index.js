const baseUrl = process.env.REACT_APP_REST_URL

const config ={
    baseUrl,
    blogUrl: baseUrl+'/api/posts'

}
export default config;