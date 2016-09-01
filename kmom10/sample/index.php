<?php $title='Template for testprogram'; include(__DIR__ . '/../mall/header.php'); ?>

<div>
        <div align="center">
                <h1>Shah Slider</h1>
                <div style="margin-top: -20px;margin-bottom:20px;"><strong>Skapa egen Slider utan att behöva koda </strong></div>
                <p>
                    ShahSlider är en webbaserade redigerbar "Slider" som ger dig möjligheten att redigera din egen
                    Light Box. När du blir nöjd med resultatet då kan du enkelt ladda ner den.
                    I filen Info finns mer information om var du ska lägga upp bilderna för att få den fungera.
                </p>
                <p>
                    När du var klar med redigeringen kan du spela upp Slidern.
                    Om du var nöjd med resultatet kan du enkelt ladda ner den.
                    Är du redo att skapa din egen Slider? Börja nu då.
                </p>
        </div>
    <div>

        <div id="editBoxar" >
            <div id="editBoxar2">
            Bredd <input placeholder="ange i pixlar" id="widthSize">
            Höjd <input placeholder="ange i pixlar" id="heightSize">
            <button id="changeSizeBox">Ändra Storleken</button>
            </div>
        </div>

        <div id="editBoxar">
            <div id="editBoxar2">
            Lägg till kant : <input placeholder="ange i pixlar" id="sizeOfBorder"> <button id="changeborderWith">ÄndraKanten</button>
            Välj färg på kanten :
                <button id="svartKant" value="black">Svart</button>
                <button id="vitKant" value="gray">Grå</button>
            </div>
        </div>

        <div id="editBoxar">
            <div id="editBoxar2">
            Ändra Bilderna varje <input placeholder="ange antal sekunder" id="speedOfLightBox" size="1"> sekunder. <button id="changeSpeed"> Ändra Hastigheten</button>
            </div>
        </div>

        <div id="editBoxar">
            <div id="editBoxar2">
                Välj en animation:
                <button id="noAnima">Inget</button>
                <button id="slideUpAnim">Slide Up</button>
                <button id="fadeOutAnim">Fade Out</button>
            </div>
        </div>

        <div id="editBoxar">
            <div id="editBoxar2">
                Bredd : <div style="display:inline;" id="widthResult">100%</div> <strong> | </strong>
                Höjd : <div style="display:inline;" id="heightResult">650</div><strong> | </strong>
                Kant : <div style="display:inline;" id="borderResult">Saknar</div><strong> | </strong>
                Kant Färg : <div style="display:inline;" id="borderColorResult">Saknar</div><strong> |</strong>
                Hastighet : <div style="display:inline;" id="speedResult">3 Sekunder</div><strong> |</strong>
                Animation : <div style="display:inline;" id="animationResult">Saknar</div>
            </div>
        </div>

    </div>

    <div align="center" id="cssBoxes">
        <button style="width: 30%" class="doneButton" id="startLB">Spela upp Slidern</button>
        <button style="width: 30%" class="doneButton" id="skapa" type="button" >Skapa </button>
        <a id="downB" class="downloadBut" href="shah-slider.zip" download>Ladda Ner</a>
    </div>

    <div class='slideshow'>
        <img src1='img/1.jpg' />
        <img src1='img/2.jpg' />
        <img src1='img/3.jpg' />
        <img src1='img/4.jpg' />
        <img src1='img/5.jpg' />
    </div> <!-- end of slideshow -->

    <br>
    <hr>
    <h3 style="font-size: 1.5em">Efter nedladdningen : </h3>
    När du var nöjd med redigeringen och ha laddat ner Slidern följer du den här enkla guiden.<br>
    1. Gå till filen <code>img</code> och bytt dina bilder mot bilderna som finns.<br>
    2. Om du har flera bilder öppna filen <code>shah-slider.html</code> i en text editor.<br>
    3. Kopiera denna rad <code>&#60;img src1='img/1.jpg'&#62;</code> och klistra in den tills raderna blir lika många som antalet på dina bilder.<br>
    4. Bytt <code>1.jpg</code> och <code>2.jpg</code> mot namnen på dina bilder.<br>
    5. Nu kan du ladda upp filerna på din webbsida och testa Slidern den på en local server (xampp) då <code>less.js</code> fungerar inte localt.<br>
    6. Klar.


</div>
   <!-- </div>  wrapper --><!--
    <script src="jszip/dist/jszip.js"></script>
    <script src="FileSaver.js"></script>-->
<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>