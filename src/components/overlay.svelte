<script>
  import {src, srcset} from '../util/util'
  import { overlay } from "../stores/overlay";
  $: visible = $overlay ? true : false;
</script>

<style>
  .overlay {
    background-color: #000000ee;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    visibility: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  .visible {
    visibility: visible;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
</style>

<div on:click={() => overlay.set(null)} class="overlay" class:visible>
  {#if $overlay}
    <img
      alt="generic photograph"
      src={src($overlay)}
      srcset={srcset($overlay)} />
  {/if}
</div>
