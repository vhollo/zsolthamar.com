<script>
  import {posts} from '../../news'
</script>

<svelte:head>
	<!-- <title>Zsolt's Weblog</title> -->
	<!-- <meta name="robots" content="all" /> -->
</svelte:head>

<h2>News & Events</h2>

{#each posts as post}
  <article>
    <a href={`/news/${post.slug}`}>
      <h3><span lang="en">{post.title.en}</span><span lang="de">{post.title.de}</span><span lang="hu">{post.title.hu}</span></h3>
			<p><span lang="en">{post.summary.en}</span><span lang="de">{post.summary.de}</span><span lang="hu">{post.summary.hu}</span></p>
			<date lang="en">{post.eventdate.en}</date><date lang="de">{post.eventdate.de}</date><date lang="hu">{post.eventdate.hu}</date>
			{#if post.image && post.image.src}
			<figure>
				<img src="{post.image.src}" alt=""/>
				<figcaption><span lang="en">{post.image.caption.en}</span><span lang="de">{post.image.caption.de}</span><span lang="hu">{post.image.caption.hu}</span></figcaption>
			</figure>
			{/if}
    </a>
  </article>
{/each}
