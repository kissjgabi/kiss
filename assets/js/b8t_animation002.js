
        window.addEventListener("resize", b6WindowResize);

        function b6WindowResize() {
            if (globalID != null){
		        cancelRequestAnimFrame (globalID);
	        }
	        b6canvasresize();
        }

        function b6canvasresize() {
		        b6canvas01.width = frontpageDiv.clientWidth;
		        b6canvas01.height = frontpageDiv.clientHeight;
                b6canvasinit();
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
                clearTimeout
        } )();

        function r() {
            return Math.floor(Math.random()*255);
        }

        function o( radius ) {
            return Math.round(Math.random() * radius / 2 ) - radius / 4;
        }

        function transparency() {
            return Math.random() / 20;
        }

        function color() {
            return 'rgba(' + r() + ',' + r() + ',' + r() + ',' + transparency() + ')';
        }

        function radius() {
            return Math.random() * minLength / 10;
        }

        var items = [];

        function b6canvasinit() {
	        if (b6canvas01.width < b6canvas01.height ){
	        minLength = b6canvas01.width;
	        } else {
	        minLength = b6canvas01.height;
	        }
	        var howManyCircles = minLength/20;
            for(var i=0; i<howManyCircles; i++) {
                items[i] = [Math.floor(Math.random()*b6canvas01.width),
                            Math.floor(Math.random()*b6canvas01.height),
                            color(),
					        radius()];
            }
        }

        function b6canvasupdate() {
            //canvasctx01.clearRect(0, 0, b6canvas01.width, b6canvas01.height);

            for(var i=0; i<items.length; i++) {
                var item = items[i];
	            if ( i % 3 == 0 ) {
                    item[2] = 'rgba(255,255,255,0.15)';                
                }
                item[0] += o(item[3]);
		        if (item[0] < item[3] ) {
			        item[0] = Math.floor(Math.random()*b6canvas01.width);
                    item[2] = color();
                    item[3] = radius();
		        }
		        if (b6canvas01.width - item[0] < item[3] ) {
                    item[0] = Math.floor(Math.random()*b6canvas01.width);
                    item[2] = color();
                    item[3] = radius();
                }
                item[1] += o(item[3]);
		        if (item[1] < item[3]) {
			        item[1] = Math.floor(Math.random()*b6canvas01.height);
                    item[2] = color();
                    item[3] = radius();
		        }
		        if (b6canvas01.height - item[1] < item[3] ) {
			        item[1] = Math.floor(Math.random()*b6canvas01.height);
                    item[2] = color();
                    item[3] = radius();
		        }
                item[3]++;
                canvasctx01.fillStyle = item[2];
                canvasctx01.beginPath();
                canvasctx01.arc(item[0],item[1],item[3], 0, Math.PI*2);
                canvasctx01.fill();
            }
        }

        function animate(){
            globalID = requestAnimFrame(b6canvasupdate, 20);
        }

        function b6animation_start(){
	        frontpageDiv = document.getElementById('frontpage');
	        b6canvas01 = document.getElementById('b6canvas01');
	        canvasctx01 = b6canvas01.getContext('2d');
            canvasctx01.shadowColor = '#0f0f0f';
            canvasctx01.shadowBlur = 5;

            if (globalID != null){
		        cancelRequestAnimFrame (globalID);
	        }
	        b6canvasresize();
	        globalID = setInterval(animate, 20);
        }

        var globalID, minLength;
        var b6canvas01, canvasctx01, frontpageDiv;

