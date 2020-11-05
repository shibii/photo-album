<script>
  import { overlay } from "../stores/overlay";
  import Photo from "./photo.svelte";

  export let photos;
  let viewportWidth;
  let imgWidth;
  //
  $: sizes = `${Math.floor((imgWidth / viewportWidth) * 100)}vw`;

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
  .photo {
    cursor: pointer;
  }
  .photo + .photo {
    margin-top: 1em;
  }
</style>

<svelte:window bind:innerWidth={viewportWidth} />

<div class="group">
  {#each photos as photo, i (photo.img)}
    <!-- first photos width is bound to variable to calculate sizes hint -->
    {#if i === 1}
      <div
        bind:offsetWidth={imgWidth}
        class="photo"
        on:click={() => setOverlay(photo)}>
        <Photo {photo} {sizes} alt="generic" />
      </div>
    {:else}
      <div
        bind:offsetWidth={imgWidth}
        class="photo"
        on:click={() => setOverlay(photo)}>
        <Photo {photo} {sizes} alt="generic" />
      </div>
    {/if}
  {/each}
</div>
