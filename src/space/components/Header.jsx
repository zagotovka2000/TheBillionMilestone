export default function Header() {
   return (
     <header className="header">
       <div className="header-left">
         <h1 className="header-title">Command</h1>
         <span className="status-dot" />
       </div>
       <div className="status-frame">
         <span className="status-text">● Online</span>
       </div>
     </header>
   );
 }
