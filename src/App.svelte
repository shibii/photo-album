<script>
  import "./global.css";
  import photos from "./stores/assets.json";
  import { overlay } from "./stores/overlay";
  import Gallery from "./components/gallery.svelte";
  import { onMount } from "svelte";
  import Photo from "./components/photo.svelte";
  import Overlay from "./components/overlay.svelte";
  import About from "./components/about.svelte";

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
    height: 100%;
    width: 100%;
    display: flex;
    cursor: pointer;
    padding: 0 0.5em;
  }
</style>

<Overlay />
<About />

<div class="layout">
  <div class="gallery">
    <Gallery bind:selected />
  </div>
  <div class="photo" on:click={() => overlay.set(selected)}>
    <Photo photo={selected} sizes="75vw" alt="generic" />
  </div>
</div>
