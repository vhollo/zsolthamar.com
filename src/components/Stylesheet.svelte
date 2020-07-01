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
	#sapper {
		--bgcolor: var(--darkgray);
		--txtcolor: var(--light);
		--txt25: var(--light25);
		--maincolor: var(--orange);
		--extcolor: var(--green);
		--toolbg: var(--midtone);
		--tooltxt: var(--txtcolor);
		--infobg: var(--dark);
		--infotxt: var(--txtcolor);
		--navbg: #0f2537f0;
	}

	body {
		position: relative;
	}
	html {
		height: -webkit-fill-available;
	}

	h1 {
		font-size: 3rem;
	}
	h2 {
		font-size: 2.5rem;
	}
	h3 {
		font-size: 2rem;
	}

	h4 {
		font-size: 1.75rem;
	}

	h5 {
		font-size: 1.5rem;
	}
</style>
