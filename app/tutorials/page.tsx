import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Git Tutorials | Overview",
  description: "Learn Git commands and concepts step by step",
};

export default function TutorialsPage() {
  const tutorials = [
    { 
      title: "Git Init",
      slug: "git-init",
      description: "Learn how to initialize a Git repository",
      icon: "📁"
    },
    { 
      title: "Git Clone",
      slug: "git-clone",
      description: "Clone existing repositories to your local machine",
      icon: "📥"
    },
    { 
      title: "Git Add",
      slug: "git-add",
      description: "Stage changes for commit",
      icon: "➕"
    },
    { 
      title: "Git Commit",
      slug: "git-commit",
      description: "Save your changes to the repository",
      icon: "💾"
    },
    { 
      title: "Git Push",
      slug: "git-push",
      description: "Upload local commits to a remote repository",
      icon: "⬆️"
    },
    { 
      title: "Git Pull",
      slug: "git-pull",
      description: "Update your local repository with remote changes",
      icon: "⬇️"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Git Tutorial Overview</h1>
        
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          Welcome to the Git tutorial series! Here you'll learn the essential Git commands
          and concepts you need to effectively manage your projects and collaborate with others.
        </p>
        
        <div className="p-6 bg-blue-50 dark:bg-slate-800 rounded-lg mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-4">What is Git?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Git is a distributed version control system that helps you track changes in your code,
            collaborate with others, and maintain different versions of your projects. Created by
            Linus Torvalds in 2005, Git has become the standard for version control in software
            development.
          </p>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Available Tutorials</h2>
        
        <div className="space-y-6">
          {tutorials.map((tutorial) => (
            <Link 
              key={tutorial.slug}
              href={`/tutorials/${tutorial.slug}`}
              className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
            >
              <div className="flex items-start">
                <div className="text-3xl mr-4">{tutorial.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{tutorial.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{tutorial.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}