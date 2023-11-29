import axios from 'axios';
import {LocalstoreService} from '../services/utils/localstore.service';

const localstoreService = new LocalstoreService();
class AxiosService {
  state = {
    url: null,
    method: null,
    params: null,
    body: null,
  };

  async request(url, method, params, body) {
    const SERVER_URL_LIVE = 'https://astro-api-demo.herokuapp.com/v1';
    let URL = SERVER_URL_LIVE + url;

    const authToken = await localstoreService._retrieveData('access_token');
    const options = {
      url: URL,
      method: method,
      withCredentials: true,
      responseType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    };

    if (params !== null) {
      options.params = params;
    }

    if (body !== null) {
      options.data = body;
    }

    this.state.url = url;
    this.state.method = method;
    this.state.params = params;
    this.state.body = body;

    const response = await axios(options).catch(function (error) {
      if (error.response) {
        if (error.response.status === 401 || error.response.status === 403) {
          // get auth token again
        }
        return {status: error.response.status, data: error.response.data};
      } else if (error.request) {
        return {
          status: 0,
          data: 'The request was made but no response was received',
        };
      } else {
        return {
          status: 0,
          data: 'Something happened in setting up the request that triggered an Error',
        };
      }

      // return {status: response.status, data: error.config};
    });

    return {status: response.status, data: response.data};
  }
}

const axiosService = new AxiosService();

export class AppService {
  async adminPostVideo(payload) {
    const res = await axiosService.request(
      '/users/post/video',
      'post',
      null,
      payload,
    );
    return res;
  }

  async adminPostThought(payload) {
    const res = await axiosService.request(
      '/users/post/thought',
      'post',
      null,
      payload,
    );
    return res;
  }

  async adminGetUserList() {
    const res = await axiosService.request('/users', 'get', null, null);
    return res;
  }

  async adminGetAstrologerList() {
    const res = await axiosService.request('/astrologers', 'get', null, null);
    return res;
  }

  async adminDisableUser(payload) {
    const res = await axiosService.request(`/users`, 'delete', null, payload);
    return res;
  }

  //USER GET POST AND VIDEO
  async getUserPostVideo() {
    const res = await axiosService.request(
      `/users/get-daily-content`,
      'get',
      null,
      null,
    );
    return res;
  }

  async addUsersDetails(payload) {
    const res = await axiosService.request(
      `/users/user-information`,
      'post',
      null,
      payload,
    );
    return res;
  }

  async getAllMessages(communityCategory) {
    console.log('RESPONSE', `/community/${communityCategory}/message`);
    const res = await axiosService.request(
      `/community/${communityCategory}/message`,
      'get',
      null,
      null,
    );
    return res;
  }

  async sendMessage(payload) {
    const res = await axiosService.request(
      `/community/brahmin/message`,
      'post',
      null,
      payload,
    );
    return res;
  }

  //refrewhtokern

  async refreshToken() {
    const authToken = await localstoreService._retrieveData('access_token');
    const payload = {
      refreshToken: authToken,
    };
    const res = await axiosService.request(
      '/auth/refresh-tokens',
      'post',
      null,
      payload,
    );
    return res;
  }
}
