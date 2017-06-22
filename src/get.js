// Should duck-type check for window.XMLHttpRequest before importing this. We assume our target runtime is NodeJS here.
import { XMLHttpRequest } from 'xmlhttprequest';

// request function is separate as we can swap it out with a mock request function during tests
export function request(url, resolve, reject) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(xhr.responseText);
    } else {
      reject(new Error(xhr.statusText));
    }
  }

  xhr.onerror = () => reject(new Error('Error executing XHR request'));

  xhr.send();
}

export default function get(url, req = request) {
  return new Promise((resolve, reject) => {
    return req(url, resolve, reject);
  });
}
