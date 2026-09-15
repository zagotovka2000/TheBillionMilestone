import { TABS } from '../constants';

export default function SubPage({ tabId, onBack }) {
  const tab = TABS.find((t) => t.id === tabId);
  const metrics = ['PWR', 'NAV', 'SIG', 'SYS'].map((k, i) => ({
    key: k,
    fill: 40 + ((tabId * 13 + i * 17) % 55),
  }));

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

        <div className="holo-panel">
          <div className="holo-scanline" />
          <p className="holo-text">
            Контент подстраницы {tabId}. Здесь будет размещён основной модуль
            системы — данные, графики, управление или статус подсистемы.
          </p>

          <div className="metrics">
            {metrics.map((m) => (
              <div key={m.key} className="metric">
                <span className="metric-key">{m.key}</span>
                <span className="metric-bar">
                  <span
                    className="metric-fill"
                    style={{ width: `${m.fill}%` }}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
