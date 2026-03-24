import { useInstagramPosts } from "../api/hooks/useGallery";
import DefaultLayout from "../components/layouts/DefaultLayout";

export default function GalleryPage() {
  const { allInstagramPosts, isAllInstagramPostsLoading } = useInstagramPosts();

  return (
    <DefaultLayout>
      <main className="p-4 mt-16">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-sky-700 font-bold mb-8 uppercase text-center">
            Galería de Instagram
          </h1>

          {isAllInstagramPostsLoading ? (
            <div className="w-full max-w-4xl bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">
                Cargando las publicaciones...
              </p>
            </div>
          ) : allInstagramPosts && allInstagramPosts.posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
              {allInstagramPosts.posts?.map((post) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100"
                >
                  <div className="relative aspect-square bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.text || "Publicación de Instagram"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {post.has_video === 1 && (
                      <div className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-2 backdrop-blur-sm">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 6h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V8a2 2 0 012-2zm2.5 3a.5.5 0 00-.5.5v5a.5.5 0 00.757.429l5-3a.5.5 0 000-.858l-5-3A.5.5 0 004.5 9z"></path>
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <img
                        src={post.user_image}
                        alt={post.user_screen_name}
                        className="w-8 h-8 rounded-full border border-gray-200 mr-3"
                      />
                      <span className="font-semibold text-sm text-gray-800">
                        {post.user_screen_name}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                      {post.text}
                    </p>

                    <div className="flex justify-between items-center text-gray-500 text-xs mt-auto">
                      <span>
                        {new Date(post.source_created_at).toLocaleDateString(
                          "es-ES",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                      </span>
                      <div className="flex space-x-3">
                        <span className="flex items-center font-medium">
                          <svg
                            className="w-4 h-4 mr-1 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {post.likes}
                        </span>
                        <span className="flex items-center font-medium">
                          <svg
                            className="w-4 h-4 mr-1 text-sky-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="w-full max-w-4xl bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">
                No hay publicaciones para mostrar
              </p>
            </div>
          )}
        </section>
      </main>
    </DefaultLayout>
  );
}
