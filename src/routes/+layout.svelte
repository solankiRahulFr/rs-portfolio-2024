<script>
	import '../app.css';
	import TopCorner from '../images/cornerTop.svelte';
	import BottomCorner from '../images/cornerBottom.svelte';
	import logo from '../images/logo.png';
	import AboutLine from '../images/aboutLine.svelte';
	import Encircle from '../images/encircle.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { langStore } from '../store/store';
	import { goto } from '$app/navigation';
  import rough from 'roughjs';

  function createLineMenu(){
	const svgElement = document.getElementById('rough-svg');
    const rc = rough.svg(svgElement);
    const line = rc.line(0, 0, svgElement.clientWidth+100, 0, {strokeWidth: 3, bowing:1.5, stroke: '#282828'});
    svgElement.appendChild(line);
  }

  
  onMount(() => {
	createLineMenu();
  });




	const langRoute = {
		en: ['/en/about', '/en/skills', '/en/education', '/en/experience', '/en/projects'],
		fr: ['/fr/apropos', '/fr/competences', '/fr/education', '/fr/experience', '/fr/projets']
	};

	const langMenuName = {
		en: ['About', 'Skills', 'Education', 'Experience', 'Projects'],
		fr: ['À propos', 'Compétences', 'Éducation', 'Expérience', 'Projets']
	};

	const handleLangChange = (lang) => {
		langStore.set(lang);
		if (!$page.url.href.includes(`/${lang}`)) {
			if ($page.url.pathname == '/en') goto('/fr');
			else if ($page.url.pathname == '/fr') goto('/en');
			else if ($page.url.href.split('/').length > 4 && $page.url.href.includes('/en/'))
				goto(langRoute.fr[langRoute['en'].indexOf($page.url.pathname)]);
			else if ($page.url.href.split('/').length > 4 && $page.url.href.includes('/fr'))
				goto(langRoute.en[langRoute['fr'].indexOf($page.url.pathname)]);
		}
		createLineMenu()
	};
</script>

<div class="w-full flex justify-between items-center px-8 mt-5 xs:px-6 xs:gap-4">
	<div>
		<a href={`/${$langStore}`}><img src={logo} alt="logo" class="w-11 saturate-200 drop-shadow-lg xs:w-10"/></a>
    <!-- <a href={`/${$langStore}`}><Logo/></a> -->
	</div> 
	<div class="menu relative flex justify-center items-center gap-8 sm:gap-4 xs:gap-2 sm:flex-wrap xs:flex-wrap xs:mt-2 ">
		<a
			href={langRoute[$langStore][0]}
			class="menuItem text-2xl px-2 lg:text-2xl md:text-xl sm:text-lg xs:text-lg xs:px-1"
			class:active={$page.url.href.includes(langRoute[$langStore][0])}
			>{langMenuName[$langStore][0]} <Encircle /> <AboutLine dpath={'M5 11 Q 60 7 70 6'} /></a
		>
		<a
			href={langRoute[$langStore][1]}
			class="menuItem text-2xl px-2 lg:text-2xl md:text-xl sm:text-lg xs:text-lg xs:px-1"
			class:active={$page.url.href.includes(langRoute[$langStore][1])}
			>{langMenuName[$langStore][1]} <Encircle /> <AboutLine dpath={$langStore=="en"?'M5 6 Q 22 8 56 6':'M5 6 Q 22 8 100 6'} /></a
		>
		<!-- <a
			href={langRoute[$langStore][2]}
			class="menuItem text-2xl px-2 lg:text-2xl md:text-xl sm:text-lg xs:text-lg xs:px-1"
			class:active={$page.url.href.includes(langRoute[$langStore][2])}
			>{langMenuName[$langStore][2]} <Encircle /> <AboutLine dpath={'M5 7 Q 62 9 107 8'} /></a
		> -->
		<!-- <a
			href={langRoute[$langStore][3]}
			class="menuItem text-2xl px-2 lg:text-2xl md:text-xl sm:text-lg xs:text-lg xs:px-1"
			class:active={$page.url.href.includes(langRoute[$langStore][3])}
			>{langMenuName[$langStore][3]} <Encircle /> <AboutLine dpath={'M5 7 Q 15 6 124 8'} /></a
		> -->
		<a
			href={langRoute[$langStore][4]}
			class="menuItem text-2xl px-2 lg:text-2xl md:text-xl sm:text-lg xs:text-lg xs:px-1"
			class:active={$page.url.href.includes(langRoute[$langStore][4])}
			>{langMenuName[$langStore][4]} <Encircle /> <AboutLine dpath={'M5 9 Q 27 6 92 6'} /></a
		>
    <svg id="rough-svg" class="w-full my-2 h-1 absolute bottom-[-20px]"></svg>
	</div>

	<div class="relative">
		<p class="lang w-9 text-lg lg:text-xl md:text-lg sm:text-lg xs:text-lg">
			<button class:active={$langStore == 'en'} on:click={() => handleLangChange('en')}
				>en </button
			>/<button class:active={$langStore == 'fr'} on:click={() => handleLangChange('fr')}
				> fr</button
			>
		</p>
	</div>
  
</div>


<div id="mainFrame">
	<div id="borderWhiteBoard"></div>
	<div id="cornerLeftTop">
		<TopCorner />
	</div>
	<div id="cornerRightTop">
		<TopCorner />
	</div>
	<div id="reflectionLine"></div>
	<div id="cornerLeftBottom">
		<BottomCorner />
	</div>
	<div id="cornerRightBottom">
		<BottomCorner />
	</div>
</div>

<slot />

<style>
	.lang button {
		cursor: pointer;
		transition: 0.2s ease-in-out;
	}
	.lang button:hover {
		transform: scale(1.05);
		transition: 0.2s ease-in-out;
	}
	.lang button.active {
		color: #f02324;
	}
</style>
