<script context="module">
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
	<ul>
		<li>
			<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">
				home
			</a>
		</li>
		<li>
			<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">
				about
			</a>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li>
			<a rel="prefetch" aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">
				blog
			</a>
		</li>
	</ul>
</nav>

<style>
	header {
		position: relative;
	}
/* 	header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(120deg, #eaee44, #33d0ff);
		opacity: .25;
		mix-blend-mode: hard-light;
	}
 */
	header#home {
		background-image: url(/1.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		padding-top: 50%;
    background-position-y: 70%;
		margin-bottom: var(--spacer);
	}
	header :global(svg) {
		position: absolute;
		bottom: 0;
		fill: var(--bgcolor);
	}
	h1 {
		/* position: absolute; */
		/* color: var(--maincolor); */
		/* text-align: center; */
    /* text-transform: uppercase; */
		/* font-weight: 800; */
		/* letter-spacing: var(--gutterx); */
		/* text-shadow: 2px 2px 0px black; */
	}
	header#home h1 {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0;
		margin-bottom: -.5em;
	}
	h1 :global(svg) {
		fill: transparent;
		stroke: var(--txtcolor);
		width: 100%;
	}

	nav {
		background-color: var(--bgcolor);
		/* border-bottom: 1px solid rgba(255, 62, 0, 0.1); */
		font-weight: 300;
		padding: 0 1em;
		/* display: flex;
		justify-content: space-between; */
		position: sticky;
		top: 0;
	}

	ul {
		overflow-x: auto;
		white-space: nowrap;
	}
	li {
		display: inline-block;
		vertical-align: middle;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: "";
		width: calc(100% - 1em);
		height: 2px;
		background-color: var(--maincolor);
		display: block;
		bottom: 0;
	}

	a {
		text-decoration: none;
		padding: var(--gutter) var(--gutterx);
		/* display: block; */
	}

</style>