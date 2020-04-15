---
layout: mydefault
title: Home
---
<script type="text/javascript">

    window.addEventListener("resize", b6WindowResize);

    function b6WindowResize() {
        if (globalID != null){
	        cancelRequestAnimFrame (globalID);
        }
        b6canvasresize();
        globalID = setTimeout(b6canvasupdate, 1000 / 60);
    }

</script>

<div class="pagination b8t_m0">
    <a href="{{ '/categories.html' | relative_url }}">
    Categories
    </a>

    <a href="{{ '/tags.html' | relative_url }}">
    Tags
    </a>

    <a href="{{ '/facts_of_science.html' | relative_url }}">
    Facts of science
    </a>
</div>

<div id="frontpage" class="b6-frontpage">

<!-- canvas -->
<div id="canvaSscreen">
    <canvas id='b6canvas01'>	</canvas>

<script type="text/javascript">

    var requestAnimFrame = (function(){
        return  window.requestAnimationFrame   || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(callback, element){
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    var cancelRequestAnimFrame = ( function() {
        return window.cancelAnimationFrame          	||
            window.webkitCancelRequestAnimationFrame    ||
            window.mozCancelRequestAnimationFrame       ||
            window.oCancelRequestAnimationFrame     	||
            window.msCancelRequestAnimationFrame        ||
            clearTimeout
    } )();

    function r() {
        return Math.floor(Math.random()*255);
    }

    function o( radius ) {
        return Math.round(Math.random() * radius / 4 ) - radius / 8;
    }

    function transparency() {
        return Math.random() / 5;
    }

    function color() {
        return 'rgba(' + r() + ',' + r() + ',' + r() + ',' + transparency() + ')';
    }

    function radius() {
        return Math.random() * minLength * .20;
    }


    var items = [];

    function b6canvasinit() {
        if (b6canvas01.width < b6canvas01.height ){
        minLength = b6canvas01.width;
        } else {
        minLength = b6canvas01.height;
        }
        var howManyCircles = minLength/40;
        for(var i=0; i<howManyCircles; i++) {
            items[i] = [Math.floor(Math.random()*b6canvas01.width),
                        Math.floor(Math.random()*b6canvas01.height),
                        color(),
				        radius()];
        }

    } 

    function b6canvasupdate() {
        canvasctx01.clearRect(0, 0, b6canvas01.width, b6canvas01.height);

        for(var i=0; i<items.length; i++) {
            var item = items[i];
        
            item[0] += o(item[3])/5;
	        if (item[0] < item[3] ) {
		        item[0] = item[3];
	        }
	        if (b6canvas01.width - item[0] < item[3] ) {
		        item[0] = b6canvas01.width - item[3];
	        }	
            item[1] += 2*o(item[3])/5;
	        if (item[1] < item[3]) {
		        item[1] = item[3];
	        }
	        if (b6canvas01.height - item[1] < item[3] ) {
		        item[1] = b6canvas01.height - item[3];
	        }

            canvasctx01.fillStyle = item[2];
            canvasctx01.beginPath();
            canvasctx01.arc(item[0],item[1],item[3], 0, Math.PI*2);
            canvasctx01.fill();
        }

        globalID = requestAnimFrame(b6canvasupdate);
    }

    function b6canvasresize() {
	        b6canvas01.width = frontpageDiv.clientWidth;
	        b6canvas01.height = frontpageDiv.clientHeight;
	        b6canvasinit();
    }

    function b6canvasstart(){
        frontpageDiv = document.getElementById('frontpage');
        b6canvas01 = document.getElementById('b6canvas01');
        canvasctx01 = b6canvas01.getContext('2d');
        canvasctx01.shadowColor = '#0f0f0f';
        canvasctx01.shadowBlur = 5;

        if (globalID != null){
	        cancelRequestAnimFrame (globalID);
        }
        b6canvasresize();
        globalID = setTimeout(b6canvasupdate, 40);
    }

    var globalID, minLength;
    var b6canvas01, canvasctx01, frontpageDiv;

    b6canvasstart();

</script>

</div>
	
</div>

