import { TABS } from '../constants';
import Profile from '../modules/server/Profile';
import Leaderboard from '../modules/server/Leaderboard';
import Invite from '../modules/server/Invite';
import Rules from '../modules/static/Rules';
import Faq from '../modules/static/Faq';
import About from '../modules/static/About';

const MODULES = {
  1: Profile,
  2: Leaderboard,
  3: Invite,
  4: Rules,
  5: Faq,
  6: About,
};

export default function SubPage({ tabId, onBack }) {
  const tab = TABS.find((t) => t.id === tabId);
  const Module = MODULES[tabId];

  return (
    <div className="subpage">
      <button onClick={onBack} className="back-btn">
        <span className="back-arrow">←</span>
        BACK TO ORBIT
      </button>

      <div className="subpage-content">
        <div className="subpage-header">
          <span className="subpage-module">
            Module {String(tabId).padStart(2, '0')}
          </span>
          <h2 className="subpage-title">{tab?.label}</h2>
        </div>

        {Module ? (
          <Module />
        ) : (
          <div className="holo-panel">
            <div className="holo-scanline" />
            <p className="holo-text">
              Модуль {tabId} в разработке. Скоро здесь появится содержимое.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
