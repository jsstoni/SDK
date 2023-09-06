const fetch = require("node-fetch");

const baseUrl = "http://localhost:8000";

function urlHandle(collection) {
  return `${baseUrl}/${collection}`;
}

async function handleFetch(endpoint, options = {}) {
  try {
    const response = await fetch(endpoint, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function get(collection, options = "") {
  const endpoint =
    options !== ""
      ? `${urlHandle(collection)}?s=${options}`
      : `${urlHandle(collection)}`;
  return handleFetch(endpoint);
}

async function post(collection, data) {
  return handleFetch(urlHandle(collection), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

async function put(collection, data) {
  return handleFetch(urlHandle(collection), {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
}

async function patch(collection, data) {
  return handleFetch(urlHandle(collection), {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
}

async function remove(collection, id) {
  return handleFetch(`${urlHandle(collection)}/q=${id}`, { method: "DELETE" });
}

module.exports = {
  get,
  post,
  put,
  patch,
  remove,
};
