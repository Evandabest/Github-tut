import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Git Tutorials",
  description: "Learn Git commands and concepts step by step",
};

export default function TutorialsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tutorialLinks = [
    { title: "Home", href: "/" },
    { title: "All Tutorials", href: "/tutorials" },
    { title: "Git Init", href: "/tutorials/git-init" },
    { title: "Git Clone", href: "/tutorials/git-clone" },
    { title: "Git Add", href: "/tutorials/git-add" },
    { title: "Git Commit", href: "/tutorials/git-commit" },
    { title: "Git Push", href: "/tutorials/git-push" },
    { title: "Git Pull", href: "/tutorials/git-pull" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile navigation */}
      <div className="md:hidden bg-slate-900 text-white p-4">
        <details className="group">
          <summary className="flex justify-between items-center cursor-pointer">
            <span className="font-medium">Navigation</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <nav className="mt-4 space-y-1">
            {tutorialLinks.map((link) => (
              <Link 
                href={link.href}
                key={link.href}
                className="block py-2 px-3 rounded-md hover:bg-slate-800 transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </details>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 bg-slate-900 text-white p-6 shrink-0">
        <div className="sticky top-6">
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-slate-700">Git Tutorials</h2>
          <nav>
            <ul className="space-y-1">
              {tutorialLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="block py-2 px-3 rounded-md hover:bg-slate-800 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-x-hidden">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}