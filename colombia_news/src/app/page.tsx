import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

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
  // Agrega más artículos según sea necesario
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog de Noticias</title>
        <meta name="description" content="Mantente actualizado con las últimas noticias sobre tecnología, economía y más." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold">Blog de Noticias</h1>
        <p className="text-xl text-gray-600">Últimas actualizaciones e informes</p>

        <div className="mt-6 space-y-4">
          {articulos.map((articulo) => (
            <div key={articulo.id} className="max-w-md rounded overflow-hidden shadow-lg">
              <Image src={articulo.imagenUrl} alt={articulo.titulo} width={400} height={250} objectFit="cover" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{articulo.titulo}</div>
                <p className="text-gray-700 text-base">
                  {articulo.resumen}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
