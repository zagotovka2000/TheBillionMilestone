export default function TabCard({ tab, index, onClick, mode }) {

   const cls =
     'tab-card' +
     (mode === 'target' ? ' tab-card-target' : '') +
     (mode === 'away' ? ' tab-card-away' : '');
 
   return (
     <button
       className={cls}
       onClick={onClick}
       style={{ animationDelay: `${index * 80}ms` }}
     >
       <span className="tab-number">{String(tab.id).padStart(2, '0')}</span>
       <span className="tab-label">{tab.label}</span>
       <span className="tab-status">
         <span className="tab-status-dot" />
         {tab.status}
       </span>
       <span className="tab-corner tab-corner-tl" />
       <span className="tab-corner tab-corner-br" />
     </button>
   );
 }
