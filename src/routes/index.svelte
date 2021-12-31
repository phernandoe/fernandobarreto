<script>
	import '../global.css'
	import Intro from '$lib/Intro.svelte';
	import Project from '$lib/Project.svelte';
	import Skills from '$lib/Skills.svelte';
	import Contact from '$lib/Contact.svelte';
	import Wall from '$lib/Wall.svelte';
	import data from '../content/data.js';

	const projects = data.projects;
	const languages = data.skills.languages;
	const design = data.skills.design;
	const contact = data.contact;

</script>

<style>
	.skills {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.contact-list {
		position: relative;
		padding: 0.5em;
	}

	h2 {
		margin: 0;
	}

	a:focus, a:hover {
		outline: none;
		color: #e3b029;
	}

	.prettyline {
		width: 100%;
    height: 5px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #e3b029, #e3b029 25%, #fff 25%, #fff 50%, #171717 50%, #171717 75%, #fff 75% );
	}

</style>

<div class="prettyline">
</div>

<Intro/>

<section>
  <h2>projects</h2>
  {#each projects as {title, desc, link} }
    <Project title={title} desc={desc} link={link}/>
  {/each}
</section>

<section class="skills">
	<Skills title={languages.title} skills={languages.items} />
	<Skills title={design.title} skills={design.items} />
</section>

<section>
	<h2>let's chat</h2>
	<ul class="contact-list wrap">
		<div class="wrapper"></div>
		<a href="mailto:ferbar811@gmail.com">Email</a>
		{#each contact as {name, link}}
			<Contact name={name} link={link}/>
		{/each}
	</ul>
</section>

<Wall />