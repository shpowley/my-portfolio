import icon_new_window from './assets/new_window.svg'

const ImageNewWindow = () => {
  return <img src={icon_new_window} alt='new window' className='icon_new_window' />
}

const App = () => {
  return <>
    <div id='div_main'>
      {/* TITLE HEADER */}
      <section id='section_title'>
        <h1>Welcome to my Portfolio</h1>
        <h3>Hi! My name is SUNG POWLEY.</h3><br />
        <h3>I&#39;m a Web Developer and Tech Hobbyist.</h3>
        <h3>Experimenting with interactive 3D on web, mixed-reality AR/VR on the open-web and mobile.</h3>
      </section>

      {/* RESUME LINK */}
      <section id='section_resume'>
        <h2>Resume</h2>
        <ul>
          <li>
            <a href='https://docs.google.com/document/d/1cIJ3FQ_ps6kdlD1Oetcf8yOyHzvNCqsyA4B5uB9oBjw' target='_blank' rel='noreferrer'>
              View on Google Drive
            </a>
            &nbsp;<ImageNewWindow />
          </li>
          <li>
            <a href='./Resume 2024.pdf' download target='_blank' rel='noreferrer'>Download PDF</a>
          </li>
        </ul>
      </section>

      {/* CREATE LIST OF PROJECTS */}
      <section id='section_projects'>
        <h2>Projects</h2>
        <ul>
          <li>
            <a href='https://sketchfab.com/pxlmesh/models' target='_blank' rel='noreferrer'>
              3D MODELS (SKETCHFAB)
            </a>
            &nbsp;<ImageNewWindow />
            <br />
            3d models created for use in several projects<br /><br />
            Blender, Marmoset Toolbag<br />
          </li>
          <li>
            <a href='https://play.google.com/store/apps/dev?id=7623722857728643207' target='_blank' rel='noreferrer'>
              LIVE WALLPAPER APPS ON THE GOOGLE PLAY STORE (2023 - 2025)
            </a>
            &nbsp;<ImageNewWindow />
            <br />
            Interactive live wallpapers for Android mobile devices (soon to be retired)<br /><br />
            libGDX, Blender<br />
          </li>
          <li>
            <a href='https://shpowley.github.io/android-wallpaper/' target='_blank' rel='noreferrer'>
              LIVE WALLPAPER DEMO
            </a>
            &nbsp;<ImageNewWindow />
            <br />
            3D smartphone demonstrating some PXLmesh Android live wallpaper apps (video)<br /><br />
            React.js, React-Three-Fiber, Javascript, HTML, CSS<br />
            DREI, Zustand<br />
          </li>
          <li>
            <a href='https://shpowley.github.io/isometric-room/' target='_blank' rel='noreferrer'>
              ISOMETRIC ROOM
            </a>
            &nbsp;<ImageNewWindow />
            <br />
            &#34;Three.js Journey&#34;<a href='https://threejs-journey.com' target='_blank' rel='noreferrer'><ImageNewWindow /></a> course challenge #9 - &#34;Isometric Room&#34;<br /><br />
            Features a custom 3d room made in Blender featuring &#34;baked&#34; textures and animations<br />
            &#34;x-ray vision&#34; effect to see through the walls<br /><br />
            React.js, React-Three-Fiber, Zustand, Javascript, HTML, CSS<br />
            Blender (3d modeling), Anime.js (animations)<br />
          </li>
          <li>
            <a href='https://shpowley.github.io/cardboard-warrior/' target='_blank' rel='noreferrer'>
              CARDBOARD WARRIOR (GAME)
            </a>
            &nbsp;<ImageNewWindow />
            <br />
            &#34;Three.js Journey&#34;<a href='https://threejs-journey.com' target='_blank' rel='noreferrer'><ImageNewWindow /></a> course challenge #7 - &#34;Procedural World&#34;<br /><br />
            A simplified dungeon explorer with random rooms, dice with physics, sound and animation<br />
            My very first project after completing completing the course<br /><br />
            React.js, React-Three-Fiber, Javascript, HTML, CSS<br />
            DREI, Zustand, Anime.js (animation), Rapier (physics)<br />
          </li>
          <li>
            <a href='https://shpowley.github.io/coins-falling/' target='_blank' rel='noreferrer'>
              <span>COINS FALLING PHYSICS SIMULATION</span>
            </a>
            &nbsp;<ImageNewWindow />
            <br />
            A very early practice page created while learning &#34;Three.js Journey&#34;<a href='https://threejs-journey.com' target='_blank' rel='noreferrer'><ImageNewWindow /></a> course<br /><br />
            Tap the screen to drop the coins faster<br />
            Use the gear icon and select from various types coins<br /><br />
            Three.js + Cannon.js (physics), Javascript, HTML, CSS<br />
          </li>
        </ul>
      </section>
    </div>
  </>
}

export default App
