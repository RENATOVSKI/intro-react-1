import "./styles.css";
import React, { useState } from "react";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";

const images = [image1, image2, image3];

const Loading = (props) => (
	<aside>
		<div className="loading-bar">
			<label htmlFor="images-loaded">Loading images...</label>
			<progress
				id="images-loaded"
				max="100"
				value={props.calculatedWidth}
			></progress>
		</div>
	</aside>
);

const App = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [numLoaded, setNumLoaded] = useState(0);

	const handleClick = () => {
		const length = images.length - 1;

		setCurrentImage((currentImage) => {
			return currentImage < length ? currentImage + 1 : 0;
		});
	};

	const handleImageLoaded = () => {
		setNumLoaded((numLoaded) => numLoaded + 1);
	};

	return (
		<section>
			<header>
				<h1>Setup Config</h1>
				<h2>
					A porfolio project
					<br /> by W
				</h2>
			</header>
			<figure>
				{numLoaded < images.length && (
					<Loading calculatedWidth={(numLoaded / images.length) * 100} />
				)}
				<figcaption>
					{currentImage + 1} / {images.length}
				</figcaption>
				{images.map((imageUrl, index) => (
					<img
						alt=""
						key={imageUrl}
						src={imageUrl}
						onClick={handleClick}
						onLoad={handleImageLoaded}
						// style={{ opacity: currentImage === index ? 1 : 0 }}
						className={currentImage === index ? "display" : "hide"}
					/>
				))}
			</figure>
		</section>
	);
};

export default App;
