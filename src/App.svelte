<script>
	import Intro from './components/Intro.svelte';
	import Project from './components/Project.svelte';
	import Skills from './components/Skills.svelte';
	import Contact from './components/Contact.svelte';
	import data from '../content/data';

	const projects = data.projects;
	const languages = data.skills.languages;
	const design = data.skills.design;
	const contact = data.contact;

</script>

<style>
	h1 {
		color: purple;
	}

	.skills {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.contact-list {
		position: relative;
		padding: 0.5em;
	}

	section:last-child {
		margin-bottom: 5em;
	}

</style>

<Intro/>

<section>
  <h2>work</h2>
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
		{#each contact as {name, link}}
			<Contact name={name} link={link}/>
		{/each}
	</ul>
</section>
