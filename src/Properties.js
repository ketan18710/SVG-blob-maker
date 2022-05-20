import React from 'react';
export function Properties(props) {
	const {
		properties,
		svgStyle,
		setProperty,
		parseFloat,
		vertixCountFactor,
		setVertixCountFactor,
		setStyleAttr,
		svgPathRef,
		generateBlob
	} = props;
	return (
		<div className="properties">
			<h2>Edit Style</h2>
			<fieldset>
				<label htmlFor="fillColor">
					Fill color <span>{svgStyle.fill}</span>
				</label>
				<input
					name="fillColor"
					type="color"
					value={svgStyle.fill}
					onChange={e => setStyleAttr('fill', e.target.value)}
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="strokeColor">
					Border color <span>{svgStyle.stroke}</span>
				</label>
				<input
					name="strokeColor"
					type="color"
					value={svgStyle.stroke}
					onChange={e => setStyleAttr('stroke', e.target.value)}
				/>
			</fieldset>
			<h2>Generate new Blob</h2>
			<fieldset>
				<label htmlFor="radiusCountFactor">
					Radius Count Factor <span>{properties.radius}</span>
				</label>
				<input
					type="range"
					value={properties.radius}
					onChange={e => setProperty('radius', parseFloat(e.target.value))}
					min={50}
					max={225}
					step={25}
					name="radiusCountFactor"
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="vertixCountFactor">
					Vertix Count Factor <span>{properties.vertixCountFactor}</span>
				</label>
				<input
					type="range"
					value={properties.vertixCountFactor}
					onChange={e => setProperty('vertixCountFactor', parseFloat(e.target.value))}
					min={0.05}
					max={2}
					step={0.05}
					name="vertixCountFactor"
				/>
			</fieldset>
			<button
				onClick={() => {
					if (!svgPathRef.current) {
						return;
					}

					generateBlob();
				}}
			>
				Generate Curvy Shape
			</button>
		</div>
	);
}
