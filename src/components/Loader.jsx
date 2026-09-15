export default function Loader({ fullscreen }) {
   return (
     <div className={fullscreen ? 'loader fullscreen' : 'loader'}>
       <div className="spinner" />
     </div>
   );
 }
