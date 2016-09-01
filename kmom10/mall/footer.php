<?php
$d = explode("/", trim($path, "/"));
$srcUrl = '../mall/source.php?dir=' . end($d) . '&amp;file=' . basename($_SERVER["PHP_SELF"]) . '#file';
?>

<footer id='footer'>
    <nav>
        <div align="center">Copyright © 2016 ShahBox. Alla rättigheter reserverade</div>
    </nav>
</footer>
<script src="../sample/js/jquery-3.1.0.js"></script>
<script src="../mall/shah.js"></script>
<script src="main.js"></script>
<script src="../sample/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../sample/WebContent/zip.js"></script>
<!--<script src="jszip/dist/jszip.js"></script>-->
</body>
</html>