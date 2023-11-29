import axios from 'axios';

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

    const options = {
      url: URL,
      method: method,
      withCredentials: true,
      responseType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
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
          console.log('ERRRORRR>>>>', error);
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

export class AuthService {
  async userLogin(payload) {
    const res = await axiosService.request(
      '/auth/login',
      'post',
      null,
      payload,
    );
    return res;
  }

  async userRegistration(payload) {
    const res = await axiosService.request(
      '/auth/register',
      'post',
      null,
      payload,
    );
    return res;
  }

  async astroRegistration(payload) {
    const res = await axiosService.request(
      '/astrologers/register',
      'post',
      null,
      payload,
    );
    return res;
  }
}
