
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


        function rot() {
            var a = Math.random()*7;
            return 4.5 - a;
        }

        function rx() {
            var a = Math.floor(Math.random()*7);
            return 3 - a;
        }

        function ry() {
            var a = Math.floor(Math.random()*4);
            return 3 - a;
        }


        var items = [];
        var globalID, minLength;
        var b6canvas01, canvasctx01, frontpageDiv;

        function b6canvasinit() {
	        var howManySnowflakes = 40;
            for(var i=0; i<howManySnowflakes; i++) {
                ii = Math.floor(Math.random()*35) +1;
                str = "00" + ii;
                var str = str.substring(str.length - 2);
                var img = new Image();
                img.src = "/kiss/assets/images/snow" + str + ".png";
                items[i] = [Math.floor(Math.random()*(b6canvas01.width-2*img.width)) + img.width/2,
                            Math.floor(Math.random()*b6canvas01.height-img.height),
                            rot()*5,
                            img];
            }
        }

        function finishDrawing(image,x,y,r){
            canvasctx01.save();
            canvasctx01.translate(x+image.width/2,y+image.height/2);
            canvasctx01.rotate(r*Math.PI/180);
            canvasctx01.drawImage(image,-image.width/2,-image.height/2);
            canvasctx01.restore();
        }

        function b6canvasupdate() {
            canvasctx01.clearRect(0, 0, b6canvas01.width, b6canvas01.height)

            for(var i=0; i<items.length; i++) {
                var item = items[i];
                if (item[1] > b6canvas01.height){
                    item[1] = -item[3].height;
                    item[0] = Math.floor(Math.random()*(b6canvas01.width-2*item[3].width))+item[3].width/2;
                    item[2] = rot()*5;
                } else {
                    item[0] += rx();
                    item[1] += ry();
                    item[2] += rot();
                }                
                finishDrawing(item[3],item[0],item[1],item[2]);
            }
        }

        function animate(){
            globalID = requestAnimFrame(b6canvasupdate, 1000/60);
        }

        function b6animation_start(){
	        control = document.getElementById('filter');
	        frontpageDiv = document.getElementById('frontpage');
	        b6canvas01 = document.getElementById('b6canvas01');
	        canvasctx01 = b6canvas01.getContext('2d');
            canvasctx01.shadowColor = '#0f0f0f';
            canvasctx01.shadowBlur = 5;

            if (globalID != null){
		        cancelRequestAnimFrame (globalID);
	        }
	        b6canvasresize();
	        globalID = setInterval(animate, 1000/60);
        }


