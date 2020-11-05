<script>
  import { photos } from "../stores/photos";
  import Tag from "./tag.svelte";

  const tags = photos.tags;
</script>

<style>
  h5 {
    margin-bottom: 0.5em;
  }
  .tag {
    margin-right: 2px;
  }
</style>

<h5>browse photos by tags:</h5>
{#each tags as tag (tag)}
  <span class="tag">
    <Tag {tag} />
  </span>
{/each}
