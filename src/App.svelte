<script>
  import "./global.css";
  import Overlay from "./components/overlay.svelte";
  import photos from "./stores/assets.json";
  import { overlay } from "./stores/overlay";
  import { src, srcset } from "./util/util";
  import Gallery from "./components/gallery.svelte";
  import { onMount } from "svelte";

  let selected;

  onMount(() => {
    selected = photos[Math.floor(Math.random() * photos.length)];
  });
</script>

<style>
  .layout {
    height: 100%;
    display: grid;
    grid-template-areas: "gallery photo";
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 100%;
  }
  .gallery {
    grid-area: gallery;
    height: 100%;
  }
  .photo {
    grid-area: photo;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  img {
    max-width: 100%;
    object-fit: contain;
    padding: 0 0.5em;
    cursor: pointer;
  }
</style>

<Overlay />

<div class="layout">
  <div class="gallery">
    <Gallery setSelected={(sel) => (selected = sel)} />
  </div>
  <div class="photo">
    <img
      on:click={() => overlay.set(selected)}
      alt="generic photograph"
      src={src(selected)}
      srcset={srcset(selected)} />
  </div>
</div>
