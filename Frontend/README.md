# 📱 DirectorioDigital - Frontend

Una plataforma moderna de directorios empresariales y gestión de vacantes de empleo construida con React y Vite.

## 🎯 Descripción del Proyecto

DirectorioDigital es una aplicación web completa que permite:

- **Empresas**: Registrarse, crear perfiles, publicar vacantes y gestionar solicitudes
- **Usuarios**: Buscar empresas, explorar vacantes y aplicar a posiciones
- **Directorio**: Explorar y filtrar el catálogo de empresas disponibles
- **Perfiles**: Gestionar información personal y profesional

## ✨ Características Principales

- ✅ Sistema de autenticación (Login/Registro)
- ✅ Directorio completo de empresas
- ✅ Portal de vacantes de empleo
- ✅ Perfiles de usuario y empresa
- ✅ Sistema de solicitudes de empleo
- ✅ Filtrado avanzado de directorios
- ✅ Gestión de anuncios
- ✅ Interfaz responsive

## 🏗️ Arquitectura del Proyecto

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend (React)                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           Routes & Navigation Layer                  │   │
│  │  ┌─────────────┬──────────┬────────┬──────────────┐  │   │
│  │  │ Login       │ Registro │ Home   │ Directorio   │  │   │
│  │  │ Vacantes    │ Empresas │ Perfil │ Nosotros     │  │   │
│  │  └─────────────┴──────────┴────────┴──────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
│                            ↓                                 │
│  ┌──────────────────────────────────────────────────────┐   │
│  │          Component Layer (Pages & Components)        │   │
│  │  ┌────────────────┐  ┌────────────────────────────┐ │   │
│  │  │ Layout Comps   │  │ Feature Components         │ │   │
│  │  │ • Header       │  │ • Auth (login/registro)    │ │   │
│  │  │ • Navigation   │  │ • Company (vacantes)       │ │   │
│  │  │ • Footer       │  │ • Directory (filters)      │ │   │
│  │  │ • Navigation   │  │ • Profile (user/empresa)   │ │   │
│  │  │   Profile      │  │ • Popups (solicitudes)     │ │   │
│  │  └────────────────┘  └────────────────────────────┘ │   │
│  └──────────────────────────────────────────────────────┘   │
│                            ↓                                 │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         Services Layer (API Integration)             │   │
│  │  • authService.js                                    │   │
│  │  • registroServices.js                               │   │
│  │  • actualizarPerfilService.js                        │   │
│  └──────────────────────────────────────────────────────┘   │
│                            ↓                                 │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Context & State Management              │   │
│  │  • AuthContext (autenticación y usuario actual)      │   │
│  └──────────────────────────────────────────────────────┘   │
│                            ↓                                 │
│  ┌──────────────────────────────────────────────────────┐   │
│  │            Backend API (Node.js/Express)             │   │
│  │  • Authentication endpoints                          │   │
│  │  • Company management                                │   │
│  │  • Job listings                                      │   │
│  │  • User profiles                                     │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 📁 Estructura de Carpetas

```
src/
├── assets/                 # Recursos estáticos (imágenes, iconos, anuncios)
│   ├── adds/              # Banners y anuncios
│   ├── icons/             # Iconografía
│   └── images/            # Imágenes del proyecto
│
├── components/            # Componentes React reutilizables
│   ├── auth/              # Componentes de autenticación
│   ├── company/           # Componentes relacionados con empresas
│   │   ├── CardAboutProfile.jsx
│   │   ├── CardHireProfile.jsx
│   │   └── CardHomeProfile.jsx
│   ├── directory/         # Componentes del directorio
│   │   ├── Aside_adds.jsx
│   │   ├── Companies_list.jsx
│   │   ├── Filter_directory.jsx
│   │   └── Popup_Company.jsx
│   ├── home/              # Componentes de inicio
│   ├── layout/            # Componentes de diseño general
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── NavigationProfile.jsx
│   │   └── Footer.jsx
│   └── vacantes/          # Componentes de vacantes
│       ├── Card_vacante.jsx
│       ├── Popup_solicitud.jsx
│       └── Popup_vacante.jsx
│
├── config/                # Configuración de la aplicación
│   └── Routes.jsx         # Definición de rutas
│
├── contexts/              # React Context para estado global
│   └── AuthContext.jsx    # Autenticación y usuario actual
│
├── pages/                 # Páginas/vistas principales
│   ├── Login.jsx
│   ├── Registro.jsx
│   ├── Home.jsx
│   ├── Directorio.jsx
│   ├── Empresas.jsx
│   ├── Vacantes.jsx
│   ├── Profile.jsx
│   └── Nosotros.jsx
│
├── services/              # Servicios de API
│   ├── authService.js
│   ├── registroServices.js
│   └── actualizarPerfilService.js
│
├── styles/                # Estilos CSS
│   ├── Home.css
│   ├── Login.css
│   ├── Registro.css
│   ├── Navigation.css
│   ├── Header.css
│   ├── Footer.css
│   ├── Directory.css
│   ├── Empresas.css
│   ├── Vacantes.css
│   ├── Profile.css
│   ├── CardVacante.css
│   ├── cardProfile.css
│   ├── PopupCompany.css
│   ├── PopupEditProfile.css
│   └── page.css
│
├── utils/                 # Utilidades y componentes especiales
│   └── PopupEditProfiel.jsx
│
├── App.jsx                # Componente raíz
├── main.jsx               # Punto de entrada
└── index.css              # Estilos globales
```

