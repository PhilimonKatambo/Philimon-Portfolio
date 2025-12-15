import './css/projects.css';
import './css/musicPlayer.css';
import './css/Contact.css'
import Earth from './Earth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPython, faReact, faNodeJs, faJs, faFirefoxBrowser, faFlutter, faDartLang } from '@fortawesome/free-brands-svg-icons';
import { useRef, useEffect, useState } from 'react'
import { color } from 'three/tsl';

const Project = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [msg2, setMsg2] = useState("");

    const closeDialog = () => setIsOpen(false);

    return (
        <div id="projectsPage">
            <div id='pageTitle'>Projects</div>
            <div id='pageDes'>I have built and I am still building. Below is what am capable of:</div>
            <div id='projectsTabb'>
                <UHB />
                <MusicPlayer setOpen={setIsOpen} msgProp={setMsg} msg2Prop={setMsg2} />
                <Dematologia setOpen={setIsOpen} msgProp={setMsg} msg2Prop={setMsg2} />
                <SchoolHub setOpen={setIsOpen} msgProp={setMsg} msg2Prop={setMsg2} />
                <EmbeddedSystem setOpen={setIsOpen} msgProp={setMsg} msg2Prop={setMsg2} />
                <MayaDesk setOpen={setIsOpen} msgProp={setMsg} msg2Prop={setMsg2} />
                <Contact setOpen={setIsOpen} msgProp={setMsg} msg2Prop={setMsg2} />
            </div>

            {/* Popup */}
            <div>
                {isOpen && (
                    <div style={popupStyles.overlay} onClick={closeDialog}>
                        <div style={popupStyles.dialog}>
                            <h2 id='bigWord'>{msg}</h2>
                            <p id='smallWord'>{msg2}</p>
                            <button onClick={closeDialog} id='okay'>Okay</button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

const popupStyles = {
    overlay: {
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
        justifyContent: 'center', alignItems: 'center'
    },
    dialog: {
        background: 'white', padding: '20px', borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', textAlign: 'center',
    },
};


const SchoolHub = (props) => {
    const open = () => {
        props.setOpen(true);
        props.msgProp("Notice!");
        props.msg2Prop("It's still under development");
    }

    return (
        <div id="schoolHub">
            <div id="progTitle">
                SchoolHub App
            </div>
            <div id="progDes">
                SchoolHub is collaborative platform that allows students to share school resources and real-time communications through chatting services.
                It also implies of real-time assistance with simple chatbot.
            </div>
            <div id='imgHub'>
                <img src='./Pics/school.png' id='imgHub'></img>
            </div>
            <div id='down'>
                <div id="Tools">
                    <div id='tool'>Tools:</div>
                    <div id='grpTools'>
                        <FontAwesomeIcon icon={faPython}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                    </div>
                </div>
                <div id='access'>
                    <button id='code' onClick={open}>
                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                    </button>
                    <button id='viewMore' onClick={open}>
                        <div>View</div>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

const Dematologia = (props) => {
    const open = () => {
        props.setOpen(true);
        props.msgProp("Notice!");
        props.msg2Prop("It's still under development");
    }

    return (
        <div id="schoolHub">
            <div id="progTitle">
                Dematologia app
            </div>
            <div id="progDes">
                During our third year semester project I was among the team, that built dematologia app,
                a mobile app, that detects skin conditions and diseases. Then it gives recommendations.
                It uses machine learning algorithms like, CNN, NLP
            </div>
            <div id='imgHub'>
                <img src='./Pics/dematology.jpg' id='imgHub'></img>
            </div>
            <div id='down'>
                <div id="Tools">
                    <div id='tool'>Tools:</div>
                    <div id='grpTools'>
                        <FontAwesomeIcon icon={faPython}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faFlutter}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDartLang}></FontAwesomeIcon>
                        <div style={{ fontSize: "1rem" }}>FireBase</div>
                        <div style={{ fontSize: "1rem" }}>TensorFlow</div>
                    </div>
                </div>
                <div id='access'>
                    <button id='code' onClick={open}>
                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                    </button>
                    <button id='viewMore' onClick={open}>
                        <div>View</div>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

const MusicPlayer = (props) => {

    const open = () => {
        props.setOpen(true);
        props.msgProp("Notice!");
        props.msg2Prop("Its still under development");
    }
    return (
        <div id="MusicPlayerCard">
            <div id="progTitle">
                Music Player
            </div>
            <div id="progDes">
                This app plays local music on web browser for great music frequency.
                There is a saying that, this app is much better than VLC. This uses local indexed database that
                is offered by many browsers which can store data of more than 5GB. We convert each and every song
                URL chunks whick makes it slim for covering a small amount of space and offer smooth control over
                our songs.
            </div>
            <div id='imgHub'>
                <img src='./Pics/music.png' id='imgHub'></img>
            </div>
            <div id='down'>
                <div id="Tools">
                    <div id='tool'>Tools:</div>
                    <div id='grpTools'>
                        <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faFirefoxBrowser}></FontAwesomeIcon>
                    </div>
                </div>
                <div id='access'>
                    <button id='code' onClick={open}>
                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                    </button>
                    <button id='viewMore' onClick={() => {
                        window.open("https://wargemusica.vercel.app", "_blank")
                    }}>
                        <div>View</div>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

const EmbeddedSystem = (props) => {
    const open = () => {
        props.setOpen(true);
        props.msgProp("Notice!");
        props.msg2Prop("Its still under development");
    }
    return (
        <div id="Embedded">
            <div id="progTitle">
                Smart lock system
            </div>
            <div id="progDes">
                This system uses facial recognition and RFID card to detect
                and offer authorisation and access. It locks and opens a door
                if it detects an authorised or unauthorised door or face. It runs on ardunino with
                integration with ESP32 wifi module for database access to the servers.
            </div>
            <div id='imgHub1'>
                <video src='./vidz/embedded.mp4' controls id='imgHub1' muted></video>
            </div>
            <div id='down'>
                <div id="Tools">
                    <div id='tool'>Tools:</div>
                    <div id='grpTools'>
                        <FontAwesomeIcon icon={faPython}></FontAwesomeIcon>,
                        <div id='toolUnIconed'>Arduino</div>
                    </div>
                </div>
                <div id='access'>
                    <button id='code' onClick={open}>
                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                    </button>
                    <button id='viewMore' onClick={open}>
                        <div>View</div>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

const MayaDesk = (props) => {
    const open = () => {
        const url = './Pics/Finalrender.jpg'
        try {
            fetch(url)
                .then(response => response.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a')
                    a.href = url
                    a.download = 'Philimon-Maya-render.jpg';
                    a.click()
                    window.URL.revokeObjectURL(URL)
                })
        } catch (e) {
            console.log("Error Download" + e)
            alert('Failed to download file')
        }
    }

    return (
        <div id="Embedded">
            <div id="progTitle">
                Maya first render
            </div>
            <div id="progDes">
                This is my simple maya project made for practice in my third year second semester 3D class.
                I used local texture and local with built in polygons to create this scene.
            </div>
            <div id='imgHub'>
                <img src='./Pics/Finalrender.jpg' id='imgHub'></img>
            </div>
            <div id='down'>
                <div id="Tools">
                    <div id='tool'>Tools:</div>
                    <div id='grpTools'>
                        <div id='toolUnIconed'>Maya</div>,
                        <div id='toolUnIconed'>PhotoShop</div>
                    </div>
                </div>
                <div id='access'>
                    <button id='code' onClick={open}>
                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                    </button>
                    <button id='viewMore' onClick={open}>
                        <div>View</div>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

const UHB = (props) => {
    const open = () => {
        window.open("https://uhb.ac.mw", "_blank")
    }

    return (
        <div id="uhb">
            <div id="progTitle">
                UHB main website
            </div>
            <div id="progDes">
                I am glad to be involved into the development team for this website called uhb main site
            </div>
            <div id='imgHub'>
                <img src='./Pics/uhbPic.png' id='imgHub'></img>
            </div>
            <div id='down'>
                <div id="Tools">
                    <div id='tool'>Tools:</div>
                    <div id='grpTools'>
                        <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                    </div>
                </div>
                <div id='access'>
                    <button id='code' onClick={open}>
                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                    </button>
                    <button id='viewMore' onClick={open}>
                        <div>View</div>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <div id='contactPage'>
            <div id='contactPageTitle'>Contact</div>
            <div id='contactThings'>
                <div id='form'>
                    <input type='text' placeholder='Name'></input>
                    <input type='email' placeholder='Email'></input>
                    <textarea type='text' placeholder='Message'></textarea>
                    <button id='send' onClick={()=>alert("Can't send any message, try again later")}>
                        <div>Send</div>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
                <Earth />
            </div>
        </div>
    )
}

export default Project

