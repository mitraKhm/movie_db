const baseUrl = 'https://api.themoviedb.org/3'


const HttpClint = async (url) => {
    const res = await fetch(baseUrl+url)
    console.log( 'env: ',process.env.REACT_APP_BASE_URL);
    const  finalRes = await res.json();
    return finalRes;
}

export default HttpClint;