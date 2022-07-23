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

if (query.has('black')){
	document.body.style.backgroundColor = 'black';
}