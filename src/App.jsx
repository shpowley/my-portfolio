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
        <h3>Hi! My name is SUNG POWLEY.</h3>
        <h3>I&#39;m a Web Developer and Tech Enthusiast.</h3>
        <h3>Join me on my journey as I explore interactive 3D on the web and mobile space.</h3>
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
              PXLMESH LIVE WALLPAPER APPS (GOOGLE PLAY STORE)
            </a>
            &nbsp;<ImageNewWindow />
            <br />
            Several &#34;meme&#34; style touch-interactive live wallpapers<br /><br />
            libGDX, Blender<br />
          </li>
          <li>
            <a href='https://www.pxlmesh.com/dev/pxlmesh-smartphone/' target='_blank' rel='noreferrer'>
              PXLMESH.COM NEW MAIN LANDING PAGE
            </a>
            &nbsp;<ImageNewWindow />
            <br />
            2024 version | WORK IN PROGRESS<br /><br />
            Features an interactive smartphone 3D model playing video, demonstrating some Android live wallpaper apps<br />
            Click each app icon to see a different app demo<br /><br />
            React.js, React-Three-Fiber, Javascript, HTML, CSS<br />
            DREI, Zustand<br />
          </li>
          <li>
            <a href='https://www.pxlmesh.com/dev/isometric-room/' target='_blank' rel='noreferrer'>
              ISOMETRIC ROOM
            </a>
            &nbsp;<ImageNewWindow />
            <br />
            &#34;Three.js Journey&#34;<a href='https://threejs-journey.com' target='_blank' rel='noreferrer'><ImageNewWindow /></a> course challenge #9 - &#34;Isometric Room&#34;<br /><br />
            My second post-course project entry (practice project)<br />
            An custom 3d modeled room featuring &#34;baked&#34; textures and animations<br />
            Note that click-dragging the scene makes the wall/ceiling/floor that would otherwise block the view, fade out and disappear<br />
            I wanted to add a lot more to this scene ..so this is now a post-challenge work-in-progress<br /><br />
            React.js, React-Three-Fiber, Javascript, HTML, CSS, Blender 3d modeling<br />
            Zustand, Anime.js (animation<br />
          </li>
          <li>
            <a href='https://www.pxlmesh.com/dev/cardboard-fixed/' target='_blank' rel='noreferrer'>
              CARDBOARD WARRIOR (GAME)
            </a>
            &nbsp;<ImageNewWindow />
            <br />
            &#34;Three.js Journey&#34;<a href='https://threejs-journey.com' target='_blank' rel='noreferrer'><ImageNewWindow /></a> course challenge #7 - &#34;Procedural World&#34;<br /><br />
            My very first project after completing completing the course (practice project)<br />
            A &#34;simplified&#34; dungeon explorer with random rooms, dice with physics, sound and animation<br />
            This version implements post-challenge fixes<br /><br />
            React.js, React-Three-Fiber, Javascript, HTML, CSS<br />
            DREI, Zustand, Anime.js (animation), Rapier (physics)<br />
          </li>
          <li>
            <a href='https://www.pxlmesh.com/dev/three-js/physics/' target='_blank' rel='noreferrer'>
              <span>COINS FALLING PHYSICS SIMULATION</span>
            </a>
            &nbsp;<ImageNewWindow />
            <br />
            A very early practice page I created while mid-way through the &#34;Three.js Journey&#34;<a href='https://threejs-journey.com' target='_blank' rel='noreferrer'><ImageNewWindow /></a> course<br /><br />
            Use the gear icon for settings and select from various types coins<br />
            Click on the screen to drop coins faster<br /><br />
            NOTE:<br />
            I was only part-way through this course so performance may be an issue on older hardware<br />
            There is still room for improved performance such as simplified models and instanced meshes<br /><br />
            Three.js + cannon.js (physics), Javascript, HTML, CSS<br />
            3D models for crypto coins created in Blender<br />
          </li>
        </ul>
      </section>
    </div>
  </>
}

export default App
