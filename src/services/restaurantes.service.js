import Api from "./api";

export async function getRestaurantes(id) {
  try {
    const restaurantes = await Api.get(`/restaurantes/${id}.json`);
    return restaurantes.data;
  } catch (err) {
    throw err;
  }
};

export async function getRestauranteDetalhes(id) {
  try {
    const restaurantes = await Api.get(`/detalhes/${id}.json`);
    return restaurantes.data;
  } catch (err) {
    throw err;
  }
};