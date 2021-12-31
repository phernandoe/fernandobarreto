<script>

  let pics = [];

  for (let i = 1; i <= 6; i++){
    pics.push(`static/${i}.png`);
  }


</script>

<style>

  div {
    margin-top: 5em;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  img {
    box-shadow: -5px 5px 0px rgba(227, 176, 41, 1);
    width: 100%;
    position: relative;
    opacity: 0.5;
  }

  img:hover {
    opacity: 1;
    cursor: crosshair;
  }

</style>

<div>
  {#each pics as src}
    <img {src} alt='drawing'>
  {/each}
</div>