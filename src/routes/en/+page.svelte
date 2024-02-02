<script>
    import LogoName from "../../images/logoName.png";
    import Mail from "../../images/mail.svelte";
</script>

<div class="flex-col mx-8 mt-8 gap-4 xxs:gap-1 xxs:mx-4 xxs:mt-4">
    <div class="flex gap-8">
        <div class="w-1/4 xs:float-left">
            <img src={LogoName} alt="company Logo">
        </div>
        <div class="w-2/3 flex-col">
            <h3 class="h3 text-2xl xs:text-lg xxs:text-sm">I am an <span class="text-green-700">Auto entrepreneur</span> with experience in <span class="text-green-700">product design and development</span>. Enthusiastic about contributing to making things better. I am excited to bring <span class="text-green-700">AI</span> to all parts of business and human lives. I have an individual enterprise in the name of <span class="text-red-700">RS Technologies.</span></h3>
    
            <div class="flex justify-start w-full gap-2 my-4 xs:my-2 xs:gap-0 xxs:my-0 xxs:gap-0">
                <h3 class="h3 text-2xl xs:text-lg xxs:text-sm">SIREN: <span class="text-green-700">983224650</span></h3>
            </div>
            <div class="flex justify-start w-full gap-2 my-4 xs:my-2 xs:gap-0 xxs:my-0 xxs:gap-0">
                <h3 class="h3 text-2xl xs:text-lg xxs:text-sm">SIRET: <span class="text-green-700">98322465000017</span></h3>
            </div>
            <div class="flex justify-start w-full gap-2 my-4 xs:my-2 xs:gap-0 xxs:my-0 xxs:gap-0">
                <h3 class="h3 text-2xl xs:text-lg xxs:text-sm"><a href="mailto:solankirahul.fr@gmail.com" class="flex justify-center content-center items-center gap-1 hover:scale-105">solankirahul.fr@gmail.com<Mail/></a></h3>
            </div>
            <div class="flex justify-start w-full gap-2 my-4 xs:my-2 xs:gap-0 xxs:my-0 xxs:gap-0">
                <h3 class="h3 text-2xl xs:text-lg xxs:text-sm">+33 07 85 95 88 55</h3>
            </div>
            <div class="flex justify-start w-full gap-2 my-4 xs:my-2 xs:gap-0 xxs:my-0 xxs:gap-0">
                <h3 class="h3 text-2xl xs:text-lg xxs:text-sm">Rouen, France</h3>
            </div>
        </div>
    </div>
    <div class="w-full justify-center content-center items-center mt-8 ">
        <h3 class="h3 text-center text-2xl xs:text-lg xxs:text-sm">Want to transform your idea to reality? <span class="text-red-700">Send me a mail or call me</span> and we can bring your vision to life.</h3>
    </div>
</div>

