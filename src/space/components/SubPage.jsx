import { TABS } from '../constants';
import Invite from '../modules/server/Invite';
import Faq from '../modules/static/Faq';

const MODULES = {
  3: Invite,
  5: Faq,
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
