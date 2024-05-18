import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

interface Articulo {
  id: number;
  titulo: string;
  resumen: string;
  imagenUrl: string;
}

const articulos: Articulo[] = [
  {
    id: 1,
    titulo: 'Nuevas Tecnologías que Están Dando Forma al Futuro',
    resumen: 'Un vistazo a cómo las tecnologías emergentes están redefiniendo las industrias.',
    imagenUrl: '/tech.jpg',
  },
  {
    id: 2,
    titulo: 'Economía Global en 2024: Predicciones y Tendencias',
    resumen: 'Expertos económicos comparten sus predicciones para el próximo año.',
    imagenUrl: '/economy.jpg',
  },
  {
    id: 3,
    titulo: 'Avances en Energías Renovables',
    resumen: 'Descubre cómo el mundo está cambiando hacia fuentes de energía más sostenibles.',
    imagenUrl: '/energy.jpg',
  },
  {
    id: 4,
    titulo: 'El Impacto de la IA en la Vida Cotidiana',
    resumen: 'Explorando cómo la inteligencia artificial está transformando nuestras rutinas diarias.',
    imagenUrl: '/ai.jpg',
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog de Noticias</title>
        <meta name="description" content="Mantente actualizado con las últimas noticias sobre tecnología, economía y más." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a href="#" className="flex items-center py-5 px-2">
                  <span className="font-bold">Inicio</span>
                </a>
              </div>
              <div>
                <a href="#" className="flex items-center py-5 px-2">
                  <span className="font-bold">Sobre Nosotros</span>
                </a>
              </div>
              <div>
                <a href="#" className="flex items-center py-5 px-2">
                  <span className="font-bold">Contacto</span>
                </a>
              </div>
              {/* Más enlaces de navegación si es necesario */}
            </div>
            <div className="flex items-center space-x-4">
              <div className="dropdown">
                <button className="dropbtn">Cuenta</button>
                <div className="dropdown-content">
                  <a href="#">Iniciar sesión</a>
                  <a href="#">Registrarse</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col lg:flex-row items-start justify-center min-h-screen p-4 pt-16 space-y-4 lg:space-y-0 lg:space-x-8">
        <aside className="hidden lg:block lg:w-1/4">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Índice del Blog</h2>
            <ul className="space-y-2">
              {articulos.map((articulo) => (
                <li key={articulo.id}>
                  <a href="#" className="hover:underline">
                    {articulo.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Publicidad</h2>
            <p>Espacio publicitario.</p>
          </div>
        </aside>

        <section className="w-full lg:w-2/4">
          <h1 className="text-4xl font-bold mb-4">Blog de Noticias</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Últimas actualizaciones e informes</p>

          <div className="space-y-4">
            {articulos.map((articulo) => (
              <article key={articulo.id} className="rounded overflow-hidden shadow-lg">
                <Image src={articulo.imagenUrl} alt={articulo.titulo} width={400} height={250} objectFit="cover" />
                <div className="px-6 py-4">
                  <h1 className="font-bold text-xl mb-2">{articulo.titulo}</h1>
                  <p className="text-gray-700 dark:text-gray-400">{articulo.resumen}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="hidden lg:block lg:w-1/4">
          <div>
            <h2 className="text-xl font-bold">Publicidad</h2>
            <p>Espacio publicitario.</p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export const LoginPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Página de inicio de sesión" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold">LoginPage</h1>
        {/* Aquí puedes agregar tu formulario de inicio de sesión */}
      </main>
    </div>
  );
};

export default Home;

