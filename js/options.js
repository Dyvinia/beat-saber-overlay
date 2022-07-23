const query = new URLSearchParams(location.search);

if (query.has('scale')){
	const scale = query.get('scale')
	console.log("Scale: " + scale);
	document.documentElement.style.setProperty('zoom', scale);
}
else console.log("Scale: " + 1);

if (query.has('top')){
	var link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("href", `./modifiers/top.css`);
	document.head.appendChild(link);
}

if (query.has('shift')){
	var shift = query.get("shift") || "1";
	shift = parseFloat(shift) + 4;
	console.log("Shifting by: " + shift);
	document.getElementById("difficulty").style["margin-bottom"] = shift + "px";
}

if (query.has('rounding')){
	const rounding = query.get('rounding')
	document.getElementById("cover").style["border-radius"] = rounding + "px";
}

if (query.has('black')){
	document.body.style.backgroundColor = 'black';
}

if (query.has('font')){
	const fontName = query.get('font');
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = `https://fonts.googleapis.com/css?family=${fontName}:400,600,700,800`;
	document.head.appendChild(link);
	document.body.style.fontFamily = fontName;
}

if (query.has('italics')){
	document.body.style.fontStyle = 'italic';
}