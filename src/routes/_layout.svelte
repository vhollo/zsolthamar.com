<script context = "module">
	import { onMount } from 'svelte'
	import { lang } from '../stores.js'
	import Nav from "../components/Nav.svelte"
	import Stylesheet from "../components/Stylesheet.svelte"
</script>

<script>
	export let segment
	export let mounted = false
	onMount(() => {
		mounted = true
	});
	$: {
		if (mounted) {
			document.querySelector('html').lang = $lang
			document.querySelector('#lang-' + $lang).checked = true
		}
	}
</script>

<svelte:head>
	{#if $lang == 'en'}
	<meta property="og:locale" content="en_US" />
	{/if}
	{#if $lang == 'de'}
	<meta property="og:locale" content="de_DE" />
	{/if}
	{#if $lang == 'hu'}
	<meta property="og:locale" content="hu_HU" />
	{/if}
</svelte:head>

<Nav {segment} />

<main>
	<slot />
</main>

<Stylesheet />