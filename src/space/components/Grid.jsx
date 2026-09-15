import { TABS } from '../constants';
import TabCard from './TabCard';

export default function Grid({ onSelect, flying }) {
  const getMode = (tab) => {
    if (!flying) return 'idle';
    return flying.id === tab.id ? 'target' : 'away';
  };

  const renderCard = (tab, i) => (
    <TabCard
      key={tab.id}
      tab={tab}
      index={i}
      mode={getMode(tab)}
      onClick={() => !flying && onSelect(tab.id)}
    />
  );

  return (
    <div className="grid">
      <div className="grid-col grid-col-left">
        {TABS.slice(0, 3).map((tab, i) => renderCard(tab, i))}
      </div>
      <div className="grid-col grid-col-right">
        {TABS.slice(3).map((tab, i) => renderCard(tab, i + 3))}
      </div>
    </div>
  );
}
