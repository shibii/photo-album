<script>
  import './global.css'
  import Overlay from './components/overlay.svelte';
  import photos from './stores/assets.json';
  import {overlay} from './stores/overlay'
  import {src, srcset} from './util/util'
</script>

<Overlay/>

{#each photos as photo (photo)}
  <img on:click={() => {overlay.set(photo)}} alt="generic photograph" src={src(photo)}
  srcset={srcset(photo)} />
{/each}