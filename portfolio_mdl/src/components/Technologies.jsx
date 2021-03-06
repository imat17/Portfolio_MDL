import React from 'react';
import Colorbar from './Colorbar';

const Technologies = () => {
    return (
        <div className='technologies'>
            <div className='technologies__text'>
				    <h2>
                        <Colorbar />
					    Technologies
				    </h2>
				    <p>Lors de mon aventure dans le développement web, j'ai eu l'occasion de <br/>
                    travailler avec diverses technologies. Du Back-End au Front-End.</p>
		    </div>
            <ul className="technologies__list">
            <li>
                    <div>
                        <h4>Front-End</h4>
                        <p>React / React Native<br/>Css / Sass<br/>Material.ui / Tailwind</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Back-End</h4>
                        <p>Node.js / Express<br/>Sql<br/>MongoDb</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h4>Others</h4>
                        <p>SEO<br/>Git / GitHub<br/>Accessibilité<br />Anglais</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Technologies;