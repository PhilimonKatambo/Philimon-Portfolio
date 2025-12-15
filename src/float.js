import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FloatingButton = () => {

  const openWhatsapp = (phoneNumber, msg) => {
    const msg1 = encodeURIComponent(msg);
    const url = `https://wa.me/${phoneNumber}?text=${msg1}`
    window.open(url, '_blank')
  }
  return (
    <div id='glow3'>
      <button className="floating-button" onClick={()=>openWhatsapp("+265981254727","Open WhatsApp to communicate")}>
        <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default FloatingButton