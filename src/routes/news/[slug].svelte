<script context="module">
  import {findPost} from '../../news'
	import { lang } from '../../stores.js';

  export function preload(page) {
    return { post: findPost(page.params.slug) }
  }
</script>

<script>
  export let post
</script>

<svelte:head>
	<title>{post.title[$lang]}</title>
	<base target="_blank">
</svelte:head>

<h1><span lang="en">{post.title.en}</span><span lang="de">{post.title.de}</span><span lang="hu">{post.title.hu}</span></h1>
{#if post.eventdate}
<date lang="en">{post.eventdate.en}</date>
<date lang="de">{post.eventdate.de}</date>
<date lang="hu">{post.eventdate.hu}</date>
{/if}
{#if post.image && post.image.src}
<figure>
	<img src="{post.image.src}" alt="{post.title}"/>
	{#if post.image.caption}
	<figcaption><span lang="en">{post.image.caption.en}</span><span lang="de">{post.image.caption.de}</span><span lang="hu">{post.image.caption.hu}</span></figcaption>
	{/if}
</figure>
{/if}

<div lang="en">{@html post.content.en}</div>
<div lang="de">{@html post.content.de}</div>
<div lang="hu">{@html post.content.hu}</div>

<style>
	date {
		text-align: right;
	}
</style>