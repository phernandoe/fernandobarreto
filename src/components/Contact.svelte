<script>
  export let name;
  export let link;
</script>

<style>
  a {
    text-decoration: none;
    cursor: pointer;
  }
</style>

<li><a target="_blank" href={link}>{name}</a></li>