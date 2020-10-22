<script>
  import { iobserve } from "../actions/iobserve";
  import { srcsetstr, srcstr } from "../util/util";

  export let photo;
  export let sizes;
  let srcset;
  let onLoad;
  let loaded;
  $: src = srcstr(photo);
  $: onChange(photo);

  const onChange = () => {
    srcset = null;
    loaded = false;
    onLoad = null;
  };

  const onIntersect = () => {
    srcset = srcsetstr(photo);
    onLoad = () => {
      loaded = true;
    };
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
  on:load={onLoad}
  use:iobserve={{ onIntersect, update: photo }}
  {src}
  {srcset}
  {sizes}
  alt="generic" />
