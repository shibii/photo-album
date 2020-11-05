<script>
  let mouseover = false;

  const mouseenter = () => {
    mouseover = true;
  };
  const mouseleave = () => {
    mouseover = false;
  };
</script>

<style>
  .hoverable {
    background-color: #000000e5;
    box-shadow: 0 0 5px black;
    position: fixed;
    top: 0.5em;
    right: 0.5em;
    width: auto;
    max-width: 19em;
    height: auto;
    padding: 0.4em;
    border: 1px solid var(--theme2);
    border-radius: 0.5em;
    color: var(--theme3);
  }
  p + p {
    margin-top: 1em;
  }
  a:link,
  a:visited {
    color: whitesmoke;
  }
</style>

<div on:mouseenter={mouseenter} on:mouseleave={mouseleave} class="hoverable">
  {#if mouseover}
    <p>
      This photo album website was made using
      <a href="https://svelte.dev/">svelte</a>
      front-end javascript framework.
    </p>
    <p>
      Source code is available at
      <a href="https://github.com/shibii/photo-album/tree/master">github</a>.
    </p>
    <p>All presented photographs have been taken by Seppo Kilpeläinen.</p>
    <p>
      Gear and software: Canon EOS 600D camera with kit lens, edited in
      <a href="https://www.darktable.org/">darktable</a>.
    </p>
  {:else}
    <p>about</p>
  {/if}
</div>
