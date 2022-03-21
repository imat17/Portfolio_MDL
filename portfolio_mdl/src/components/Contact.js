import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ modalToggle, setModalToggle }) => {
	const [toSend, setToSend] = useState({
		from_object: '',
		from_name: '',
		from_message: '',
		from_email: '',
	});

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_rfv72ia', 'template_dvknlot', form.current, 'UeP17Ua2iOy_g7jKY').then(
			(result) => {
				console.log(result.text);
				setModalToggle(!modalToggle);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className='contact__form' id='contact__form'>
			<div>
				<button aria-label='Fermer' onClick={(e) => setModalToggle(!modalToggle)}>
					X
				</button>
				<div className='contact__data'>
					<p>davailleleroy.matisse@gmail.com</p>
					<p>07 83 89 62 08</p>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					{/* <div> */}
					<input
						type='text'
						aria-label='Nom'
						name='from_name'
						placeholder='Votre Nom'
						value={toSend.name}
						onChange={handleChange}
						autocomplete='off'
					/>

					<input
						type='text'
						aria-label='Objet du contact'
						name='from_object'
						placeholder='Objet du contact'
						value={toSend.object}
						onChange={handleChange}
						autocomplete='off'
					/>
					{/* </div> */}

					<input
						type='email'
						name='from_email'
						aria-label='Email'
						placeholder='Votre Email'
						value={toSend.email}
						onChange={handleChange}
						autocomplete='off'
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
						autocomplete='off'
					/>

					<input className='input__submit' type='submit' value='Envoyer' />
				</form>
			</div>
		</div>
	);
};

export default Contact;
