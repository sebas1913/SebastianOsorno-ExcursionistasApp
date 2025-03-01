# Software para excursionistas

Una aplicación diseñada para determinar el conjunto óptimo de elementos que los excursionistas pueden llevar para escalar un risco, basándose en las propiedades de peso y calorías de cada ítem. La aplicación selecciona la combinación que cumple con el mínimo de calorías requerido y que, al mismo tiempo, minimiza el peso total.

## Tecnologías Utilizadas

- **React 19**
- **Vite**
- **Bootstrap 5 & React-Bootstrap**
- **ESLint**
- **TypeScript**

## Instalación y ejecución
**Clonar repositorio y acceder a la carpeta**
  - git clone https://github.com/sebas1913/SebastianOsorno-ExcursionistasApp.git
  - cd SebastianOsorno-ExcursionistasApp

**Instalar dependencias**
  - npm install
  
**Iniciar el servidor de desarrollo**
  - npm run dev

Esto iniciará la aplicación, generalmente en http://localhost:5173, o en el puerto asignado por tu entorno.

## Escalabilidad de la solución
 - **Modularidad:** El código está estructurado en componentes reutilizables y bien definidos.
 - **Escalabilidad de datos:** actualmente, los elementos están en un archivo JSON, pero la solución puede escalarse fácilmente para obtener datos desde una API.
 - **Desacoplamiento del Algoritmo:** El algoritmo de selección está en utils/elements.ts, separado de la UI.
 - **Estado y persistencia**: actualmente, los datos se gestionan en el estado de React (useState). Sin embargo, la solución es adaptable para integrar almacenamiento en el backend mediante una API.
 - **Mantenimiento y Extensibilidad:** La estructura del código permite agregar nuevas funcionalidades fácilmente, como nuevos criterios de selección, validaciones adicionales o mejoras en la interfaz gráfica.
 
