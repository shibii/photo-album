<script>
  import { overlay } from "../stores/overlay";
  import Photo from "./photo.svelte";

  export let photos;
  let viewportWidth;
  //
  $: sizes = `${Math.floor((480 / viewportWidth) * 100)}vw`;

  const setOverlay = (photo) => {
    overlay.set(photo);
  };
</script>

<style>
  .group {
    column-width: 320px;
    column-gap: 1em;
    column-fill: balance;
    line-height: 0;
  }
  .info {
    background-color: var(--contrast0);
    width: 100%;
  }
  .photo {
    cursor: pointer;
  }
  .photo + .photo {
    margin-top: 1em;
  }
</style>

<svelte:window bind:innerWidth={viewportWidth} />

<div class="group">
  {#each photos as photo (photo.img)}
    <div class="photo" on:click={() => setOverlay(photo)}>
      <Photo {photo} {sizes} alt="generic" />
    </div>
  {/each}
</div>
