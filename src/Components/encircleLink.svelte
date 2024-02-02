<script>
	import { onMount } from "svelte";
    import rough from 'roughjs';

    export let idName;
    export let boxwidth=40;
    export let boxheight=40;

  onMount(() => {
    const svgElement = document.getElementById(idName);
    const rc = rough.svg(svgElement);
    const line = rc.ellipse(boxwidth/2+5, boxheight/2+5, boxwidth, boxheight, {stroke:"#f02324", strokeWidth:3, bowing:2, roughness:2});
    svgElement.appendChild(line);
  });


</script>


<svg id={idName} style:width={boxwidth+15} style:height={boxheight+10} class="absolute top-[-15px] left-[-15px] z-[-1]"></svg>