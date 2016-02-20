function contar() {
	     var max = 0;
	     var cadena = document.getElementById("textArea").value;
	     var separar = cadena.split(" ");
	     var longitud = separar.length;

		     if(longitud >= max) {
		          document.getElementById("contador").value = max+longitud;
		     } else {
		          document.getElementById("textArea").value = cadena.substr(0, max);
		     }
	}