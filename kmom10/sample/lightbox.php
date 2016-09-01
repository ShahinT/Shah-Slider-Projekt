<?php $title='Template for testprogram'; include(__DIR__ . '/../mall/header.php'); ?>

    <h1 align="center">Falcon LightBox</h1>
    <div class="imagesContainer" align="center">
        Clicka på bilderba för att se dem i lightbox läge.</br>
        <img class='example lightbox' src='img/1.jpg' width='200px' />
        <img class='example lightbox' src='img/1.jpg' width='200px' />
        <img class='example lightbox' src='img/1.jpg' width='200px' />
        <img class='example lightbox' src='img/1.jpg' width='200px' />

    </div>
    <p class="info">
        <strong>Produkt: </strong></br>
        Falcon lightBox är färdig att använda. Jättelätt att redigera och lägga till bilder.</br></br>
        <strong>Instruktion HTML fil: </strong></br>
        Bilder som ska visas i LightBox ska ha class namnet <code>class='example lightbox'</code>.
        Vill du flera bilder så kopierar du raden :</br>
        <code>img class='example lightbox' src='bildens adress här' width='200px'</code></br></br>

        <strong>Instruktion JavaScript fil: </strong></br>
        JavaScript filen är väl dokumenterat. Bland annat kan du enkelt ändra backgrundens opacitet så att
        sidan syns ljusare eller mörkare i raden <code>.animate({'opacity' : '0.8'}, 'slow')</code> </br>
        Ladda ned Falcon LightBox <strong><a href="FalconLightBox.rar" download>HÄR</a></strong> redan nu.


    </p>

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>