import './SpaceView.css';
import { useFlight } from './hooks/useFlight';
import EarthBackground from './components/EarthBackground';
import EarthPlanet from './components/EarthPlanet';
import Header from './components/Header';
import Grid from './components/Grid';
import SubPage from './components/SubPage';

export default function SpaceView() {
  const {
    currentTab,
    flying,
    isSubpage,
    isInPhase,
    isPlanetHidden,
    sceneClass,
    selectTab,
    backToOrbit,
  } = useFlight();

  return (
    <>
      <div className={sceneClass}>
        <EarthBackground />

        <div className="app-shell">
          <Header />

          <main className="screen-container">
            <div
              className={
                'screen ' +
                (!isSubpage
                  ? 'screen-visible'
                  : 'screen-hidden screen-hidden-up')
              }
            >
              <Grid
                onSelect={selectTab}
                flying={isInPhase ? flying : null}
              />
            </div>
          </main>
        </div>

        <EarthPlanet hidden={isPlanetHidden} />
      </div>

      {isSubpage && (
        <div className="subpage-layer subpage-arrive">
          <SubPage tabId={currentTab} onBack={backToOrbit} />
        </div>
      )}
    </>
  );
}