## 🚀 Tecnologías Utilizadas

### Core

- **React 19.2.4** - Librería de UI
- **React Router DOM 7.10.1** - Enrutamiento de aplicación
- **Vite 7.2.4** - Build tool y dev server

### Autenticación & Utilidades

- **jwt-decode 4.0.0** - Decodificación de JWT tokens
- **react-select 5.10.2** - Componentes de selección avanzada

### Desarrollo

- **ESLint 9.39.1** - Linting de código
- **Babel/SWC** - Transpilación

## 📋 Requisitos Previos

- **Node.js** >= 18.x
- **npm** >= 9.x o **yarn** >= 3.x
- Navegador moderno (Chrome, Firefox, Safari, Edge)

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone <repositorio>
cd DirectorioDigital/Frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=DirectorioDigital
```

### 4. Iniciar servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📝 Scripts Disponibles

| Comando           | Descripción                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Inicia servidor de desarrollo con hot reload |
| `npm run build`   | Construye la aplicación para producción      |
| `npm run lint`    | Ejecuta ESLint para verificar código         |
| `npm run preview` | Vista previa de la build de producción       |

## 🔐 Gestión de Autenticación

La autenticación se maneja a través de:

1. **AuthContext** (`src/contexts/AuthContext.jsx`)
   - Almacena el estado global de autenticación
   - Proporciona usuario actual y tokens JWT

2. **authService.js** (`src/services/authService.js`)
   - Comunicación con endpoints de autenticación
   - Gestión de JWT tokens

3. **JWT Token Decode**
   - Decodificación y validación de tokens
   - Almacenamiento en localStorage

## 🎨 Estructura de Componentes Principales

### Páginas

- **Login.jsx** - Formulario de inicio de sesión
- **Registro.jsx** - Registro de nuevos usuarios
- **Home.jsx** - Página principal
- **Directorio.jsx** - Listado de empresas con filtros
- **Empresas.jsx** - Detalles de empresas
- **Vacantes.jsx** - Portal de ofertas de empleo
- **Profile.jsx** - Perfil de usuario/empresa
- **Nosotros.jsx** - Página informativa

### Componentes Clave

- **Header.jsx** - Navegación superior
- **Navigation.jsx** - Menú principal
- **Footer.jsx** - Pie de página
- **Filter_directory.jsx** - Sistema de filtrado avanzado
- **Card_vacante.jsx** - Tarjeta de oferta de empleo
- **Popup_solicitud.jsx** - Modal para aplicar a vacantes

## 🔌 Servicios API

### authService.js

```javascript
-login(email, password) - register(userData) - logout() - getCurrentUser();
```

### registroServices.js

```javascript
-createCompanyProfile(companyData) - createUserProfile(userData);
```

### actualizarPerfilService.js

```javascript
-updateUserProfile(userId, profileData) -
  updateCompanyProfile(companyId, profileData);
```

## 🎯 Flujos Principales

### Flujo de Autenticación

```
Usuario → Login/Registro → authService → Backend API → JWT Token → AuthContext → Redirección
```

### Flujo de Búsqueda de Empresas

```
Usuario → Directorio → Filter_directory → API Request → Companies_list → Componentes
```

### Flujo de Aplicación a Vacante

```
Usuario → Vacantes → Card_vacante → Popup_solicitud → registroServices → Backend API
```

## 🚦 Desarrollo

### Agregar una nueva página

1. Crear archivo en `src/pages/NuevaPage.jsx`
2. Agregarla a las rutas en `src/config/Routes.jsx`
3. Crear estilos en `src/styles/NuevaPage.css`

### Crear un nuevo componente

1. Crear carpeta en `src/components/feature/`
2. Agregar el archivo `Componente.jsx`
3. Crear estilos asociados en `src/styles/`
4. Importar y usar en páginas o componentes padre

### Agregar servicio API

1. Crear archivo en `src/services/servicioService.js`
2. Exportar funciones para llamadas API
3. Usar en componentes mediante imports

## 📱 Responsive Design

La aplicación es totalmente responsive y se adapta a:

- Dispositivos móviles (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🐛 Troubleshooting

### Problema: "npm run dev" falla

```bash
# Limpiar node_modules
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Problema: Errores de ESLint

```bash
# Ejecutar linting
npm run lint

# Fijar problemas automáticos
npm run lint -- --fix
```

### Problema: CORS en desarrollo

Asegurar que las variables de entorno estén correctamente configuradas y que el backend esté ejecutándose.

## 📞 Contacto & Soporte

Para reportar bugs o sugerencias, contactar al equipo de desarrollo.

## 📄 Licencia

Proyecto propietario. Todos los derechos reservados.

---

**Última actualización:** Marzo 2026
**Versión:** 1.0.0
