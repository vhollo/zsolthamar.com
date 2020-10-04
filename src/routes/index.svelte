<script context="module">
	import { findPost } from '../index'
	import { lang } from '../stores.js'

	export function preload() {
		return { post: findPost('landing') }
	}
</script>
<script>
	export let post
	//console.log(post)
</script>

<!-- <svelte:head>
	<title>{post.slug}</title>
</svelte:head> -->

<div lang="{$lang}">{@html post.content[$lang]}</div>

{#if post.image}
<figure>
	<img src="{post.image.src}" alt="{post.title}"/>
	{#if post.image.caption}
	<figcaption><em><span lang="{$lang}">{post.image.caption[$lang]}</span></em></figcaption>
	{/if}
</figure>

<style>
	figcaption {
		text-align: right;

	}
</style>
{/if}
