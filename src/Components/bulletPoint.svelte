<script>
	import { onMount } from "svelte";
    import rough from 'roughjs';

    export let idName;
  let windowWidth;

  onMount(() => {
        windowWidth = window.innerWidth;
        let x = windowWidth<599?4:7;
        let y = windowWidth<599?4:7;
        let w = windowWidth<599?5:10;
        let h = windowWidth<599?4:7;
        let sw = windowWidth<599?2:3;
        const svgElement = document.getElementById(`${idName}`);
        const rc = rough.svg(svgElement);
        const line = rc.ellipse(x, y, w, h, {stroke:"#f02324", strokeWidth:sw, bowing:windowWidth<599?1:2, roughness:windowWidth<599?0.3:1});
        svgElement.appendChild(line);
  });

</script>


<svg id={`${idName}`} style:width={20} style:height={15} class="mt-1.5 mr-1"></svg>

