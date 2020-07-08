<script context="module">
	import { findPost } from '../pages'

	export function preload(page) {
		return { post: findPost(page.params.slug) }
	}
</script>
<script>
	export let post
</script>
<!-- 
<svelte:head>
	<title>About</title>
</svelte:head>
 -->
{#if post.image}
<figure>
	<img src="{post.image.src}" alt="{post.image.caption}"/>
	{#if post.image.caption}
	<figcaption><span lang="en">{post.image.caption.en}</span><span lang="de">{post.image.caption.de}</span><span lang="hu">{post.image.caption.hu}</span></figcaption>
	{/if}
</figure>
{/if}
{@html post.html}