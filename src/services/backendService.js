import axios from "axios";

const STATUS_API_BASE_URL = "https://localhost:5001/status";

class backendService {
  getStatus() {
    return axios.get(STATUS_API_BASE_URL + "/getallstatus");
  }

  createStatus(status) {
    return axios.post(STATUS_API_BASE_URL, status);
  }

  getStatusById(statusId) {
    return axios.get(STATUS_API_BASE_URL + "/" + statusId);
  }

  updateStatus(status, statusId) {
    return axios.put(STATUS_API_BASE_URL + "/" + statusId, status);
  }

  deleteStatus(statusId) {
    return axios.delete(STATUS_API_BASE_URL + "/" + statusId);
  }
}

export default new backendService();
