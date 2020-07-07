<script context="module">
	import { Wave1, Wave2, Wordmark } from "./svg/SVGs.svelte"
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
		fill: var(--bgcolor);
	}
	/* header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(120deg, #eaee44, #33d0ff);
    mix-blend-mode: darken;
	} */

	header#home {
		background-image: url(/palca.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		/* padding-top: 50%; */
    background-position: 50% 70%;
		/* margin-bottom: var(--spacer); */
		display: flex;
		flex-direction: column;
		height: 100vh;
    justify-content: flex-end;

	}
	header :global(svg#wave2) {
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
		background-color: var(--light);
		padding: 0 var(--gutter) var(--gutter);
		margin: 0;
	}
	nav {
		background-color: var(--toolbg);
		color: var(--tooltxt);
		/* border-bottom: 1px solid rgba(255, 62, 0, 0.1); */
		font-weight: 300;
		/* padding: 0 1em; */
		/* display: flex;
		justify-content: space-between; */
		position: sticky;
		top: 0;
	}

	ul {
		overflow-x: auto;
		white-space: nowrap;
		max-width: 64em;
    margin: 0 auto;
	}
	li {
		display: inline-block;
		vertical-align: middle;
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

	a {
		position: relative;
		display: inline-block;
		text-decoration: none;
		padding: var(--gutter);
		/* display: block; */
	}

</style>