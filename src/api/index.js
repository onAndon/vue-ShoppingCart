/*
首页的轮播请求接口
参数：
    __t:时间戳
*/
const HOME_BANNER_URL = '/v4/api/billboard/home';

/*
正在上映的请求接口
参数：
    __t：时间戳
    page: 页数
    count：数量
*/
const NOW_PLAYING_URL = '/v4/api/film/now-playing';

/*
即将上映的请求接口
参数：
    __t：时间戳
    page: 页数
    count：数量
*/
const COMING_SOON_URL = '/v4/api/film/coming-soon';

export default {
    HOME_BANNER_URL,
    NOW_PLAYING_URL,
    COMING_SOON_URL
}