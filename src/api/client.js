import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
})

export async function registerUser({ user_id, username, invited_by }) {
  const { data } = await api.post('/users/register', {
    user_id,
    username,
    invited_by,
  })
  return data
}

export async function getUser(userId) {
  const { data } = await api.get(`/users/${userId}`)
  return data
}

export async function getUserRank(userId) {
  const { data } = await api.get(`/users/${userId}/rank`)
  return data
}

export async function fetchLeaderboard({ limit = 50 } = {}) {
  const { data } = await api.get('/leaderboard', { params: { limit } })
  return data
}
