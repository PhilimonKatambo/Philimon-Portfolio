import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faNodeJs, faJs, faFlutter, faDartLang } from '@fortawesome/free-brands-svg-icons';
import './css/skills.css';
import './css/programs.css';
import { faArrowRight, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Skills = () => {
    return (
        <div id='skillPage'>
            <Intro />
        </div>
    )
}

const Intro = () => {
    return (
        <div id='Up'>
            <div id='intro'>
                <div id='fword'>
                    My profession
                </div>
                <div id='detail'>
                    My background and creer. I live in a dream, I can safely say.
                </div>
                <Percent />
            </div>
            <div id='otherDes'>
                <div>
                    I'am a student at Daeyang university with dreams to achieve a lot
                    in technology, led by passion and hardwork.
                </div>
                <Logos />
                <Programs />
            </div>
        </div>
    )
}

const Percent = () => {
    return (
        <div id='percent'>
            <div id='python'>
                <div id='logo'>
                    <FontAwesomeIcon icon={faPython}></FontAwesomeIcon>
                </div>
                <div id='lang'>
                    <div id='langName'>Python</div>
                    <div id='progressContainer'>
                        <div id='progress'></div>
                    </div>
                </div>
            </div>

            <div id='python'>
                <div id='logo'>
                    <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                </div>
                <div id='lang'>
                    <div id='langName'>React</div>
                    <div id='progressContainer'>
                        <div id='progress'></div>
                    </div>
                </div>
            </div>

            <div id='python'>
                <div id='logo'>
                    <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                </div>
                <div id='lang'>
                    <div id='langName'>Node js</div>
                    <div id='progressContainer'>
                        <div id='progress'></div>
                    </div>
                </div>
            </div>

            <div id='python'>
                <div id='logo'>
                    <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                </div>
                <div id='lang'>
                    <div id='langName'>JavaScript</div>
                    <div id='progressContainer'>
                        <div id='progress'></div>
                    </div>
                </div>
            </div>

            <div id='python'>
                <div id='logo'>
                    <FontAwesomeIcon icon={faFlutter}></FontAwesomeIcon>
                </div>
                <div id='lang'>
                    <div id='langName'>Flutter</div>
                    <div id='progressContainer'>
                        <div id='progress'></div>
                    </div>
                </div>
            </div>

            <div id='python'>
                <div id='logo'>
                    <FontAwesomeIcon icon={faDartLang}></FontAwesomeIcon>
                </div>
                <div id='lang'>
                    <div id='langName'>Dart</div>
                    <div id='progressContainer'>
                        <div id='progress'></div>
                    </div>
                </div>
            </div>

            <div id='python'>
                <div id='logo'>
                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                </div>
                <div id='lang'>
                    <div id='langName'>mysql</div>
                    <div id='progressContainer'>
                        <div id='progress'></div>
                    </div>
                </div>
            </div>

            <div id='python'>
                <div id='logo'>
                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                </div>
                <div id='lang'>
                    <div id='langName'>MongoDB</div>
                    <div id='progressContainer'>
                        <div id='progress'></div>
                    </div>
                </div>
            </div>

            <div id='python'>
                <div id='logo'>
                    <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                </div>
                <div id='lang'>
                    <div id='langName'>Firebase</div>
                    <div id='progressContainer'>
                        <div id='progress'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Programs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [msg, setMsg] = useState("");
    const [msg2, setMsg2] = useState("");
    const closeDialog = () => setIsOpen(false);

    const open = () => {
        setIsOpen(true);
        setMsg("Notice!");
        setMsg2("It's still under development");
    }

    return (
        <div id='programs'>
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
            <div id='SchoolHub'>
                <div id='img'>
                    <img src='./Pics/uhbPic.png' id='img'></img>
                </div>
                <div id='des'>
                    SchoolHub is a web app that allows student to share school resources and make school accessible to everyone
                </div>
                <div id='butts'>
                    <button id='code' onClick={open}>
                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                    </button>
                    <button id='open'>
                        <a href='#uhb'>View</a>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <div id='SchoolHub'>
                <div id='img'>
                    <img src='./Pics/school.png' id='img'></img>
                </div>
                <div id='des'>
                    SchoolHub is a web app that allows student to share school resources and make school accessible to everyone
                </div>
                <div id='butts'>
                    <button id='code' onClick={open}>
                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                    </button>
                    <button id='open'>
                        <a href='#schoolHub'>View</a>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

            <div id='SchoolHub'>
                <div id='img'>
                    <img src='./Pics/music.png' id='img'></img>
                </div>
                <div id='des'>
                    My music app is an app for playing local music
                </div>
                <div id='butts'>
                    <button id='code' onClick={open}>
                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                    </button>
                    <button id='open'>
                        <a href='#MusicPlayerCard'>View</a>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>


        </div>
    )
}

const Logos = () => {
    return (
        <div id='Logos'>
            <img id='bases' src='./Pics/mongo.png'></img>
            <img id='bases' src='./Pics/firebase.png'></img>
            <img id='bases' src='./Pics/mysql.png'></img>
            <img id='bases' src='./Pics/postgres.png'></img>
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

export default Skills