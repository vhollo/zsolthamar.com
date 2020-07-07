<script context="module">
  import {findPost} from '../../posts'

  export function preload(page) {
    return { post: findPost(page.params.slug) }
  }
</script>

<script>
  export let post
</script>

<svelte:head>
  <title>{post.name.en}</title>
</svelte:head>

<h1>{post.name.en}<br>{post.name.de}<br>{post.name.hu}</h1>
{#if post.thumbnail}
<figure>
	<img src="{post.thumbnail}" alt="{post.title}"/>
	{#if post.caption}
	<figcaption></figcaption>
	{/if}
</figure>
{/if}
{@html post.html}
