<script>
  import { photos } from "../stores/photos";
  import { photoroll } from "../stores/photoroll";
  import Tag from "./tag.svelte";

  const tags = photos.tags;
  const months = photos.months;
</script>

<style>
  h4 {
    margin-bottom: 0.2em;
    margin-top: 1em;
  }
  div.tag {
    display: inline-block;
    margin-right: 2px;
    margin-bottom: 1px;
  }
</style>

<h4>browse photos by tag:</h4>
{#each tags as tag (tag)}
  <div class="tag">
    <Tag
      tag={tag.tag}
      count={tag.count}
      setPhotoroll={() => photoroll.set(photos.byTag(tag.tag))} />
  </div>
{/each}

<h4>browse photos by month:</h4>
{#each months as month (month)}
  <div class="tag">
    <Tag
      tag={month.month}
      count={month.count}
      setPhotoroll={() => photoroll.set(photos.byMonth(month.month))} />
  </div>
{/each}
