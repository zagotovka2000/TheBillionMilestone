import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTelegram } from './hooks/useTelegram';
import { registerUser } from './api/client';
import Loader from './components/Loader';
import SpaceView from './space/SpaceView';

export default function App() {
  const { tg, user, ready } = useTelegram();
  const { i18n } = useTranslation();
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    if (!ready) return;
    const lang = (user?.language_code || 'en').slice(0, 2);
    const supported = ['ru', 'en', 'es'];
    i18n.changeLanguage(supported.includes(lang) ? lang : 'en');
// ВРЕМЕННО для теста вне Telegram
const testUserId = user?.id || 999999;
const testUsername = user?.first_name || 'TestUser';

registerUser({
  user_id: testUserId,
  username: testUsername,
})
  .then((res) => console.log('✅ Registered:', res))
  .catch((err) => console.error('❌ Register error:', err));
    // Авторегистрация в бэкенде
 /*    if (user?.id) {
      registerUser({
        user_id: user.id,
        username: user.first_name || user.username || `user${user.id}`,
      }).catch((err) => {
        console.warn('Не удалось зарегистрировать:', err);
      });
    } */

    setBooting(false);
  }, [ready, user, i18n]);

  useEffect(() => {
    if (!tg) return;
    tg.ready();
    tg.expand();
    tg.setHeaderColor?.('#030712');
    tg.setBackgroundColor?.('#030712');
    tg.disableVerticalSwipes?.();
  }, [tg]);

  if (booting) return <Loader fullscreen />;
  return <SpaceView />;
}
