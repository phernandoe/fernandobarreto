<script>
  export let title;
  export let skills;
</script>

<style>

  ul {
    position: relative;
    padding: 0.5em;
  }

  li {
    line-height: 1.75;
  }

  h2 {
    margin: 0;
	}

</style>

<div>
  <h2>{title}</h2>
  <ul class="wrap">
    <div class="wrapper"></div>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</div>