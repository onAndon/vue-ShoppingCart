import axios from 'axios'
import API from '../api'

//请求首页轮播图的数据
export function getHomeBannerData(){
    //创建promise请求数据，数据处理成功之后，传递给resolve方法。
    // resolve的处理在外部的调用中。
    return new Promise((resolve, reject)=>{

        axios.get(API.HOME_BANNER_URL, {
            params: {
                __t: new Date().getTime()
            }
        })
        .then(response=>{
            // console.log('成功');
            // console.log(response);
            let data = response.data.data.billboards.map(item=>{
                return {
                    id: item.id,
                    imageUrl: item.imageUrl
                }
            })
            resolve(data);
        })
        .catch(error=>{
            console.log('失败');
            console.log(error);
        })
    })
}

//请求正在热映的电影数据
export function getNowPlayingData(page, count){
    return new Promise((resolve, reject)=>{
        axios.get(API.NOW_PLAYING_URL, {
            __t: new Date().getTime(),
            page,
            count
        })
        .then(response=>{
            console.log(response.data.data.films);
            let data = response.data.data.films.map(item=>{
                return {
                    name: item.name,
                    poster: item.cover.origin,
                    cinemaCount: item.cinemaCount,
                    watchCount: item.watchCount,
                    grade: item.grade,
                    id: item.id
                }
            })
            resolve(data);
        })
        .catch(error=>{
            console.log(error);
        })
    })
}
