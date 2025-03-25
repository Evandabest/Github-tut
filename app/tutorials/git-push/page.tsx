import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Git Push Tutorial",
  description: "Learn how to upload local commits to a remote repository",
};

export default function GitPushTutorial() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Git Push Tutorial</h1>
      
      <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg font-medium m-0">
          The <code>git push</code> command uploads your local repository content to a remote repository. It transfers commits from your local repository
          to the remote repository, allowing you to share your changes with others.
        </p>
      </div>
      
      <section className="mb-8">
        <h2>Basic Usage</h2>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
          <pre className="whitespace-pre-wrap m-0">git push &lt;remote&gt; &lt;branch&gt;</pre>
        </div>
        <p>
          This command pushes the specified branch to the designated remote repository.
          The most common form is <code>git push origin main</code>,
          which pushes the main branch to the origin remote.
        </p>
      </section>
      
      <section className="mb-8">
        <h2>Step-by-step Example</h2>
        <ol>
          <li>
            <p className="font-medium">First, check which remotes are configured:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git remote -v</pre>
            </div>
            <p>You should see output like:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">origin  https://github.com/username/repository.git (fetch)
origin  https://github.com/username/repository.git (push)</pre>
            </div>
          </li>
          <li>
            <p className="font-medium">Make sure you have committed all your changes:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git status</pre>
            </div>
          </li>
          <li>
            <p className="font-medium">Push your changes to the remote repository:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git push origin main</pre>
            </div>
            <p>You should see output showing the upload progress:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 325 bytes | 325.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
To https://github.com/username/repository.git
   e567890..1a2b3c4  main {'->'} main</pre>
            </div>
          </li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2>Common Options</h2>
        <div className="grid gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--force or -f</h3>
            <p className="m-0">Force the push even if it results in a non-fast-forward merge (use with caution!)</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git push -f origin main</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--tags</h3>
            <p className="m-0">Push all tags along with other refs</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git push --tags origin</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--set-upstream or -u</h3>
            <p className="m-0">Set the upstream reference for the current branch</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git push -u origin feature-branch</pre>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2>Common Workflows</h2>
        <div className="grid gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Setting upstream and pushing a new branch</h3>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git push -u origin feature-branch</pre>
            </div>
            <p className="mt-2">This sets up tracking and pushes your new branch to the remote.</p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Pushing all branches</h3>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git push --all origin</pre>
            </div>
            <p className="mt-2">This pushes all of your local branches to the remote repository.</p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2>Handling Push Rejection</h2>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
          <p className="m-0">
            Sometimes your push might be rejected because the remote repository has work that you don't have locally. This often happens when collaborating with others. When this occurs, you'll need to first <code>git pull</code> to integrate the remote changes, and then push again.
          </p>
        </div>
      </section>
      
      <section>
        <h2>Next Steps</h2>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-900">
          <p className="m-0">
            After pushing your changes, you might need to pull changes from others working on the same repository.
            Continue to the <Link href="/tutorials/git-pull" className="text-blue-600 dark:text-blue-400 hover:underline">Git Pull tutorial</Link> to learn how.
          </p>
        </div>
      </section>
    </article>
  );
}