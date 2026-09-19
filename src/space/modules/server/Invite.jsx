import { useTelegram } from '../../../hooks/useTelegram';

const BOT_USERNAME = 'TheBillionMilestoneBot';

export default function Invite() {
  const { tg, user } = useTelegram();
  const userId = user?.id;
  const inviteLink = userId
    ? `https://t.me/${BOT_USERNAME}?start=ref_${userId}`
    : '';

  const handleShare = () => {
    if (!inviteLink) return;
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=${encodeURIComponent('Присоединяйся к The Billion Milestone!')}`;
    if (tg?.openTelegramLink) {
      tg.openTelegramLink(shareUrl);
    } else {
      window.open(shareUrl, '_blank');
    }
  };

  const handleCopy = async () => {
    if (!inviteLink) return;
    try {
      await navigator.clipboard.writeText(inviteLink);
      tg?.showAlert?.('Ссылка скопирована');
    } catch {
      tg?.showAlert?.('Не удалось скопировать');
    }
  };

  if (!userId) {
    return (
      <div className="holo-panel">
        <div className="holo-scanline" />
        <p className="holo-text">
          Откройте приложение через Telegram, чтобы получить персональную ссылку.
        </p>
      </div>
    );
  }

  return (
    <div className="holo-panel">
      <div className="holo-scanline" />

      <p className="holo-text">
        Пригласите друга по своей ссылке. За каждого приглашённого вы получаете
        очки: <strong>+1</strong> к личному уровню, <strong>+0.5</strong> к
        второму и <strong>+0.25</strong> к третьему.
      </p>

      <div className="invite-link-box">
        <input
          className="invite-link-input"
          type="text"
          readOnly
          value={inviteLink}
          onFocus={(e) => e.target.select()}
        />
      </div>

      <div className="invite-actions">
        <button className="back-btn" onClick={handleShare}>
          ПОДЕЛИТЬСЯ
        </button>
        <button className="back-btn" onClick={handleCopy}>
          СКОПИРОВАТЬ
        </button>
      </div>
    </div>
  );
}
