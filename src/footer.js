import './css/footer.css';
import './css/body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera} from '@fortawesome/free-solid-svg-icons';
import {fa42Group} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div id="footer">
            <div id='inside'>
                <div id='bigName'>
                    Philimon Katambo
                </div>
                <div id='rights'>
                    <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                    <div id='right'>Philimon-Katambo.Reserved rights</div>
                </div>
            </div>
        </div>
    )
}

export default Footer