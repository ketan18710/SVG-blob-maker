import { Properties } from './Properties';
import './App.css';
import { useRef, useEffect, useState } from 'react';
import { Blob } from './helperFunctions';

function App() {
	const svgPathRef = useRef(null);
	const [svgStyle, setSvgStyle] = useState({
		border: 'none',
		fill: '#010101',
		stroke: '#010101',
		strokeWidth: 2,
		strokeDasharray: 'none'
	});
	const [properties, setProperties] = useState({
		radius: 100,
		vertixCountFactor: 0.5
	});
	const [vertixCountFactor, setVertixCountFactor] = useState(0.5);
	function generateBlob() {
		// console.log(elem);
		const b = new Blob(svgPathRef.current, properties.vertixCountFactor, properties.radius);
		b.generateCurvyShape();
	}
	useEffect(() => {
		if (svgPathRef.current) {
			generateBlob();
		}
	}, [svgPathRef]);
	const setProperty = (key, value) => {
		setProperties({ ...properties, [key]: value });
	};
	const setStyleAttr = (key, value) => {
		setSvgStyle({ ...svgStyle, [key]: value });
	};
	return (
		<div className="App">
			<div className="svgArea">
				<h1>Blob Generator</h1>
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 480 480"
					xmlns="http://www.w3.org/2000/svg"
					id="test"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					style={svgStyle}
					// style="contain: strict; stroke-width: 0px; background-color: white;"
				>
					<path ref={svgPathRef} className="path" d=""></path>
				</svg>
			</div>
			<Properties
				properties={properties}
				svgStyle={svgStyle}
				svgPathRef={svgPathRef}
				setProperty={setProperty}
				parseFloat={parseFloat}
				setStyleAttr={setStyleAttr}
				generateBlob={generateBlob}
			/>
		</div>
	);
}

export default App;
