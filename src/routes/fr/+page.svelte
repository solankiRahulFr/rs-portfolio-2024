<script>
    import LogoName from "../../images/logoName.png";
    import Mail from "../../images/mail.svelte";
</script>

<div class="flex-col mx-8 mt-8 gap-4 xxs:gap-1 xxs:mx-4 xxs:mt-4 2xl:justify-around 2xl:mx-20 2xl:mt-20 pb-3 rotate-1">
    <div class="flex gap-8">
        <div class="w-1/5 xs:float-left">
            <img src={LogoName} alt="company Logo">
        </div>
        <div class="w-2/3 flex-col">
            <h3 class="h3 xl:text-3xl 2xl:text-4xl text-2xl xs:text-lg xxs:text-sm">Je suis un <span class="text-lime-700">Auto entrepreneur</span> ayant de l'expérience dans <span class="text-lime-700">la conception et le développement de produits</span>. Enthousiaste à l'idée de contribuer à améliorer les choses. Je suis ravi d’apporter <span class="text-lime-700">l’IA </span> à tous les aspects de l’entreprise et de la vie humaine. J'ai une entreprise individuelle au nom de <span class="text-red-700">RS Technologies.</span></h3>
    
            <div class="flex justify-start w-full gap-2 my-4 xs:my-2 xs:gap-0 xxs:my-0 xxs:gap-0">
                <h3 class="h3 xl:text-3xl 2xl:text-4xl text-2xl xs:text-lg xxs:text-sm">SIREN: <span class="text-lime-700">983224650</span></h3>
            </div>
            <div class="flex justify-start w-full gap-2 my-4 xs:my-2 xs:gap-0 xxs:my-0 xxs:gap-0">
                <h3 class="h3 xl:text-3xl 2xl:text-4xl text-2xl xs:text-lg xxs:text-sm">SIRET: <span class="text-lime-700">98322465000017</span></h3>
            </div>
            <div class="flex justify-start w-full gap-2 my-4 xs:my-2 xs:gap-0 xxs:my-0 xxs:gap-0">
                <h3 class="h3 xl:text-3xl 2xl:text-4xl text-2xl xs:text-lg xxs:text-sm"><a href="mailto:solankirahul.fr@gmail.com" class="flex justify-center content-center items-center gap-1 hover:scale-105">solankirahul.fr@gmail.com<Mail/></a></h3>
            </div>
            <div class="flex justify-start w-full gap-2 my-4 xs:my-2 xs:gap-0 xxs:my-0 xxs:gap-0">
                <h3 class="h3 xl:text-3xl 2xl:text-4xl text-2xl xs:text-lg xxs:text-sm">+33 07 85 95 88 55</h3>
            </div>
            <div class="flex justify-start w-full gap-2 my-4 xs:my-2 xs:gap-0 xxs:my-0 xxs:gap-0">
                <h3 class="h3 xl:text-3xl 2xl:text-4xl text-2xl xs:text-lg xxs:text-sm">Rouen, France</h3>
            </div>
        </div>
    </div>
    <div class="w-full justify-center content-center items-center mt-8">
        <h3 class="h3 text-center xl:text-3xl 2xl:text-4xl text-2xl xs:text-lg xxs:text-sm">Vous souhaitez transformer votre idée en réalité ? <span class="text-red-700">Envoyez-moi un mail ou appelez-moi</span> et nous pourrons donner vie à votre vision.</h3>
    </div>
</div>

