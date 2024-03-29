document.addEventListener("DOMContentLoaded", function() {
    var listaLenguajes = [
        { 
            nombre: "JavaScript", 
            descripcion: "JavaScript es un lenguaje de programación interpretado, orientado a objetos y de alto nivel. Es utilizado principalmente en el desarrollo web para agregar interactividad a páginas web.", 
            imagen: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            documentacion: "https://developer.mozilla.org/es/docs/Web/JavaScript"
        },
        { 
            nombre: "Python", 
            descripcion: "Python es un lenguaje de programación interpretado, multiparadigma y de alto nivel. Es conocido por su sintaxis clara y legible, lo que lo hace ideal para principiantes.", 
            imagen: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            documentacion: "https://docs.python.org/es/3/"
        },
        { 
            nombre: "Java", 
            descripcion: "Java es un lenguaje de programación orientado a objetos y multiplataforma. Es ampliamente utilizado en el desarrollo de aplicaciones empresariales y en el desarrollo de aplicaciones móviles para Android.", 
            imagen: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
            documentacion: "https://docs.oracle.com/javase/8/docs/"
        },
        { 
            nombre: "C#", 
            descripcion: "C# es un lenguaje de programación orientado a objetos desarrollado por Microsoft. Es ampliamente utilizado en el desarrollo de aplicaciones de escritorio, aplicaciones web y juegos.", 
            imagen: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
            documentacion: "https://docs.microsoft.com/es-es/dotnet/csharp/"
        },
        { 
            nombre: "Ruby", 
            descripcion: "Ruby es un lenguaje de programación interpretado, reflexivo y orientado a objetos. Es conocido por su simplicidad y productividad, y es utilizado principalmente en el desarrollo web con el framework Rails.", 
            imagen: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
            documentacion: "https://www.ruby-lang.org/es/documentation/"
        },
        { 
            nombre: "PHP", 
            descripcion: "PHP es un lenguaje de programación interpretado, de propósito general y ampliamente utilizado en el desarrollo web. Es especialmente adecuado para la creación de sitios web dinámicos y aplicaciones web.", 
            imagen: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
            documentacion: "https://www.php.net/manual/es/"
        },
        { 
            nombre: "Swift", 
            descripcion: "Swift es un lenguaje de programación desarrollado por Apple para el desarrollo de aplicaciones para iOS, macOS, watchOS y tvOS. Es conocido por su sintaxis clara y su seguridad.", 
            imagen: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
            documentacion: "https://developer.apple.com/swift/resources/"
        },
        { 
            nombre: "Go", 
            descripcion: "Go, también conocido como Golang, es un lenguaje de programación de código abierto desarrollado por Google. Es conocido por su eficiencia y su facilidad de uso, especialmente en sistemas distribuidos y en la nube.", 
            imagen: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
            documentacion: "https://golang.org/doc/"
        },
        { 
            nombre: "TypeScript", 
            descripcion: "TypeScript es un superconjunto tipado de JavaScript desarrollado por Microsoft. Agrega tipado estático opcional y otras características a JavaScript, lo que lo hace más seguro y fácil de mantener para aplicaciones grandes.", 
            imagen: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
            documentacion: "https://www.typescriptlang.org/docs/"
        },
        { 
            nombre: "Kotlin", 
            descripcion: "Kotlin es un lenguaje de programación de tipado estático desarrollado por JetBrains. Es conocido por su interoperabilidad con Java y su concisión, lo que lo hace popular para el desarrollo de aplicaciones Android.", 
            imagen: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg",
            documentacion: "https://kotlinlang.org/docs/home.html"
        }
    ];

    var container = document.querySelector('.catalog');

    var listaLenguajesEliminados = [];

    function renderizarLenguajes() {
        container.innerHTML = '';
        listaLenguajes.forEach(function(lenguaje) {
            var lenguajeDiv = document.createElement('div');
            lenguajeDiv.classList.add('programming-language');

            var imagen = document.createElement('img');
            imagen.src = lenguaje.imagen;
            imagen.alt = lenguaje.nombre;

            var descripcion = document.createElement('p');
            descripcion.classList.add('description');
            descripcion.textContent = lenguaje.descripcion;

            var btn = document.createElement('a');
            btn.classList.add('btn');
            btn.textContent = "Ver Documentación";
            btn.href = lenguaje.documentacion;
            btn.target = "_blank";

            var btnEliminar = document.createElement('button'); // Botón para eliminar
            btnEliminar.classList.add('eliminar-btn'); // Aplicar clase para estilos
            btnEliminar.textContent = "Eliminar";
            btnEliminar.onclick = function() {
                eliminarLenguaje(lenguaje.nombre);
            };

            lenguajeDiv.appendChild(imagen);
            lenguajeDiv.appendChild(descripcion);
            lenguajeDiv.appendChild(btn);
            lenguajeDiv.appendChild(btnEliminar); // Agregar botón eliminar

            container.appendChild(lenguajeDiv);
        });
    }

    renderizarLenguajes();

    // Función para eliminar un lenguaje de programación
    function eliminarLenguaje(nombreLenguaje) {
        var nombreEliminar = document.querySelector('#nombreEliminar').value;
        var index = listaLenguajes.findIndex(function(lenguaje) {
            return lenguaje.nombre === nombreLenguaje;
        });
        if (index !== -1) {
            listaLenguajesEliminados.push(listaLenguajes.splice(index, 1)[0]);
            renderizarLenguajes();
        } else {
            alert("El lenguaje de programación ingresado no existe en la lista.");
        }
    }

    // Agregar evento al botón de agregar lenguaje
    document.querySelector('#agregarLenguajeBtn').addEventListener('click', function() {
        var nombreNuevo = document.querySelector('#nombreNuevo').value;
        var imagenNuevo = document.querySelector('#imagenNuevo').value;
        var documentacionNuevo = document.querySelector('#documentacionNuevo').value;

        // Verificar si los campos no están vacíos
        if (nombreNuevo && imagenNuevo && documentacionNuevo) {
            // Realizar una solicitud HTTP para obtener la descripción de la URL proporcionada
            fetch(documentacionNuevo)
                .then(response => response.text())
                .then(text => {
                    // Crear un elemento HTML temporal para analizar el contenido y extraer la descripción
                    var tempElement = document.createElement('div');
                    tempElement.innerHTML = text;
                    var descriptionMeta = tempElement.querySelector('meta[name="description"]');
                    var descripcion = descriptionMeta ? descriptionMeta.getAttribute('content') : "Descripción no encontrada";
                    
                    // Agregar el nuevo lenguaje con la descripción obtenida
                    listaLenguajes.push({
                        nombre: nombreNuevo,
                        descripcion: descripcion,
                        imagen: imagenNuevo,
                        documentacion: documentacionNuevo
                    });
                    
                    // Renderizar los lenguajes nuevamente
                    renderizarLenguajes();
                })
                .catch(error => {
                    console.error('Error al obtener la descripción:', error);
                    alert("Ha ocurrido un error al obtener la descripción del nuevo lenguaje. Verifica la URL e inténtalo nuevamente.");
                });
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
});