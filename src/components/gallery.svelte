<script>
  import { onMount } from "svelte";
  import { photos } from "../stores/photos";
  import { src, srcset } from "../util/util";

  export let setSelected;
  let iobserver;
  let iotarget;
  let gallery = [];
  let unloaded = 0;
  $: loading = unloaded !== 0;

  const more = (batchSize) => {
    if (loading) return;
    unloaded += batchSize;
    photos(batchSize).then((batch) => {
      gallery = [...gallery, ...batch];
    });
  };

  onMount(() => {
    more(10);
    iobserver = new IntersectionObserver(() => more(3), {
      threshold: 0,
      rootMargin: "0px 0px 50px",
    });
    iobserver.observe(iotarget);
  });
</script>

<style>
  .gallery {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    line-height: 0;
    overflow-y: auto;
    padding: 0 0.5em;
  }
  img {
    cursor: pointer;
    width: 100%;
  }
  img + img {
    padding-top: 0.5em;
  }
  .iotarget {
    width: 100%;
    flex-grow: 1;
    display: block;
    min-height: 100%;
    display: none;
    margin: auto;
  }
  .iotarget.visible {
    display: block;
  }

  #scrollbar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--theme0);
  }

  #scrollbar::-webkit-scrollbar {
    width: 8px;
    background-color: var(--theme1);
  }

  #scrollbar::-webkit-scrollbar-thumb {
    background-color: var(--theme2);
  }
</style>

<div id="scrollbar" class="gallery">
  {#each gallery as photo (photo)}
    <img
      on:click={() => setSelected(photo)}
      on:load={() => (unloaded -= 1)}
      alt="generic photograph"
      src={src(photo)}
      srcset={srcset(photo)} />
  {/each}
  <div class="iotarget" class:visible={!loading} bind:this={iotarget} />
</div>
