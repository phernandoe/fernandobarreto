<script>
  export let title;
  export let desc;
  export let link;
</script>

<style>
  .project {
    display: grid;
    grid-template-columns: 1fr 4fr;
    --padding: 0.5em;
    position: relative;
    margin-top: 2em;
    padding-left: var(--padding);
    padding-right: var(--padding);
  }

  .project::before {
    content: 'Visit';
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #171717;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #e3b029;
    opacity: 0.95;
    visibility: hidden;
  }
  .project:hover::before {
    visibility: visible;
  }

  h2 {
    font-weight: 300;
    font-size: 1.2rem;
    margin-right: 0.5em;
  }

  @media (max-width: 675px) {
	.project {
		grid-template-columns: 1fr;
  }
  
  p {
    margin-top: 0;
  }

}

</style>

<a target="_blank" href="{link}" class="project-container">
  <div class="project wrap">
    <div class="wrapper"></div>
    <h2><a target="_blank" href={link}>{title}</a></h2>
    <p>{desc}</p>
  </div>
</a>