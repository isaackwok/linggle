const LINGGLE_DOMAIN = 'https://linggle.com'
const API_BASE = '/api'

export const BASE_API_URL = `https://corsanywhere.herokuapp.com/${LINGGLE_DOMAIN}${API_BASE}`
// export const BASE_API_URL = import.meta.env.DEV ? `https://corsanywhere.herokuapp.com/${LINGGLE_DOMAIN}${API_BASE}`: API_BASE

export const NGRAM_API_URL = `${BASE_API_URL}/ngram`