import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const URL = 'https://dapi.kakao.com/v3/search/book';
const headers = {
  Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
};

export default class Kakao {
  static fetchBookList(params) {
    return axios.get(URL, {
      headers,
      params,
    });
  }
}
