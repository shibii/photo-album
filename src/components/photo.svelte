<script context="module">
  let iobserver;
  iobserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.srcset = entry.target.dataset.srcset;
        delete entry.target.dataset.srcset;
        entry.target.onload = () => {
          entry.target.classList.add("loaded");
        };
        iobserver.unobserve(entry.target);
      }
    });
  });
</script>

<script>
  import { onDestroy, onMount } from "svelte";
  import { src, srcset } from "../util/util";

  export let photo;
  export let alt;
  export let sizes = "100vw";
  let iotarget;

  $: {
    if (iotarget) {
      delete iotarget.srcset;
      iotarget.classList.remove("loaded");
      iotarget.dataset.srcset = srcset(photo);
      iobserver.observe(iotarget);
    }
  }

  onMount(() => {
    iobserver.observe(iotarget);
  });

  onDestroy(() => {
    iobserver.unobserve(iotarget);
  });
</script>

<style>
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: blur(3px);
  }
  :global(img.loaded) {
    filter: none;
    transition: filter 500ms linear;
  }
</style>

{#if iotarget && iotarget.classList.contains('loaded')}
  <img src={src(photo)} {alt} bind:this={iotarget} />
{:else}
  <img
    src={src(photo)}
    data-srcset={srcset(photo)}
    {alt}
    {sizes}
    bind:this={iotarget} />
{/if}
