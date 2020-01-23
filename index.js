const axios = require('axios');
const rotacloud_api_url = 'https://api.rotacloud.com/v1';
const rotacloud_api_key = process.env.rotacloud_api_key;

if (!rotacloud_api_key) {
  return console.log('Please export your rotacloud_api_key.');
}

const headers = {'Authorization': `Bearer ${rotacloud_api_key}`, 'Content-Type':'application/json'};

module.exports = ({
  accounts: {
    list: async () => {
      try {
        let response = await axios.get(rotacloud_api_url + '/accounts', {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  attendance: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/attendance', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (attendanceId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/attendance/${attendanceId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/attendance', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (attendanceId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/attendance/${attendanceId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    delete: async (params) => {
      try {
        let response = await axios.delete(rotacloud_api_url + '/attendance', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  attendance_approved: {
    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/attendance_approved', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    delete: async (data) => {
      try {
        let response = await axios.delete(rotacloud_api_url + '/attendance_approved', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  availability: {
    get: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/availability', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    }
  },

  availability_patterns: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/availability_patterns', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (availabilityPatternId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/availability_patterns/${availabilityPatternId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/availability_patterns', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (availabilityPatternId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/availability_patterns/${availabilityPatternId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    delete: async (availabilityPatternId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/availability_patterns/${availabilityPatternId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  day_notes: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/day_notes', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (dayNoteId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/day_notes/${dayNoteId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/day_notes', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (dayNoteId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/day_notes/${dayNoteId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    delete: async (dayNoteId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/day_notes/${dayNoteId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  days_off: {
    get: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/days_off', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/days_off', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    delete: async (params) => {
      try {
        let response = await axios.delete(rotacloud_api_url + '/days_off', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  days_off_patterns: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/days_off_patterns', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (daysOffPatternId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/days_off_patterns/${daysOffPatternId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/days_off_patterns', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (daysOffPatternId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/days_off_patterns/${daysOffPatternId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    delete: async (daysOffPatternId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/days_off_patterns/${daysOffPatternId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  groups: {
    list: async () => {
      try {
        let response = await axios.get(rotacloud_api_url + '/groups', {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/groups/${groupId}`, {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/groups', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (groupId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/groups/${groupId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    delete: async (groupId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/groups/${groupId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  holiday_allowances: {
    list: async (year) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/holiday_allowances/${year}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (year, userId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/holiday_allowances/${year}/${userId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    }
  },

  holiday_allowances_custom: {
    post: async (year, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/holiday_allowances_custom/${year}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (year, userId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/holiday_allowances_custom/${year}/${userId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    delete: async (year, userId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/holiday_allowances_custom/${year}/${userId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  leave: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/leave', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (leaveId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/leave/${leaveId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/leave', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (leaveId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/leave/${leaveId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    delete: async (leaveId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/leave/${leaveId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  leave_embargoes:{
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/leave_embargoes', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (leaveEmbargoeId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/leave_embargoes/${leaveEmbargoeId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/leave_embargoes', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (leaveEmbargoeId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/leave_embargoes/${leaveEmbargoeId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    delete: async (leaveEmbargoeId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/leave_embargoes/${leaveEmbargoeId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  leave_requests: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/leave_requests', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (leaveRequestId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/leave_requests/${leaveRequestId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    request: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/leave_requests`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    respond: async (leaveRequestId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/leave_requests/${leaveRequestId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    delete: async (leaveRequestId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/leave_requests/${leaveRequestId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  leave_types: {
    list: async () => {
      try {
        let response = await axios.get(rotacloud_api_url + '/leave_types', {
          headers: headers
        });
        return response.data;
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
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (locationId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/locations/${locationId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/locations', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (locationId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/locations/${locationId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    delete: async (locationId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/locations/${locationId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  me: {
    get: async () => {
      try {
        let response = await axios.get(rotacloud_api_url + '/me', {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    }
  },

  pay_periods: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/pay_periods', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    get: async (payPeriodId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/pay_periods/${payPeriodId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    getPayroll: async (payPeriodId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/pay_periods/${payPeriodId}/payroll`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    }
  },

  pins: {
    get: async (pin) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/pins/${pin}`, {
          headers: headers
        });
        return response.data;
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
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    get: async (roleId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/roles/${roleId}`, {
          headers: headers,
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/roles', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (roleId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/roles/${roleId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    delete: async (roleId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/roles/${roleId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  settings: {
    list: async () => {
      try {
        let response = await axios.get(rotacloud_api_url + '/settings', {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
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
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    get: async (shiftId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/shifts/${shiftId}`, {
          headers: headers,
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/shifts', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (shiftId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/shifts/${shiftId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    delete: async (shiftId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/shifts/${shiftId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  shifts_acknowledged: {
    acknowledge: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/shifts_acknowledged`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  shifts_published: {
    publish: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/shifts_published`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    unpublish: async (data) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/shifts_published`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  swap_requests: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/swap_requests', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (swapRequestId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/swap_requests/${swapRequestId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    request: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/swap_requests', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    respond: async (swapRequestId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/swap_requests/${swapRequestId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    delete: async (swapRequestId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/swap_requests/${swapRequestId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  terminals: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/terminals', {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (terminalId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/terminals/${terminalId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/terminals', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    patch: async (terminalId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/terminals/${terminalId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    }
  },

  terminals_active: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/terminals_active', {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/terminals_active', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    ping: async (terminalId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/terminals_active/${terminalId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    delete: async (terminalId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/terminals_active/${terminalId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  timezones: {
    list: async () => {
      try {
        let response = await axios.get(rotacloud_api_url + '/timezones', {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    get: async (timezoneId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/timezones/${timezoneId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    }
  },

  unavailability_requests: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/unavailability_requests', {
          headers: headers,
          params: params
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (unavailabilityRequestId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/unavailability_requests/${unavailabilityRequestId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    request: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/unavailability_requests', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    respond: async (unavailabilityRequestId, data) => {
      try {
        let response = await axios.post(rotacloud_api_url + `/unavailability_requests/${unavailabilityRequestId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    delete: async (unavailabilityRequestId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/unavailability_requests/${unavailabilityRequestId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
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
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    get: async (userId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/users/${userId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/users', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    delete: async (userId) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/users/${userId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  users_clocked_in: {
    list: async (params) => {
      try {
        let response = await axios.get(rotacloud_api_url + '/users_clocked_in', {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    get: async (userId) => {
      try {
        let response = await axios.get(rotacloud_api_url + `/users_clocked_in/${userId}`, {
          headers: headers
        });
        return response.data;
      } catch (err) {
        throw new Error(err)
      }
    },

    post: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/users_clocked_in', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    break: async (data) => {
      try {
        let response = await axios.post(rotacloud_api_url + '/users_clocked_in', {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    },

    delete: async (userId, data) => {
      try {
        let response = await axios.delete(rotacloud_api_url + `/users_clocked_in/${userId}`, {
          headers: headers,
          data: data
        });
        return response.data;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
});
