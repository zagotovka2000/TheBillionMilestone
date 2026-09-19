import { useEffect, useState } from 'react';
import { useTelegram } from '../../../hooks/useTelegram';
import { getUser, getUserRank } from '../../../api/client';

export default function Profile() {
  const { tg, user } = useTelegram();
  const [data, setData] = useState(null);
  const [rank, setRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = user?.id;

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([getUser(userId), getUserRank(userId)])
      .then(([u, r]) => {
        if (cancelled) return;
        setData(u);
        setRank(r);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err?.response?.data?.detail || err?.message || 'Ошибка загрузки');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [userId]);

  if (!userId) {
    return (
      <div className="holo-panel">
        <div className="holo-scanline" />
        <p className="holo-text">
          Откройте приложение через Telegram, чтобы увидеть свой профиль.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="holo-panel">
        <div className="holo-scanline" />
        <p className="holo-text">Загрузка профиля…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="holo-panel">
        <div className="holo-scanline" />
        <p className="holo-text">⚠️ {error}</p>
      </div>
    );
  }

  const displayName =
    user?.first_name || data?.username || `user${userId}`;

  return (
    <div className="holo-panel">
      <div className="holo-scanline" />

      <div className="profile-head">
        <div className="profile-avatar">
          {displayName.charAt(0).toUpperCase()}
        </div>
        <div className="profile-name">
          <span className="profile-name-text">{displayName}</span>
          <span className="profile-id">ID {userId}</span>
        </div>
      </div>

      <div className="profile-score">
        <span className="profile-score-value">
          {Math.round(data?.score ?? 0)}
        </span>
        <span className="profile-score-label">SCORE</span>
      </div>

      <div className="profile-rank">
        <span className="profile-rank-label">RANK</span>
        <span className="profile-rank-value">#{rank?.rank ?? '—'}</span>
      </div>

      <div className="metrics">
        <div className="metric">
          <span className="metric-key">ЛИЧНЫЕ</span>
          <span className="metric-value">{data?.personal_count ?? 0}</span>
        </div>
        <div className="metric">
          <span className="metric-key">2 УРОВЕНЬ</span>
          <span className="metric-value">{data?.level2_count ?? 0}</span>
        </div>
        <div className="metric">
          <span className="metric-key">3 УРОВЕНЬ</span>
          <span className="metric-value">{data?.level3_count ?? 0}</span>
        </div>
      </div>

      <button
        className="back-btn profile-share-btn"
        onClick={() => {
          const link = `https://t.me/TheBillionMilestoneBot?start=ref_${userId}`;
          const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent('Присоединяйся к The Billion Milestone!')}`;
          if (tg?.openTelegramLink) tg.openTelegramLink(shareUrl);
          else window.open(shareUrl, '_blank');
        }}
      >
        ПРИГЛАСИТЬ ДРУГА
      </button>
    </div>
  );
}
