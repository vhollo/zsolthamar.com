<script context="module">
	import { lang } from '../stores.js'
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
	<figcaption><span lang="{$lang}">{post.image.caption[$lang]}</span></figcaption>
	{/if}
</figure>
{/if}
<div lang="{$lang}">{@html post.content[$lang]}</div>
<!-- <div lang="en">{@html post.content.en}</div><div lang="de">{@html post.content.de}</div><div lang="hu">{@html post.content.hu}</div> -->