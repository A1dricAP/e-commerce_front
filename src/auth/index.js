import { API } from "../config";

// this method comprehends the values received as user object.
export const signUp = (user) => {
  // sending the body of this fetch() with POST method
  // to the already created signup route in the server backend that connects with the database.
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (user) => {
  // sending the body of this fetch() with POST method
  // to the already created signup route in the server backend that connects with the database.
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json;
    })
    .catch((err) => {
      console.log(err);
    });
};
