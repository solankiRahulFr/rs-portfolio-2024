<script>
	import { onMount } from "svelte";
    import rough from 'roughjs';
    import { langStore } from '../store/store';
    import EnglishCV from "../images/Resume_2024_AI_English.pdf";
    import FrenchCV from "../images/Resume_2024_AI_French.pdf";
  
    export let buttonName="Want my resume ?";
    export let idName="buttonAnchor";
    export let buttonwidth=100;
    let btnWid, btnhg;
  onMount(() => {
    btnWid = document.getElementById(idName).offsetWidth
    btnhg = document.getElementById(idName).offsetHeight
    const svgElement = document.getElementById('rough-button');
    const rc = rough.svg(svgElement);
    const line = rc.rectangle(0, 0, btnWid+5, btnhg+5, {stroke:"#1d1d1d", fill: "#0677ea80",fillWeight: 3, strokeWidth:3,hachureGap:8,fillStyle :"zigzag"});;
    svgElement.appendChild(line);
  });
</script>

<div class={`h-[${btnhg}px] w-[${buttonwidth}px]`}>
    <a id={idName} href={$langStore=="en"?EnglishCV:FrenchCV} class="mainButton text-wrap w-full relative text-2xl px-2 lg:text-2xl md:text-xl sm:text-lg xs:text-lg xxs:text-sm z-1" target="_blank" download={"Rahul_solanki_CV.pdf"}>{buttonName}<svg id="rough-button" style:width={btnWid+8} style:height={btnhg+10} class="absolute top-0 z-[-1]"></svg></a>
</div>


<style>
    
    :global(.mainButton svg path:first-child){
    transition: 0.2s ease-in-out;
    stroke-dashoffset: 117;
    stroke-width: 4;
    stroke-linecap: square;
    stroke-dasharray: 117;}

    :global(a.mainButton:hover svg path:first-child){
        stroke-dashoffset: 20;
        transition: 0.2s ease-in-out;}

  
</style>