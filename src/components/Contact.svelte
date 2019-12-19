<script>
  export let name;
  export let link;
</script>

<style>
  a:hover {
    color: #e3b029;
    cursor: pointer;
  }
</style>

<li><a target="_blank" href={link}>{name}</a></li>