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