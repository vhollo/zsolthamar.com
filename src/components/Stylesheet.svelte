<style global>
	@import "../assets/global.css";

	:root {
		font-size: clamp(75%, 78% + .5vw, 115%);
		line-height: 1.75;
		--orange: #ff3d00;
		--green: #c0ff55;
		--light: #e2e8f0;
		--light25: #e2e8f03f;
		--dark: #111;
		--dark25: #1111113f;
		--darkgray: #0f2537;
		--midtone: #1f4667;

		--toolsize: 5rem;
		--headsize: 2rem;
		--midsize: 1.5rem;
		--smallsize: .75rem;
		
		--gutter: 1rem;
		--gutter-: -1rem;
		--gutter2: 2rem;
		--gutter2-: -2rem;
		--gutterx: calc(var(--gutter) / 2);
		--gutterx-: calc(var(--gutter) / -2);
		--guttery: calc(var(--gutter) / 4);
		--gutterz: calc(var(--gutter) / 8);
		--spacer: calc(4 * var(--gutter));
	}
	html {
		--bgcolor: var(--light);
		--txtcolor: var(--dark);
		--txt25: var(--dark25);
		--maincolor: var(--orange);
		--extcolor: var(--green);
		--toolbg: var(--midtone);
		--tooltxt: var(--light);
		--infobg: var(--dark);
		--infotxt: var(--txtcolor);
		--navbg: #0f2537f0;
	}
	html {
		height: -webkit-fill-available;
	}

	body {
		position: relative;
		background-color: var(--bgcolor);
		color: var(--txtcolor);
	}

	#sapper {
	}

	main {
		max-width: 64em;
		margin: 0 auto;
		padding: var(--gutter);
	}
	h1, h2, h3, h4, h5, h6 {
		font-family: system-ui, sans-serif;
	}
	h1 {
		font-size: 3rem;
		margin: 2rem 0;
	}
	h2 {
		font-size: 2.5rem;
		margin: 1.75rem 0;
	}
	h3 {
		font-size: 2rem;
		margin: 1.5rem 0;
	}

	h4 {
		font-size: 1.75rem;
		margin: 1.25rem 0;
	}

	h5 {
		font-size: 1.5rem;
		margin: 1rem 0;
	}

	h6 {
		font-size: 1.25rem;
		margin: .75rem 0;
	}

	p {
		margin: 0 0 .75rem;
	}

	svg {
		fill: inherit;
		stroke: inherit;
		margin: 0 auto;
		max-width: 100%;
	}
	svg text {
		fill: var(--bgcolor);
		margin: 0 auto;
	}

</style>
