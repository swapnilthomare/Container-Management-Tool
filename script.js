function kd() {
    let cname = document.getElementById("in1").value;
    let cimg = document.getElementById("s1").value;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            document.getElementById("d1").innerHTML = this.responseText;
        }
        xhttp.open("GET", "http://65.2.137.189:3000/output?cname="+ cname +"&img=" + cimg);
        xhttp.send();
    }
    function ps() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            document.getElementById("d2").innerHTML = this.responseText;
        }
        xhttp.open("GET", "http://65.2.137.189:3000/info");
        xhttp.send();
    }
    function inspect() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            document.getElementById("d3").innerHTML = this.responseText;
        }
        xhttp.open("GET", "http://65.2.137.189:3000/inspect" );
        xhttp.send();
    }