<script>
  export let title;
  export let desc;
  export let link;
</script>

<style>

  .project {
    --padding: 0.5em;
    display: grid;
    position: relative;
    grid-template-columns: 1fr 4fr;
    margin-top: 2em;
    padding-left: var(--padding);
    padding-right: var(--padding);
  }

  h2 {
    font-weight: 300;
    margin-right: 0.5em;
  }

</style>

<div class="project wrap">
  <div class="wrapper"></div>
  <h2><a target="_blank" href={link}>{title}</a></h2>
  <p>{desc}</p>
</div>