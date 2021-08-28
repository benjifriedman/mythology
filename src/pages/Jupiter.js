import React from 'react';
import { Link } from 'react-router-dom';

const Jupiter = () => {
	return (
		<>
		<p><Link to="/">Home</Link></p>
		<h1>Jupiter</h1>

		<img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg" style={{"width":"200px","margin-top":"10px"}}/>

		<p className="godLink"><a href="https://en.wikipedia.org/wiki/Indra" target="_blank">Indra - Hindu</a></p>
		<p className="godDescription">The king of Svarga (Heaven) and the Devas (gods). He is associated with lightning, thunder, storms, rains, river flows and war.</p>


		<p className="godLink"><a href="https://en.wikipedia.org/wiki/Perkūnas" target="_blank">Perkūnas - Baltic</a></p>
		<p className="godDescription">God of sky, thunder, lightning, storms, rain, fire, war, law, order, fertility, mountains, and oak trees.</p>

		<p className="godLink"><a href="https://en.wikipedia.org/wiki/Perun" target="_blank">Perun - Slavic</a></p>
		<p className="godDescription">The highest god of the pantheon and the god of sky, thunder, lightning, storms, rain, law, war, fertility and oak trees. His other attributes were fire, mountains, wind, iris, eagle, firmament, horses and carts, weapons (hammer, axe, and arrow), and war.</p>



		<p className="godLink"><a href="https://en.wikipedia.org/wiki/Thor" target="_blank">Thor - Germanic</a></p>
		<p className="godDescription">God associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of mankind and also hallowing and fertility.</p>


		<p className="godLink"><a href="https://en.wikipedia.org/wiki/Zeus" target="_blank">Zeus - Greek</a></p>
		<p className="godDescription">The sky and thunder god in ancient Greek religion, who rules as king of the gods of Mount Olympus.</p>


		<hr/>
		<p className="godLink"><a href="https://en.wikipedia.org/wiki/Category:Paintings_of_Jupiter_(mythology)" target="_blank">Classical / Western paintings of Jupiter</a></p>
		<p className="godLink"><a href="https://en.wikipedia.org/wiki/Category:Sculptures_of_Jupiter_(mythology)" target="_blank">Classical / Western sculptures of Jupiter</a></p>


		<hr/>
		<p>Common associations:</p>
		<p>Day: Thursday</p>
		<p>Color: Purple</p>
		</>
		);
}

export default Jupiter;