import axios from 'axios';

const URL = 'https://dapi.kakao.com/v3/search/book';
const headers = {
  Authorization: `KakaoAK ccd7ecd198b867273e0c43658e55b08a`,
};

export default class Kakao {
  static fetchBookList(params) {
    return axios.get(URL, {
      headers,
      params,
    });
  }
}
