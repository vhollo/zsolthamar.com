<script context="module">
	/* import { onMount } from 'svelte' */
	import { lang } from '../stores.js'
	import { Wave2, Wordmark } from "./svg/SVGs.svelte"
</script>

<script>
	export let segment
</script>

{#if segment}
<header>
	<h1><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">{@html Wordmark}</a></h1>
</header>
{:else}
<header id="home">
	{@html Wave2}
	<h1>{@html Wordmark}</h1>
</header>
{/if}

<nav>
	<div>
		<ul>
			<li>
				<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">
					index
				</a>
			</li>
			<li>
				<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">
					<span lang="en">about</span><span lang="de">einführung</span><span lang="hu">bemutatkozás</span>
				</a>
			</li>
			<li>
				<a aria-current="{segment === 'career' ? 'page' : undefined}" href="career">
					<span lang="en">career</span><span lang="de">werdegang</span><span lang="hu">pályafutás</span>
				</a>
			</li>

			<!-- for the news link, we're using rel=prefetch so that Sapper prefetches
					the blog data when we hover over the link or tap it on a touchscreen -->
			<li>
				<a rel="prefetch" aria-current="{segment === 'news' ? 'page' : undefined}" href="news">
					<span lang="en">news</span><span lang="de">nachrichten</span><span lang="hu">hírek</span>
				</a>
			</li>
		</ul>
		<ul>
			<li><label for="lang-en" on:click="{() => $lang = 'en'}">en</label></li>
			<li>/</li>
			<li><label for="lang-de" on:click="{() => $lang = 'de'}">de</label></li>
			<li>/</li>
			<li><label for="lang-hu" on:click="{() => $lang = 'hu'}">hu</label></li>
		</ul>
	</div>
</nav>

<style>
	header {
		position: relative;
	}
	header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-image: linear-gradient(120deg, #eaee44, #33d0ff); */
    /* background-image: linear-gradient(45deg, var(--dark), transparent); */
		mix-blend-mode: darken;
		animation: pulse 20s infinite;
	}

	header {
		display: flex;
		flex-direction: column;
    justify-content: flex-end;
	}

	header#home {
		fill: var(--bgcolor);
		background-image: url(/palca-kis.png);
		background-repeat: no-repeat;
		background-size: cover;
    background-position: 50% 70%;
		height: 100vh;
	}
	header :global(svg#wave2) {
		width: 100%;
		height: auto;
		margin-bottom: -2%;
		/* position: absolute;
		bottom: 0; */
	}
	/* h1 {
		margin: 0 0 2rem 0;
	} */
	/* header#home h1 {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0;
		margin-bottom: -.75em;
	} */
	h1 {
		stroke: var(--txtcolor);
		fill: transparent;
		margin: 0;
		padding: var(--gutter2) var(--gutter);
	}
	header#home h1 {
		background-color: var(--light);
		padding: var(--gutter) var(--gutter) var(--gutter2);
	}
	nav {
		background-color: var(--toolbg);
		color: var(--tooltxt);
		/* border-bottom: 1px solid rgba(255, 62, 0, 0.1); */
		font-weight: 300;
		/* padding: 0 1em; */
		position: sticky;
		top: 0;
		z-index: 1;
	}
	nav div {
		max-width: 64em;
    margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	ul {
		overflow-x: auto;
		white-space: nowrap;
		max-width: 64em;
    /* margin-right: var(--gutter); */
	}
	li {
		display: inline-block;
		vertical-align: middle;
	}

	li a {
		padding: var(--gutter);
	}
	li label {
		padding: var(--gutter) 0;
	}
	li:last-child label {
		padding-right: var(--gutter);
	}
	li a, li label {
		position: relative;
		display: inline-block;
		text-decoration: none;
		font-weight: bolder;
	}

	[aria-current] {
	}

	[aria-current]::after {
		position: absolute;
		content: "";
		width: calc(100% - var(--gutter2));
		height: 2px;
		background-color: var(--maincolor);
		display: block;
		bottom: 0;
	}
	:global(#lang-en:checked ~ #sapper) [for='lang-en'] { color: var(--maincolor); }
	:global(#lang-de:checked ~ #sapper) [for='lang-de'] { color: var(--maincolor); }
	:global(#lang-hu:checked ~ #sapper) [for='lang-hu'] { color: var(--maincolor); }

	@keyframes pulse {
		0% {
			background-color: var(--extcolor);
		}
		50% {
			background-color: var(--maincolor);
		}
		100% {
			background-color: var(--extcolor);
		}
	}
</style>