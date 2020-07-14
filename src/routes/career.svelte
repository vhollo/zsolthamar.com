<script context="module">
	import { findPost } from '../career'

	export function preload() {
		return { post: findPost() }
	}
</script>
<script>
	export let post
</script>

<!-- <svelte:head>
	<title>{post.slug}</title>
</svelte:head> -->

{#if post.image}
<figure>
	<img src="{post.image.src}" alt="{post.image.caption}"/>
	{#if post.image.caption}
	<figcaption><span lang="en">{post.image.caption.en}</span><span lang="de">{post.image.caption.de}</span><span lang="hu">{post.image.caption.hu}</span></figcaption>
	{/if}
</figure>
{/if}
<dl>
{#each post.cv as cv}
	<dt><date>{cv.date}{#if cv.date2}–{cv.date2}{/if}</date></dt>
	<dd lang="en">{@html cv.detail.en}</dd><dd lang="de">{@html cv.detail.de}</dd><dd lang="hu">{@html cv.detail.hu}</dd>
{/each}
</dl>

<style>
	dl {
		display: grid;
		grid-template-columns: 12ch 1fr;
		grid-gap: 0 var(--gutter);
		border-left: dotted 4px;
    margin-left: 12ch;
	}
	dt {
		position: relative;
		text-align: right;
		padding: 0 var(--gutter) var(--gutter) 0;
		margin-left: -12ch;
		width: 12ch;
	}
	dt::after {
		content: '';
		position: absolute;
		top: var(--guttery);
		right: var(--gutterx-);
		width: var(--gutter);
		height: var(--gutter);
		border-radius: var(--gutterx);
		background-color: var(--maincolor);
		margin-right: 2px;
	}
	dd {
		margin-left: -12ch;
    padding-bottom: var(--gutter);
	}
</style>