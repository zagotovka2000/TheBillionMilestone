import { useEffect, useState } from 'react';

export function useTelegram() {
  const [tg, setTg] = useState(null);
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const w = window.Telegram?.WebApp;
    if (!w) {
      setReady(true); // dev-режим вне Telegram
      return;
    }
    setTg(w);
    setUser(w.initDataUnsafe?.user || null);
    setReady(true);
  }, []);

  return { tg, user, ready };
}
