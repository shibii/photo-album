<script>
  import { photos } from "../stores/photos";
  import { photoroll } from "../stores/photoroll";
  import Tag from "./tag.svelte";

  const tags = photos.tags;
  const months = photos.months;
</script>

<style>
  h5 {
    margin-bottom: 0.1em;
    margin-top: 1em;
  }
  .tag {
    margin-right: 2px;
  }
</style>

<h5>browse photos by tag:</h5>
{#each tags as tag (tag)}
  <span class="tag">
    <Tag
      tag={tag.tag}
      count={tag.count}
      setPhotoroll={() => photoroll.set(photos.byTag(tag.tag))} />
  </span>
{/each}

<h5>browse photos by month:</h5>
{#each months as month (month)}
  <span class="tag">
    <Tag
      tag={month.month}
      count={month.count}
      setPhotoroll={() => photoroll.set(photos.byMonth(month.month))} />
  </span>
{/each}
