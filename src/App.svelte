<script>
  import "./global.css";
  import { photoroll } from "./stores/photoroll";
  import About from "./components/about.svelte";
  import PhotoColumns from "./components/photoColumns.svelte";
  import Overlay from "./components/overlay.svelte";
  import GalleryNav from "./components/galleryNav.svelte";
  import { onMount } from "svelte";
  import { photos } from "./stores/photos";

  onMount(() => photoroll.set(photos.recent));
</script>

<style>
  .header {
    margin: 2em 0;
  }
  .layout {
    margin: 2em 10%;
  }
  .gallery-nav {
    margin: 1em 0;
  }
  .photo-columns {
    margin-top: 2em;
  }
</style>

<About />
<Overlay />

<div class="layout">
  <div class="header">
    <h1>Photo album by Seppo Kilpeläinen</h1>
  </div>
  <div class="gallery-nav">
    <GalleryNav />
  </div>
  <div class="photo-columns">
    <PhotoColumns photos={$photoroll} />
  </div>
</div>
