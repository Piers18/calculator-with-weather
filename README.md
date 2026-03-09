# 🧮 Calculator Weather App

Calculadora web interactiva que cambia su fondo dinámicamente según las condiciones climáticas del día, consumiendo una API del clima en tiempo real.

---

## 🚀 Tecnologías

| Tecnología         | Versión | Uso                            |
| ------------------ | ------- | ------------------------------ |
| React              | 19      | UI y componentes               |
| TypeScript         | 5.9     | Tipado estático                |
| Vite               | 7.3     | Build tool y dev server        |
| Tailwind CSS       | 4.2     | Estilos utilitarios            |
| OpenWeatherMap API | —       | Datos del clima en tiempo real |

---

## 📁 Estructura del Proyecto

```
src/
├── App.tsx                       # Componente principal
├── main.tsx                      # Entry point de la aplicación
├── assets/                       # Assets estáticos (imágenes, íconos)
├── components/                   # Componentes de UI
│   ├── button.tsx                # Botón individual de la calculadora
│   ├── calculator.tsx            # Contenedor principal de la calculadora
│   ├── display.tsx               # Pantalla que muestra los números
│   ├── grid.tsx                  # Grid layout de los botones
│   └── title.tsx                 # Título con información del clima
├── context/                      # React Context providers
│   └── WeatherContext.tsx        # Provider global del estado del clima
├── hooks/                        # Custom hooks
│   └── useWeather.ts             # Hook para consumir la API del clima
├── services/                     # Servicios y llamadas a APIs externas
│   └── weatherService.ts         # Conexión con la API del clima
├── styles/                       # Estilos globales y temas
│   └── index.css                 # Variables CSS y estilos base
├── types/                        # Definiciones de tipos TypeScript
│   └── index.ts                  # Interfaces (Weather, CalcState, etc.)
└── utils/                        # Funciones utilitarias
    └── weatherTheme.ts           # Mapeo de clima → colores/fondos
```

---

## ⚙️ Instalación

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd calculator

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env y agregar tu API Key de OpenWeatherMap

# 4. Iniciar el servidor de desarrollo
npm run dev
```

---

## 🔑 Configuración de la API del Clima

1. Crea una cuenta gratuita en [OpenWeatherMap](https://openweathermap.org/)
2. Genera una API Key en tu dashboard
3. Copia el archivo `.env.example` a `.env`
4. Reemplaza `tu_api_key_aqui` con tu API Key real:

```env
VITE_WEATHER_API_KEY=tu_api_key_real
```

---

## 🌤️ Cómo Funciona el Cambio de Fondo

La app obtiene el clima actual de la ciudad configurada y mapea la condición climática a un tema visual:

| Condición    | Estilo del Fondo                      |
| ------------ | ------------------------------------- |
| ☀️ Soleado   | Gradientes cálidos (amarillo/naranja) |
| ☁️ Nublado   | Gradientes grises                     |
| 🌧️ Lluvioso  | Gradientes azul oscuro                |
| ❄️ Nevado    | Gradientes blancos/celestes           |
| ⛈️ Tormenta  | Gradientes púrpura/oscuros            |
| 🌙 Despejado | Gradientes cyan/turquesa              |

La transición entre temas es suave y animada con CSS transitions.

---

## 📜 Scripts Disponibles

| Comando           | Descripción                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo    |
| `npm run build`   | Genera el build de producción       |
| `npm run lint`    | Ejecuta el linter (ESLint)          |
| `npm run preview` | Previsualiza el build de producción |
