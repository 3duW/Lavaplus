
const BASE_URL_API = window.location.hostname.includes("localhost")
  ? "http://localhost:9000/api"
  : "https://backend-1-8jg3.onrender.com/api";
  
const ENDPOINTS = {
  coment: `${BASE_URL_API}/comentarios`,
  cont: `${BASE_URL_API}/cont`,
  deliv: `${BASE_URL_API}/deliv`,
  fac: `${BASE_URL_API}/fac`,
  invent: `${BASE_URL_API}/inventarios`,
  login: `${BASE_URL_API}/registros/login`,
  maqui: `${BASE_URL_API}/maquinas`,
  notif: `${BASE_URL_API}/notificaciones`,
  pedidos: `${BASE_URL_API}/pedidos`,
  planificaciones: `${BASE_URL_API}/plani`,
  promociones: `${BASE_URL_API}/promo`,
  register: `${BASE_URL_API}/registros`,
  suministros: `${BASE_URL_API}/sumi`
};
