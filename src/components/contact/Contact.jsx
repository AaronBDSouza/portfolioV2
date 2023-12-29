import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';
import {Description} from "@material-ui/icons";
import PdfViewer from "../pdfViewer/PdfViewer";

export default function Contact() {
    const [message, setMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [displayPDF, setDisplayPDF] = useState(false);
    const form = useRef();
    const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const EMAIL_PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
    
    const sendEmail = () => {
        emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form.current, EMAIL_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              form.current.reset();
          }, (error) => {
            setMessage(false);
            console.log(error.text);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(false);
        setErrorMessage(false);
        if(form.current.sender_name.value !== "" && form.current.sender_email.value !== "" && form.current.message.value !== "") {
            sendEmail();
            setMessage(true);
        }
        else{
            setErrorMessage(true);
        }
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/handshake.png" alt="" />
            </div>
            <div className="middle">
                <h2>Contact me.</h2>
                <form  ref={form} onSubmit={handleSubmit}>
                    <input type="text" name="sender_name" placeholder="    Your Name"/>
                    <input type="text" name="sender_email" placeholder="    Your Email"/>
                    <textarea placeholder="  Message" name="message"></textarea>
                    <button type="submit">Send</button>

                    { message && <span>Your message was sent. :~)</span> }
                    { errorMessage && <span className="errorMessage">Please enter data in all fields!</span> }
                </form>
            </div>
            <div className="right">
                <div className="cvDivBorder">
                    <div className="cvDiv">
                        <div className="cvTitle">My C.V</div>
                        <Description className="icon" onClick={() => {setDisplayPDF(true)}}             />
                        <div className="linksDiv">
                            <span className="viewPdfBtn" onClick={() => {setDisplayPDF(true)}}>View</span>
                            <a href="assets/cv/CV-AaronBDSouza.pdf" download="CV - Aaron B D Souza">Download</a>
                        </div>
                    </div>
                </div>
            </div>
            {displayPDF && 
                <div className={displayPDF ? "pdfViewerDiv" : "pdfViewerDiv Close"}>
                    <PdfViewer loadPdf={displayPDF} closePdf={() => setDisplayPDF(false)}/>
                </div> 
            }
        </div>
    )
}
