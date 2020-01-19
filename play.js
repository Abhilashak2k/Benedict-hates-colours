
	const inputs = document.querySelectorAll('.controls input');
	function handleUpdate() {
		const suffix = this.dataset.sizing || '';
		// to select the extension to add because a number itself is not a unit to change the blur. I've used data-sizing as a user defined attribute which will be retrived by this.data.sizing.
		//also since hex code is enough for the colour, no need t append anything there, But it should also not be null.
		document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	}
	inputs.forEach(i => i.addEventListener('change', handleUpdate));
	inputs.forEach(i => i.addEventListener('mousemove', handleUpdate));
