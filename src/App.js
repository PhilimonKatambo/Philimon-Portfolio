import './App.css';
import './css/homepage.css'
import './css/body.css'
import Desktop from './3d';
import Wormhole from './Wormhole';
import Project from './projects';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faVoicemail, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';

function App() {
  return (
    <div id="body">
      <AppBar />
      <Name />
      <Wormhole />
      <Project />
      <Footer />
    </div>
  );
}

const AppBar = () => {
  return (
    <div id='appBar'>
      <div id='leftSide'>
        <div id='Logo'>
          <img src='logoEdt.jpg' id='logo'></img>
        </div>
        <div id='name'>Philimon</div>
        <div id='career'>Developer</div>
      </div>

      <div id='duties'>
        <a href='#skillPage' id='Skill'>Skills</a>
        <a href='#projectsPage' id='Work'>Work</a>
        <a href='#projectsPage' id='Project'>Projects</a>
        <a href='#contactPage' id='Contact'>Contact</a>
      </div>
    </div>
  )
}


const Name = () => {
  const downloadCV = async () => {
    const url = './assets/cv.docx'
    try {
      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a')
          a.href = url
          a.download = 'PhilimonKatamboCV.docx';
          a.click()
          window.URL.revokeObjectURL(URL)
        })
    } catch (e) {
      console.log("Error Download" + e)
      alert('Failed to download file')
    }
  }

  return (
    <div id='greeting'>
      <div id='leftGreeting'>
        <div id='line'></div>
        <div id='info'>
          <div id='greetName'>
            <div id='greet'>Hi, I'm</div>
            <div id='bigName'>Philimon</div>
          </div>
          <div id='description'>
            I am a full-stack developer with experience in many defferent fields and categories
          </div>
          <Desktop />
        </div>
      </div>

      <div id="otherLinks">
        <div id='proMouse'>
          <img src='./Pics/Profile.jpg' id='proPic'></img>
        </div>
        <ContactWays />

        <div id='getStarted' onClick={downloadCV}>
          <div >Download CV</div>
          <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  )
}

const ContactWays = () => {

  const openWhatsapp = (phoneNumber, msg) => {
    const msg1 = encodeURIComponent(msg);
    const url = `https://wa.me/${phoneNumber}?text=${msg1}`
    window.open(url, '_blank')
  }

  const openLinkedIn = () => {
    const url = 'https://www.linkedin.com/in/philimon-katambo-2aa6b8358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.focus();
    } else {
      alert('Please allow pop-ups for this site to open LinkedIn.');
    }
  };

  const openGitHub = () => {
    const url = 'https://github.com/PhilimonKatambo';
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.focus();
    } else {
      alert('Please allow pop-ups for this site to open LinkedIn.');
    }
  }

  const openMail = () => {
    const email = 'phidohphidz2@gmail.com';
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  }

  return (
    <div id="contactWays">
      <div id="wap" onClick={() => openWhatsapp('+265981254727', "Hello")}>
        <FontAwesomeIcon icon={faWhatsapp} id='wapLogo' />
      </div>
      <div id="wap" onClick={() => openMail()}>
        <FontAwesomeIcon icon={faEnvelope} id='googleLogo' />
      </div>
      <div id="wap" onClick={() => openLinkedIn()}>
        <FontAwesomeIcon icon={faLinkedin} id='linkedInLogo' />
      </div>
      <div id="wap" onClick={() => alert("Can't open github")}>
        <FontAwesomeIcon icon={faGithub} id='gitLogo' />
      </div>
    </div>
  )
}

export default App;
