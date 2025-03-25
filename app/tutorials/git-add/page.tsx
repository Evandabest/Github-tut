import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Git Add Tutorial",
  description: "Learn how to stage changes for commit",
};

export default function GitAddTutorial() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Git Add Tutorial</h1>
      
      <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg font-medium m-0">
          The <code>git add</code> command adds changes in your working directory to the staging area. It tells Git that you want to 
          include updates to a particular file in the next commit.
        </p>
      </div>
      
      <section className="mb-8">
        <h2>Basic Usage</h2>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
          <pre className="whitespace-pre-wrap m-0">git add &lt;file-or-directory&gt;</pre>
        </div>
        <p>
          This command adds the specified file or directory to the staging area, preparing it for the next commit.
        </p>
      </section>
      
      <section className="mb-8">
        <h2>Common Patterns</h2>
        <div className="grid gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Add a specific file</h3>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git add file.txt</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Add all files in the current directory</h3>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git add .</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Add all files with a specific extension</h3>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git add *.js</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Add all changes in tracked files</h3>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git add -u</pre>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2>Step-by-step Example</h2>
        <ol>
          <li>
            <p className="font-medium">Create or modify a file:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">echo "Hello, Git!" {'>'} hello.txt</pre>
            </div>
          </li>
          <li>
            <p className="font-medium">Check the status to see untracked files:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git status</pre>
            </div>
            <p>You should see output like:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">Untracked files:
  (use "git add &lt;file&gt;..." to include in what will be committed)
        hello.txt</pre>
            </div>
          </li>
          <li>
            <p className="font-medium">Add the file to the staging area:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git add hello.txt</pre>
            </div>
          </li>
          <li>
            <p className="font-medium">Check the status again to confirm it's staged:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git status</pre>
            </div>
            <p>You should see output like:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">Changes to be committed:
  (use "git restore --staged &lt;file&gt;..." to unstage)
        new file:   hello.txt</pre>
            </div>
          </li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2>Common Options</h2>
        <div className="grid gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">-A or --all</h3>
            <p className="m-0">Add all changes (new, modified, and deleted files)</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git add -A</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">-p or --patch</h3>
            <p className="m-0">Interactively select portions of files to add</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git add -p file.js</pre>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2>The Staging Area: What's Happening Behind the Scenes</h2>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="m-0">
            When you use <code>git add</code>, you're adding a snapshot of the file to the "staging area" (also called the index). 
            This is a temporary area where changes wait before being committed. It allows you to selectively choose which changes 
            will be included in your next commit, even if you've made multiple changes to your working directory.
          </p>
        </div>
      </section>
      
      <section>
        <h2>Next Steps</h2>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-900">
          <p className="m-0">
            After staging your changes with git add, you'll want to commit them to your repository.
            Continue to the <Link href="/tutorials/git-commit" className="text-blue-600 dark:text-blue-400 hover:underline">Git Commit tutorial</Link> to learn how.
          </p>
        </div>
      </section>
    </article>
  );
}