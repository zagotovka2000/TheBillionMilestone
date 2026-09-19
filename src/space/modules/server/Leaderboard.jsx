import { useEffect, useState, useCallback } from 'react';
import { useTelegram } from '../../../hooks/useTelegram';
import { fetchLeaderboard } from '../../../api/client';

export default function Leaderboard() {
  const { user } = useTelegram();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchLeaderboard({ limit: 50 })
      .then((res) => setUsers(res.users || []))
      .catch((err) =>
        setError(err?.response?.data?.detail || err?.message || 'Ошибка загрузки')
      )
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { load(); }, [load]);

  const myId = user?.id;

  if (loading) {
    return (
      <div className="holo-panel">
        <div className="holo-scanline" />
        <p className="holo-text">Загрузка рейтинга…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="holo-panel">
        <div className="holo-scanline" />
        <p className="holo-text">⚠️ {error}</p>
        <button className="back-btn" onClick={load} style={{ marginTop: 16 }}>
          ПОВТОРИТЬ
        </button>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="holo-panel">
        <div className="holo-scanline" />
        <p className="holo-text">
          Пока никого нет. Пригласите друга, чтобы попасть в рейтинг!
        </p>
      </div>
    );
  }

  return (
    <div className="holo-panel leaderboard-panel">
      <div className="holo-scanline" />

      <div className="leaderboard-refresh">
        <button className="back-btn" onClick={load}>↻ REFRESH</button>
      </div>

      <ol className="leaderboard-list">
        {users.map((u, i) => {
          const isMe = u.user_id === myId;
          return (
            <li
              key={u.user_id}
              className={`leaderboard-row ${isMe ? 'leaderboard-row-me' : ''}`}
            >
              <span className="leaderboard-rank">#{i + 1}</span>
              <span className="leaderboard-name">
                {u.username || `user${u.user_id}`}
                {isMe && <span className="leaderboard-you"> · ты</span>}
              </span>
              <span className="leaderboard-score">
                {Math.round(u.score ?? 0)}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
