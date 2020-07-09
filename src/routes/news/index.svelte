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
      <h3><span lang="en">{post.title.en}</span><span lang="de">{post.title.de}</span><span lang="hu">{post.title.hu}</span></h3>
      <p><span lang="en">{post.summary.en}</span><span lang="de">{post.summary.de}</span><span lang="hu">{post.summary.hu}</span></p>
    </a>
  </article>
{/each}
