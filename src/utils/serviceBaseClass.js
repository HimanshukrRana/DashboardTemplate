export default class BaseService {
  async handleJsonRequest(
    method,
    api_url,
    payload,
    successCallback,
    errorCallback
  ) {
    try {
      const url = `https://7035-103-24-84-137.ngrok-free.app/api/v1/${api_url}`;

      const ISSERVER = typeof window === "undefined";
      let authToken = "";
      if (!ISSERVER) {
        // revisit this before pushing it to prod
        authToken = localStorage.getItem("accessToken");
      }

      const headers = {
        "Content-Type": "application/json",
        Authorization: authToken ? `Bearer ${authToken}` : "",
        "ngrok-skip-browser-warning": true,
      };

      const response = await fetch(url, {
        method,
        headers,
        body: payload && JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        successCallback(data);
      } else {
        errorCallback(response);
      }
    } catch (error) {
      errorCallback(error);
    }
  }

  handleAPIFunction(method, url, payload, successCallback, errorCallback) {
    return this.handleJsonRequest(
      method,
      url,
      payload,
      successCallback,
      errorCallback
    );
  }
}
