<script context="module">
	import { findPost } from '../about'

	export function preload() {
		return { post: findPost('about') }
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
<div lang="en">{@html post.content.en}</div><div lang="de">{@html post.content.de}</div><div lang="hu">{@html post.content.hu}</div>