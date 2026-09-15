import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
})

export async function fetchLine(fileIndex, lineNumber, lang = 'en') {
  const { data } = await api.get('/line', {
    params: { file: fileIndex, line: lineNumber, lang },
  })
  return data
}

export async function fetchMeta(lang = 'en') {
  const { data } = await api.get('/meta', { params: { lang } })
  return data
}
