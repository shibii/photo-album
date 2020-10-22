<script>
  import { onDestroy, onMount } from "svelte";
  import { srcstr, srcsetstr } from "../util/util";

  export let photo;
  export let alt = "generic photograph";
  export let sizes = "100vw";

  let iotarget;
  let iobserver;
  let loaded = false;

  $: src = srcstr(photo);
  $: srcset = loaded ? srcsetstr(photo) : null;

  iobserver = new IntersectionObserver(() => {
    iotarget.onload = () => {
      loaded = true;
    };
    iobserver.unobserve(iotarget);
  });

  $: onChange(photo);
  const onChange = () => {
    if (iotarget) {
      loaded = false;
      delete iotarget.onload;
      srcset = null;
      iobserver.unobserve(iotarget);
      iobserver.observe(iotarget);
    }
  };

  onMount(onChange);

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
    transition: filter 250ms linear;
  }
</style>

<img class:loaded {src} {srcset} {alt} {sizes} bind:this={iotarget} />
