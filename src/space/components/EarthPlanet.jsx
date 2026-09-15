export default function EarthPlanet({ hidden }) {
   return (
     <div className={`earth-stage ${hidden ? 'earth-stage-hidden' : ''}`}>
       <div className="earth-glow" />
       <div className="earth">
         <div className="earth-surface" />
         <div className="earth-terminator" />
       </div>
       <div className="earth-atmosphere" />
     </div>
   );
 }
