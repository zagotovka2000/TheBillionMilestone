export default function About() {
   return (
     <div className="rules">
       <div className="holo-panel">
         <div className="holo-scanline" />
         <h3 className="rules-h3">The Billion Milestone</h3>
         <p className="holo-text">
           Миллиардный рубеж — это игра-рейтинг, где побеждает не тот, у кого
           больше денег или власти, а тот, у кого <b>больше настоящих друзей</b>.
         </p>
       </div>
 
       <div className="holo-panel">
         <div className="holo-scanline" />
         <h3 className="rules-h3">Идея</h3>
         <p className="holo-text">
           В современном мире рейтинги часто измеряют громкость, а не глубину.
           Мы хотим измерить другое: насколько широко и глубоко вы способны
           объединить людей вокруг общей цели.
         </p>
         <p className="holo-text">
           Логарифмическая формула делает честную игру: не важно, как громко
           вы кричите — важно, сколько людей действительно захотели идти с вами.
         </p>
       </div>
 
       <div className="holo-panel">
         <div className="holo-scanline" />
         <h3 className="rules-h3">Технологии</h3>
         <ul className="rules-list">
           <li>Mini App работает прямо в Telegram</li>
           <li>Бэкенд — FastAPI на Render</li>
           <li>База данных — Turso (LibSQL)</li>
           <li>Фронтенд — React + Vite на Vercel</li>
         </ul>
       </div>
 
       <div className="holo-panel">
         <div className="holo-scanline" />
         <h3 className="rules-h3">Версия</h3>
         <p className="holo-text">
           MVP v0.1 · Лидерборд, профиль, приглашения, правила, FAQ — работают.
           Дальше: бот-обработчик приглашений, кэш рейтинга, аналитика.
         </p>
       </div>
     </div>
   );
 }
