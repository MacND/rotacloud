const axios = require('axios');
const rotacloud_api_url = 'https://api.rotacloud.com/v1';
const rotacloud_api_key = process.env.rotacloud_api_key;
const headers = {'Authorization': `Bearer ${rotacloud_api_key}`, 'Content-Type':'application/json'};

module.exports = () => ({
  if (!rotacloud_api_key) { 
    return console.log('Please export your rotacloud_api_key'); 
  };
  
  accounts: {
    list: async () => {
      try {
        let response = await axios.get(rotacloud_api_url + '/accounts', {
          headers: headers
        });
        return response;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  locations: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/locations', {
          headers: headers,
          params: params
        });
        return response;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (id) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/locations/' + id, {
          headers: headers
        });
        return response;
      } catch (err) {
        throw new Error(err)
      }
    }
  },

  roles: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/roles', {
          headers: headers,
          params: params
        });
        return response;
      } catch (err) {
        throw new Error(err)
      }
    },

    get: async (id) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/roles/' + id, {
          headers: headers,
        });
        return response;
      } catch (err) {
        throw new Error(err)
      }
    }
  },

  shifts: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/shifts', {
          headers: headers,
          params: params
        });
        return response;
      } catch (err) {
        throw new Error(err)
      }
    },

    get: async (id) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/shifts/' + id, {
          headers: headers,
        });
        return response;
      } catch (err) {
        throw new Error(err)
      }
    }
  },

  timezones: {
    list: async () => {
      try {
        let response = await axios.get(rotacloud_api_url + '/timezones', {
          headers: headers
        });
        return response;
      } catch (err) {
        throw new Error(err)
      }
    },

    get: async (id) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/timezones' + id, {
          headers: headers
        });
        return response;
      } catch (err) {
        throw new Error(err)
      }
    }
  },

  users: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/users', {
          headers: headers,
          params: params
        });
        return response;
      } catch (err) {
        throw new Error(err)
      }
    },

    get: async (id) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/users/' + id, {
          headers: headers
        });
        return response;
      } catch (err) {
        throw new Error(err)
      }
    }
  }
});
