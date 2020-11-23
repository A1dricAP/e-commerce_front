// import { API } from "../config";

// // this method comprehends the values received as user object.
// export const signUp = (user) => {
//   // sending the body of this fetch() with POST method
//   // to the already created signup route in the server backend that connects with the database.
//   return (
//     fetch(`${API}/signup`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       // .then((response) => {
//       //   return response.text();
//       // })
//       // .then((text) => {
//       //   console.log(text);
//       // })
//       .catch((err) => {
//         console.log(err);
//       })
//   );
// };

// export const signin = (user) => {
//   // sending the body of this fetch() with POST method
//   // to the already created signup route in the server backend that connects with the database.
//   return fetch(`${API}/signin`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((response) => {
//       return response.json;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export const authenticate = (data, next) => {
//   if (typeof window !== "undefined") {
//     console.log(localStorage);
//     localStorage.setItem("jwt", JSON.stringify(data)); // * setting 'jwt' as the name of the key in localstorage.
//     next();
//     return fetch(`${API}/signout`, {
//       method: "GET",
//     })
//       .then((response) => {
//         return response;
//       })
//       .catch((err) => {
//         return err;
//       });
//   }
// };

// export const signout = (next) => {
//   if (typeof window !== "undefined") {
//     localStorage.removeItem("jwt");
//     next();
//   }
// };