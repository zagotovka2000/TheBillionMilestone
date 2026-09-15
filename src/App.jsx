import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTelegram } from './hooks/useTelegram';
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
