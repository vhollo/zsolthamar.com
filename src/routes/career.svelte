<script context="module">
	import { findPost } from '../about'

	export function preload() {
		return { post: findPost('career') }
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
<div lang="en">{post.intro.en}</div><div lang="de">{post.intro.de}</div><div lang="hu">{post.intro.hu}</div>