import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const tutorials = [
    { title: "Git Init", slug: "git-init", description: "Learn how to initialize a Git repository" },
    { title: "Git Clone", slug: "git-clone", description: "Clone existing repositories to your local machine" },
    { title: "Git Add", slug: "git-add", description: "Stage changes for commit" },
    { title: "Git Commit", slug: "git-commit", description: "Save your changes to the repository" },
    { title: "Git Push", slug: "git-push", description: "Upload local commits to a remote repository" },
    { title: "Git Pull", slug: "git-pull", description: "Update your local repository with remote changes" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-16 bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Git Command Tutorial</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
            Learn the essential Git commands to manage your projects effectively
          </p>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tutorials.map((tutorial) => (
            <Link 
              href={`/tutorials/${tutorial.slug}`}
              key={tutorial.slug}
              className="group relative bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 border-t-4 border-blue-500">
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{tutorial.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{tutorial.description}</p>
              </div>
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-blue-500">Learn more &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Built with Next.js | Git tutorial for beginners
          </p>
        </div>
      </footer>
    </div>
  );
}
