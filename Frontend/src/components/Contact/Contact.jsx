import React from 'react'
import './Contact.css'


const Contact = () => {
// Von hier bis.............
    const [result, setResult] = React.useState("");

    //Der APIKEY wird in einer anderen Datei gespeichert, auf welche wir hier zugreifen um unsere Daten zu schützen.
    const apikey =  import.meta.env.VITE_API_KEY;

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Deine Nachricht wird gesendet......");
        const formData = new FormData(event.target);

        formData.append("access_key", apikey );

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Deine Nachricht wurde erfolgreich versendet");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
// ........hier ist der Code von W3Forms übernommen.

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Du hast einen schönen Platz gefunden?</h3>
                <p>Dann senden Ihn uns doch gerne. Wir prüfen Ihn, geben dir dann Rückmeldung und nehmen ihn anschließend mit in unsere Sammlung auf.</p>

            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Dein Name:</label>
                    <input type="text" name='name' required />
                    <label>Deine E-Mail Adresse:</label>
                    <input type="mail" name='Mail' required />
                    <label>Deine Nachricht:</label>
                    <textarea name="message" rows="6" required></textarea>
                    <button type='submit' className='btn'>Senden</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
