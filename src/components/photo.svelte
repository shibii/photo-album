<script>
  import { iobserve } from "@shibiii/svelte-iobserve";
  import { srcsetstr, srcstr } from "../util/util";
  import { conditionalOnLoad } from "../actions/conditionalOnLoad";

  export let alt;
  export let photo;
  export let sizes;
  let srcset;
  let loaded;
  $: src = srcstr(photo);
  $: photo, onChange();

  const onChange = () => {
    srcset = null;
    loaded = false;
  };
</script>

<style>
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: blur(4px);
  }
  :global(img.loaded) {
    filter: none;
    transition: filter 100ms linear;
  }
</style>

<img
  class:loaded
  on:conditionalOnLoad={() => (loaded = true)}
  use:conditionalOnLoad={() => srcset}
  on:intersection={() => (srcset = srcsetstr(photo))}
  use:iobserve={{ update: photo, once: true }}
  {src}
  {srcset}
  {sizes}
  {alt} />
