<script>
  import {posts} from '../../news'
</script>
<!-- 
<svelte:head>
  <title>Josh's Weblog</title>
</svelte:head>
 -->
<h2>Zsolt's Weblog</h2>

{#each posts as post}
  <article>
    <a href={`/news/${post.slug}`}>
      <h3>{post.title.en}</h3>
      <p>{post.summary}</p>
    </a>
  </article>
{/each}
