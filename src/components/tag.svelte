<script>
  import { photoroll } from "../stores/photoroll";
  import { photos } from "../stores/photos";

  export let tag;
  const setPhotoroll = () => {
    photoroll.set(photos.byTag(tag.tag));
  };
</script>

<style>
  button {
    border-radius: 3px;
    border: 1px solid;
    padding: 0.1rem 0.5em;
    font-weight: bold;
    font-size: 0.7rem;
    background-color: var(--theme1);
    color: var(--contrast0);
  }
  button:hover {
    background-color: var(--contrast0);
    color: var(--theme1);
  }
  span {
    margin-left: 0.5em;
  }
</style>

<button on:click={setPhotoroll}> {tag.tag}<span>#{tag.count}</span> </button>
