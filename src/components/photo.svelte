<script context="module">
  let iobserver;
  iobserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.srcset = entry.target.dataset.srcset;
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
  let iotarget;

  const observe = () => {
    iobserver.observe(iotarget);
  };
  onDestroy(() => {
    iobserver.unobserve(iotarget);
  });
</script>

<style>
  img {
    width: 100%;
    height: auto;
    filter: blur(2px);
  }
  :global(img.loaded) {
    filter: none;
    transition: filter 1000ms;
  }
</style>

<img
  {alt}
  src={src(photo)}
  data-srcset={srcset(photo)}
  bind:this={iotarget}
  on:load|once={observe} />
