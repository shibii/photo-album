<script>
  import { iobserve } from "@shibiii/svelte-iobserve";
  import { srcsetstr, srcstr } from "../util/util";
  import { conditionalOnLoad } from "../actions/conditionalOnLoad";
  import { format } from "date-fns";

  export let alt;
  export let photo;
  export let sizes;
  export let overlay = false;
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
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: auto;
    /* object-position: center; */
    filter: blur(4px);
  }
  :global(img.loaded) {
    filter: none;
    transition: filter 100ms linear;
  }
  .overlay {
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    font-size: 0.75rem;
    color: #ffffff;
    font-weight: lighter;
    text-shadow: 1px 0 8px #000000, 0 1px 8px #222222, 1px 0 10px #000000,
      0 1px 10px #222222, 1px 0 12px #222222, 0 1px 12px #222222;
    padding: 0.3em;
    line-height: 1.5em;
    visibility: hidden;
  }
  .overlay.visible {
    visibility: visible;
  }
</style>

<div
  class="container"
  on:mouseenter={() => (overlay = true)}
  on:mouseleave={() => (overlay = false)}>
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
  <div class="overlay" class:visible={overlay}>
    {photo.artist}
    &bull;
    {format(photo.timestamp, 'd LLL y')}<br />{photo.camera}<br />{photo.lens}
  </div>
</div>
