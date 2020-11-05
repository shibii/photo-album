<script>
  import { photos } from "../stores/photos";
  import Photo from "./photo.svelte";
  import { iobserve } from "@shibiii/svelte-iobserve";
  import Spinner from "./spinner.svelte";

  export let selected;
  let all = photos.all();
  let loaded = 10;
  let allLoaded = false;
  $: gallery = all.slice(0, loaded);

  const more = (batchSize) => {
    if (!allLoaded) {
      loaded += batchSize;
      if (loaded >= all.length) {
        loaded = all.length;
        allLoaded = true;
      }
    }
  };
</script>

<style>
  .gallery {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    line-height: 0;
    overflow-y: auto;
    padding: 0 0.5em;
  }
  .photo {
    cursor: pointer;
    width: 100%;
  }
  .photo + .photo {
    padding-top: 0.5em;
  }
  .observer {
    width: 100%;
    flex-grow: 1;
    height: auto;
    display: block;
  }
  .observer.allLoaded {
    display: none;
  }
  #scrollbar::-webkit-scrollbar-track {
    background-color: var(--theme1);
  }

  #scrollbar::-webkit-scrollbar {
    width: 8px;
    background-color: var(--theme2);
  }

  #scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--theme3);
  }
</style>

<div id="scrollbar" class="gallery">
  {#each gallery as photo (photo)}
    <div
      class="photo"
      on:click={() => {
        selected = photo;
      }}>
      <Photo {photo} sizes="25vw" alt="generic" />
    </div>
  {/each}

  <div
    class="observer"
    class:allLoaded
    on:intersection={() => more(3)}
    use:iobserve={{ delay: 2500, cooldown: 500 }}>
    <Spinner />
  </div>
</div>
