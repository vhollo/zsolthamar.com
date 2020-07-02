<script>
  import {posts} from '../../posts'
</script>
<!-- 
<svelte:head>
  <title>Josh's Weblog</title>
</svelte:head>
 -->
<h2>Zsolt's Weblog</h2>

{#each posts as post}
  <article>
    <a href={`/blog/${post.slug}`}>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
    </a>
  </article>
{/each}
