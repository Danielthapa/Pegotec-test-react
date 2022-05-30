/**

 * Parses the JSON returned by a network request

 *

 * @param {object} response A response from a network request

 *

 * @return {object} The parsed JSON from the request

 */

import history from "./history";

function parseJSON(response, callback) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  if (response.status === 400) {
    return response
      .json()
      .then((parsedResponse) => {
        if (parsedResponse.error) {
          const error = {
            error: true,
            msg: parsedResponse.msg,
            errorCode: parsedResponse.errorCode,
          };
          return error;
        }
        callback(parsedResponse, null);
      })
      .catch(() => {
        callback(null, "Exception on server");
      });
  }

  if (response.status === 200) {
    return response
      .json()
      .then((parsedResponse) => {
        if (parsedResponse.error) {
          const error = {
            error: true,
            msg: parsedResponse.msg,
            errorCode: parsedResponse.errorCode,
          };
          if (error.errorCode === "AUTH_ERROR") {
            const meetId =
              window.location.pathname.split("/") &&
              window.location.pathname.split("/")[1];
            if (meetId) {
              history.push(`/login?id=${meetId}`);
            } else {
              history.push("/login");
            }
            return;
          }
          return error;
        }
        return parsedResponse;
      })
      .catch(() => {
        callback(null, "Exception on server");
      });
  }
  return response.json();
}

/**
 
  * Checks if a network request came back fine, and throws an error if not
 
  *
 
  * @param {object} response A response from a network request
 
  *
 
  * @return {object|undefined} Returns either the response, or throws an error
 
  */

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 401) {
    // if (window.location.pathname === '/login') {
    // } else {
    //   window.location.replace('/logout');
    // }
  }

  const error = new Error();
  error.response = response;
  if (response.status === 400) {
    return response;
  }
  throw error;
}

/**
 
  * Requests a URL, returning a promise
 
  *
 
  * @param {string} url The URL we want to request
 
  * @param {object} [options] The options we want to pass to "fetch"
 
  *
 
  * @return {object} The response data
 
  */

export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(() => checkStatus());
}

/**
 
  * Check response and convert to array buffer
 
  *
 
  * @param {object} response A response from a network request
 
  *
 
  * @return {object} The array buffer from the request
 
  */

function convertToArrayBuffer(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.arrayBuffer();
}

const convertToArrayInt = (data) => new Uint8Array(data);

// request proto
export function requestProto(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(convertToArrayBuffer)
    .then(convertToArrayInt);
}
