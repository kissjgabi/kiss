
    window.addEventListener("resize", b6WindowResize);

    function b6WindowResize() {
        if (globalID != null){
            clearInterval(globalID);
	        cancelRequestAnimFrame (globalID);
        }
        b6canvasresize();
    }


    function b6canvasresize() {
	        b6canvas01.width = frontpageDiv.clientWidth;
	        b6canvas01.height = frontpageDiv.clientHeight;
            b6animation_init();
    }


    var requestAnimFrame = (function(){
        return  window.requestAnimationFrame   || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(callback, time){
                window.setTimeout(callback, time);
            };
    })();

    var cancelRequestAnimFrame = ( function() {
        return window.cancelAnimationFrame          	||
            window.webkitCancelRequestAnimationFrame    ||
            window.mozCancelRequestAnimationFrame       ||
            window.oCancelRequestAnimationFrame     	||
            window.msCancelRequestAnimationFrame        ||
            clearInterval
    })();

   function r() {
        return Math.floor(Math.random()*255);
    }

    function transparency() {
        return (Math.random() / 10);
    }

    function color() {
        return 'rgba(' + r() + ',' + r() + ',' + r() + ',' + transparency() + ')';
    }

    function height() {
        return Math.random() * b6canvas01.height * .02;
    }


    var items = [];

    function b6animation_init() {
        var howManyColors = b6canvas01.height/20;
        for(var i=0; i<howManyColors; i++) {
            items[i] = [color(), height()];
        }

    } 

    function b6animation_update() {
        canvasctx01.clearRect(0, 0, b6canvas01.width, b6canvas01.height);
        var top = 0;
        var bottom = b6canvas01.height;
        var color;
        var w = 10;
        if (b6canvas01.width > 1024){
            w = (b6canvas01.width - 1004) / 2;        
        }
        for(var i=0; i<items.length; i++) {
            var item = items[i];
            bottom -= item[1];
            canvasctx01.fillStyle = item[0];
            canvasctx01.fillRect( 0, top, w, item[1] );
            canvasctx01.fillRect( b6canvas01.width - w, top, w, item[1] );
            canvasctx01.fillRect( 0, bottom, w, item[1] );
            canvasctx01.fillRect( b6canvas01.width - w, bottom, w, item[1] );
            top +=  item[1];
        }
        b6animation_init();
    }

    function animate(){
        globalID = requestAnimFrame(b6animation_update, 20);
    }

    function b6animation_start(){
        frontpageDiv = document.getElementById('frontpage');
        b6canvas01 = document.getElementById('b6canvas01');
        canvasctx01 = b6canvas01.getContext('2d');
        canvasctx01.shadowColor = '#0f0f0f';
        canvasctx01.shadowBlur = 25;

        if (globalID != null){
            clearInterval(globalID);
	        cancelRequestAnimFrame (globalID);
        }
        b6canvasresize();
        globalID = setInterval(animate, 20);
    }

    var globalID, minLength;
    var b6canvas01, canvasctx01, frontpageDiv;

