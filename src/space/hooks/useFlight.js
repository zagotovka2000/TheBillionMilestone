import { useState, useEffect, useRef, useCallback } from 'react';
import { FLIGHT_MS } from '../constants';

export function useFlight() {
  const [currentTab, setCurrentTab] = useState(null);
  const [flying, setFlying] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const selectTab = useCallback((id) => {
    if (flying) return;
    setFlying({ id, phase: 'in' });
    timerRef.current = setTimeout(() => {
      setCurrentTab(id);
    }, FLIGHT_MS);
  }, [flying]);

  const backToOrbit = useCallback(() => {
    setCurrentTab(null);

    setFlying({ id: null, phase: 'out' });

   
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFlying({ id: null, phase: 'returning' });
        timerRef.current = setTimeout(() => {
          setFlying(null);
        }, FLIGHT_MS);
      });
    });
  }, []);

  const isSubpage = currentTab !== null;
  const isInPhase = flying?.phase === 'in';
  const isOutPhase = flying?.phase === 'out';
  const isReturning = flying?.phase === 'returning';


  const isPlanetHidden = isInPhase || isSubpage;


  const sceneClass =
    'scene' +
    (isInPhase ? ' scene-zoomed' : '') +
    (isOutPhase ? ' scene-flown' : '') +
    (isReturning ? ' scene-returning' : '') +
    (isSubpage && !isReturning && !isOutPhase ? ' scene-flown' : '');

  return {
    currentTab,
    flying,
    isSubpage,
    isInPhase,
    isOutPhase,
    isReturning,
    isPlanetHidden,
    sceneClass,
    selectTab,
    backToOrbit,
  };
}
