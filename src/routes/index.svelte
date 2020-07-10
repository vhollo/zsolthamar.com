<script context="module">
	import { findPost } from '../index'

	export function preload() {
		return { post: findPost('landing') }
	}
</script>
<script>
	export let post
</script>

<!-- <svelte:head>
	<title>{post.slug}</title>
</svelte:head> -->

<div lang="en">{@html post.content.en}</div>
<div lang="de">{@html post.content.de}</div>
<div lang="hu">{@html post.content.hu}</div>

{#if post.image}
<figure>
	<img src="{post.image.src}" alt="{post.title}"/>
	{#if post.image.caption}
	<figcaption><em><span lang="en">{post.image.caption.en}</span><span lang="de">{post.image.caption.de}</span><span lang="hu">{post.image.caption.hu}</span></em></figcaption>
	{/if}
</figure>
{/if}

<style>
	figcaption {
		text-align: right;

	}
</style>