export default function Rules() {
   return (
     <div className="rules">
       <div className="holo-panel">
         <div className="holo-scanline" />
         <h3 className="rules-h3">Как это работает?</h3>
         <p className="holo-text">
           Вы приглашаете друзей. За каждого приглашённого вы получаете очки.
           Чем глубже сеть — тем больше очков, но каждый следующий уровень
           «весит» в два раза меньше предыдущего.
         </p>
       </div>
 
       <div className="holo-panel">
         <div className="holo-scanline" />
         <h3 className="rules-h3">Формула</h3>
         <div className="rules-formula">
           Счёт = 1000 × ln( 1 + A + 0.5 × B + 0.25 × C )
         </div>
         <ul className="rules-list">
           <li><b>A</b> — сколько друзей <b>вы пригласили лично</b></li>
           <li><b>B</b> — сколько друзей пригласили <b>ваши друзья</b></li>
           <li><b>C</b> — сколько друзей пригласили <b>друзья ваших друзей</b></li>
         </ul>
       </div>
 
       <div className="holo-panel">
         <div className="holo-scanline" />
         <h3 className="rules-h3">Простыми словами</h3>
         <p className="holo-text">
           Представьте, что вы — капитан. У вас есть команда (уровень 1),
           у каждого из них — своя команда (уровень 2), и у тех — тоже
           (уровень 3). Глубже третьего уровня очки не считаются.
         </p>
         <div className="rules-tree">
           <div className="rules-tree-row">
             <span className="rules-tree-tag">ВЫ</span>
           </div>
           <div className="rules-tree-row rules-tree-indent">
             ├── Друг 1 <span className="rules-weight">вес 1.0</span>
           </div>
           <div className="rules-tree-row rules-tree-indent">
             ├── Друг 2 <span className="rules-weight">вес 1.0</span>
           </div>
           <div className="rules-tree-row rules-tree-indent2">
             │   ├── Друг друга 1 <span className="rules-weight">вес 0.5</span>
           </div>
           <div className="rules-tree-row rules-tree-indent2">
             │   └── Друг друга 2 <span className="rules-weight">вес 0.5</span>
           </div>
           <div className="rules-tree-row rules-tree-indent3">
             │       └── Друг третьего уровня <span className="rules-weight">вес 0.25</span>
           </div>
         </div>
       </div>
 
       <div className="holo-panel">
         <div className="holo-scanline" />
         <h3 className="rules-h3">Примеры</h3>
         <div className="rules-examples">
           <div className="rules-example">
             <div className="rules-example-title">Только вы, никого не пригласили</div>
             <div className="rules-example-calc">1000 × ln(1) = 0 очков</div>
           </div>
           <div className="rules-example">
             <div className="rules-example-title">Пригласили 1 друга</div>
             <div className="rules-example-calc">1000 × ln(1 + 1) = 693 очка</div>
           </div>
           <div className="rules-example">
             <div className="rules-example-title">1 друг + 1 друг друга</div>
             <div className="rules-example-calc">1000 × ln(1 + 1 + 0.5) = 916 очков</div>
           </div>
           <div className="rules-example">
             <div className="rules-example-title">5 друзей, 3 друга друга, 1 третьего уровня</div>
             <div className="rules-example-calc">1000 × ln(1 + 5 + 1.5 + 0.25) ≈ 2007 очков</div>
           </div>
         </div>
       </div>
 
       <div className="holo-panel">
         <div className="holo-scanline" />
         <h3 className="rules-h3">Почему так?</h3>
         <p className="holo-text">
           Логарифм растёт медленно. Это значит: <b>первый друг даёт больше всего</b>,
           а каждый следующий — чуть меньше. Так мы поощряем реальных друзей, а не
           массовые рассылки. Один настоящий друг стоит сотни спам-приглашений.
         </p>
       </div>
     </div>
   );
 }
