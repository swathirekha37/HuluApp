const API_KEY = process.env.API_KEY
console.log(API_KEY)
export default{
    fetchTrending : {
        title : 'Trending',
        url : `/trending/all/week?api_key=${API_KEY}&language='en_US`
    },
    fetchTopRated : {
        title : 'Top Rated',
        url : `/movies/top_rated?api_key=${API_KEY}&language='en_US`
    },
    fetchActionMovies : {
        title : 'Action',
        url : `discover/action?api_key=${API_KEY}&with_genre=28}`
    },
    fetchComedyMovies : {
        title : 'Comedy',
        url : `discover/comedy?api_key=${API_KEY}&with_genre=35}`
    },
    fetchHorrorMovies : {
        title : 'Horror',
        url : `discover/horror?api_key=${API_KEY}&with_genre=27}`
    },
    fetchMystery : {
        title : 'Mystery',
        url : `discover/mystery?api_key=${API_KEY}&with_genre=9648}`
    },
    fetchRomanticMovies : {
        title : 'Romance',
        url : `discover/romantic?api_key=${API_KEY}&with_genre=10749}`
    }
}