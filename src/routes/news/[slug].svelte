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

<h1><span lang="{$lang}">{post.title[$lang]}</span></h1>
{#if post.eventdate}
<date lang="{$lang}">{post.eventdate[$lang]}</date>
{/if}
{#if post.image && post.image.src}
<figure>
	<img src="{post.image.src}" alt="{post.title}"/>
	{#if post.image.caption}
	<figcaption><span lang="{$lang}">{post.image.caption[$lang]}</span></figcaption>
	{/if}
</figure>
{/if}

<div lang="{$lang}">{@html post.content[$lang]}</div>

<style>
	date {
		text-align: right;
	}
</style>