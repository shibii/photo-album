<script>
  import { overlay } from "../stores/overlay";
  import Photo from "./photo.svelte";
  $: visible = $overlay ? true : false;
</script>

<style>
  .overlay {
    background-color: #000000da;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    visibility: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
    z-index: 1;
  }
  .visible {
    visibility: visible;
  }
</style>

<div on:click={() => overlay.set(null)} class="overlay" class:visible>
  {#if $overlay}
    <Photo sizes="100vw" photo={$overlay} />
  {/if}
</div>
