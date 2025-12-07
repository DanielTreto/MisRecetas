# MisRecetas

MisRecetas es una aplicación ligera para crear, organizar y compartir recetas de cocina. Está pensada como un proyecto personal y plantilla educativa que puedes adaptar a tus necesidades: almacenar recetas con ingredientes, pasos e imágenes, clasificarlas por categorías y etiquetas, y exportarlas o mostrarlas en una interfaz web.

# Requisitos
- Git
- Node.js y npm (si se utiliza stack JavaScript/Angular)
- Sass (para compilar SCSS)
- TypeScript (tsc) si hay archivos .ts
- Angular CLI si el proyecto es Angular
- Un editor de código como VSCode (recomendado)

# Clonar el proyecto
Para obtener este repositorio principal:
git clone https://github.com/DanielTreto/MisRecetas.git
cd MisRecetas

# Instalación rápida
1) Sitúate en la carpeta del proyecto:
cd MisRecetas

2) Instala dependencias (si aplica):
npm install

# Compilación y tareas comunes
- SCSS:
Ejecuta el comando sass XXXXX antes de abrir la página principal.

- TypeScript:
Compilar todos los .ts a .js:
tsc
Para ver cambios en tiempo real:
tsc -w

- Angular:
Para ejecutar la app Angular en desarrollo:
ng serve
Accede en: http://localhost:4200

# Uso local
- Abre el proyecto en tu editor (por ejemplo VSCode).
- Instala dependencias (npm install) si corresponde.
- Compila SCSS y/o TypeScript si tu flujo lo requiere.
- Si es Angular, lanza ng serve y abre el navegador en la dirección indicada.

# Arquitectura de la Solución (Diseño Atómico)

La aplicación sigue la metodología de **Diseño Atómico**, organizando la interfaz en tres niveles jerárquicos de componentes:

## 1. Átomos

Los Átomos son las unidades UI más pequeñas e irreductibles.

| Componente | Archivo | Propósito |
| :--- | :--- | :--- |
| **Boton** | `átomos/boton` | Elemento interactivo básico y estilizado. |

## 2. Moléculas

Las Moléculas son grupos de Átomos que funcionan juntos para realizar una **tarea específica y significativa**.

| Componente | Archivo | Propósito |
| :--- | :--- | :--- |
| **Estrellas** | `moleculas/estrellas` | **Display de Calificación.** Muestra la media (estático) o permite la selección (interactivo). |
| **FiltroCalificacion** | `moleculas/filtro-calificacion` | **Filtro de Contenido.** Permite al usuario seleccionar una calificación exacta para buscar recetas. |
| **ModalCalificacion** | `moleculas/modal-calificacion` | **Flujo de Votación.** Contenedor para el selector de estrellas, botones de acción y lógica de emisión de voto. |
| **Receta** | `moleculas/receta` | **Tarjeta de Receta.** Muestra los datos, calificación, y botones de interacción. |
| **ImagenesSocial** | `moleculas/imagenes-social` | Agrupación de íconos de redes sociales. |

## 3. Organismos

Los Organismos son grupos de Moléculas y/o Átomos que forman una sección compleja y completa de la interfaz o una vista de página.

| Componente | Archivo | Propósito |
| :--- | :--- | :--- |
| **Footer** | `organismos/footer` | Contenedor de navegación o información al pie de página. |
| **Formulario** | `organismos/formulario` | **Formulario de Ingreso.** Maneja la validación reactiva y la creación de nuevas recetas. |
| **Hero** | `organismos/hero` | La sección de encabezado principal con el mensaje de bienvenida y botones de acción. |
| **Navegador** | `organismos/navegador` | La barra de navegación principal de la aplicación. |
| **SeccionRecetas** | `organismos/seccion-recetas` | **Listado Principal.** Contiene filtros y renderiza el *loop* de todas las tarjetas `Receta`. |

# Requisitos

* Git
* Node.js y npm (si se utiliza stack JavaScript/Angular)
* Sass (para compilar SCSS)
* TypeScript (tsc) si hay archivos .ts
* Angular CLI si el proyecto es Angular
* Un editor de código como VSCode (recomendado)




