<script>
	import { onMount } from "svelte";
    import rough from 'roughjs';

    export let idName;
    export let boxwidth=100;
    export let boxheight=100;

  onMount(() => {
    const svgElement = document.getElementById(idName);
    const rc = rough.svg(svgElement);
    const line = rc.rectangle(0, 0, boxwidth, boxheight, {stroke:"#f02324", strokeWidth:3.5, bowing:2.5, roughness:1});;
    svgElement.appendChild(line);
  });
</script>


<svg id={idName} style:width={boxwidth} style:height={boxheight+10} class="absolute top-[-10px] left-[-10px] z-[-1]"></svg>

