import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Colorbar from '../components/Colorbar';
import Confirm from '../components/Confirm';

const Contact = () => {
	const [toSend, setToSend] = useState({
		from_object: '',
		from_name: '',
		from_message: '',
		from_email: '',
	});

    const contactForm = document.querySelector('.contact__form');

    const [confirmToggle, setConfirmToggle] = useState(true);

    const confirmDisplay = () => {
        if (confirmToggle === true ) {
            setTimeout(() => {
                setConfirmToggle(!confirmToggle)
                contactForm.classList.remove('active__opacity');
            }, 3500);
            return <Confirm />
        } else {
            return null
        }
    }

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	const form = useRef();
    const refName = useRef();
    const refObject = useRef();
    const refEmail = useRef();
    const refMessage = useRef();
    

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_EMAIL_KEY).then(
			(result) => {
				console.log(result.text);
                setConfirmToggle(true);
                contactForm.classList.add('active__opacity');
                refName.current.value = '';
                refObject.current.value = '';
                refEmail.current.value = '';
                refMessage.current.value = '';
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
        <section id='section__four'>
            {confirmDisplay()}
            <div className="container__contact">
                <h2>
                    <Colorbar/>
                    Contact</h2>
		        <div className='contact__form' id='contact__form'>
			        <div className='form__container'>
				        <div className='contact__data'>
					        <h5>davailleleroy.matisse@gmail.com</h5>
					        <p>07 83 89 62 08</p>
				        </div>
				        <form ref={form} onSubmit={sendEmail}>
					        <div>
						        <input
							        type='text'
							        aria-label='Nom'
							        name='from_name'
							        placeholder='Votre Nom'
							        value={toSend.name}
							        onChange={handleChange}
							        autoComplete='off'
                                    ref={refName}
                                    required
						        />

						        <input
							        type='text'
							        aria-label='Objet du contact'
							        name='from_object'
							        placeholder='Objet du contact'
							        value={toSend.object}
							        onChange={handleChange}
							        autoComplete='off'
                                    ref={refObject}
                                    required
						        />
					        </div>

					        <input
						        className='input__email'
						        type='email'
						        name='from_email'
						        aria-label='Email'
						        placeholder='Votre Email'
						        value={toSend.email}
						        onChange={handleChange}
						        autoComplete='off'
                                ref={refEmail}
                                required
					        />

					        <textarea
						        rows='8'
						        cols='20'
						        type='text'
						        name='from_message'
						        aria-label='Message'
						        placeholder='Votre message'
						        value={toSend.message}
						        onChange={handleChange}
						        autoComplete='off'
                                ref={refMessage}
                                required
					        />

					        <input className='input__submit' type='submit' value='Envoyer'/>
				        </form>
			        </div>
		        </div>
            </div>
        </section>
	);
};

export default Contact;