<script>
  export let name;
  export let link;
</script>

<style>
  a:hover {
    color: #e3b029;
    cursor: pointer;
  }

  a:focus {
		outline: none;
		color: #e3b029;
	}

</style>

<li><a target="_blank" href={link}>{name}</a></li>