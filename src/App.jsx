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
        <h3>I'm a Web Developer and Tech Enthusiast.</h3>
        <h3>Join me on my journey as I explore interactive 3D on the web and mobile space.</h3>
      </section>

      {/* RESUME LINK */}
      <section id='section_resume'>
        <h2>Resume CV</h2>
        <ul>
          <li>
            <a href='https://docs.google.com/document/d/1as58EPwOzYj0Ray5RWMFAHGrBsM-_03rP5kLVBpscEI' target='_blank'>
              View on Google Drive <ImageNewWindow />
            </a>
          </li>
          <li>
            <a href='./Resume 2024.pdf' download target='_blank'>Download PDF</a>
          </li>
        </ul>
      </section>

      {/* CREATE LIST OF PROJECTS */}
      <section id='section_projects'>
        <h2>Projects</h2>
        <ul>
          <li>
            <a href='https://www.pxlmesh.com/dev/pxlmesh-smartphone/' target='_blank'>
              PXLMESH.COM MAIN LANDING PAGE <ImageNewWindow />
            </a>
            <br />
            2024 version | WORK IN PROGRESS<br /><br />
            Features an interactive smartphone 3D model playing video, demonstrating some Android live wallpaper apps<br />
            Click each app icon to see a different app demo<br /><br />
            React.js, React-Three-Fiber, Javascript, HTML, CSS<br />
          </li>
          <li>
            <a href='https://www.pxlmesh.com/dev/three-js/physics/' target='_blank'>
              <span>COINS FALLING PHYSICS SIMULATION</span> <ImageNewWindow />
            </a>
            <br />
            A very early portfolio page I created while learning Three.js<br /><br />
            Use the gear icon for settings and select from various types coins<br />
            Click on the screen to drop coins faster<br /><br />
            Three.js + cannon.js (physics), Javascript, HTML, CSS<br />
            3D models for crypto coins created in Blender<br />
          </li>
        </ul>
      </section>
    </div>
  </>
}

export default App
