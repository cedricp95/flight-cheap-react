import api from "./api";

export async function healthz() {
  return await api().get("/healthz");
}

export async function login(username, password) {
  return await api().post("/login", {
    username: username,
    password: password,
  });
}

export async function get_iata() {
  return await api().get("/iata_code/");
}
