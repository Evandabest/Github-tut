import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Git Pull Tutorial",
  description: "Learn how to update your local repository with remote changes",
};

export default function GitPullTutorial() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Git Pull Tutorial</h1>
      
      <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg font-medium m-0">
          The <code>git pull</code> command fetches changes from a remote repository and integrates them into your current branch. 
          It's essentially a combination of <code>git fetch</code> followed by <code>git merge</code> or <code>git rebase</code>.
        </p>
      </div>
      
      <section className="mb-8">
        <h2>Basic Usage</h2>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
          <pre className="whitespace-pre-wrap m-0">git pull &lt;remote&gt; &lt;branch&gt;</pre>
        </div>
        <p>
          This command pulls changes from the specified branch on the remote repository and merges them into your current local branch.
          The most common form is <code>git pull origin main</code>, which pulls changes from the main branch on the origin remote.
        </p>
      </section>
      
      <section className="mb-8">
        <h2>Step-by-step Example</h2>
        <ol>
          <li>
            <p className="font-medium">First, check which branch you're on:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git branch</pre>
            </div>
            <p>You should see your current branch marked with an asterisk.</p>
          </li>
          <li>
            <p className="font-medium">Make sure your working directory is clean:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git status</pre>
            </div>
            <p>It's best to commit or stash any changes before pulling.</p>
          </li>
          <li>
            <p className="font-medium">Pull changes from the remote repository:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git pull origin main</pre>
            </div>
            <p>You might see output like:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0
Unpacking objects: 100% (3/3), 267 bytes | 44.00 KiB/s, done.
From https://github.com/username/repository
   e567890..1a2b3c4  main       {'->'} origin/main
Updating e567890..1a2b3c4
Fast-forward
 README.md | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)</pre>
            </div>
          </li>
          <li>
            <p className="font-medium">Verify that the changes were integrated:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git log --oneline -n 3</pre>
            </div>
            <p>You should see the new commits that were pulled from the remote.</p>
          </li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2>Common Options</h2>
        <div className="grid gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--rebase</h3>
            <p className="m-0">Rebase the current branch on top of the upstream branch after fetching</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git pull --rebase origin main</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--no-commit</h3>
            <p className="m-0">Perform the merge but don't autocommit, to give the user a chance to inspect and further edit the merge result</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git pull --no-commit origin main</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--ff-only</h3>
            <p className="m-0">Refuse to merge unless the current HEAD is already up to date or the merge can be resolved as a fast-forward</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git pull --ff-only origin main</pre>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2>Pull vs. Fetch</h2>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg mb-4 border-l-4 border-indigo-500">
          <p className="m-0">
            <code>git pull</code> is actually a combination of two commands:
          </p>
          <ol className="mt-3 mb-0">
            <li><code>git fetch</code>: Downloads commits, files, and refs from the remote repository without merging</li>
            <li><code>git merge</code> or <code>git rebase</code>: Integrates the fetched changes into your local branch</li>
          </ol>
          <p className="mt-3 mb-0">
            Some developers prefer to use <code>git fetch</code> followed by a separate <code>git merge</code> 
            for more control over the integration process.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2>Handling Merge Conflicts</h2>
        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
          <p className="m-0">
            Sometimes <code>git pull</code> will result in merge conflicts when the same part of a file 
            has been modified both locally and remotely. When this happens:
          </p>
          <ol className="mt-3 mb-0">
            <li>Git will tell you which files have conflicts</li>
            <li>Open the conflicted files and look for conflict markers (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, and <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>)</li>
            <li>Edit the files to resolve the conflicts</li>
            <li>Add the resolved files with <code>git add &lt;file&gt;</code></li>
            <li>Complete the merge with <code>git commit</code></li>
          </ol>
        </div>
      </section>
      
      <section>
        <h2>Next Steps</h2>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-900">
          <p className="m-0">
            You've now learned the basic Git workflow from initialization to collaboration! To continue your Git education, 
            consider exploring more advanced topics like branching strategies, rebasing, and working with remotes.
          </p>
          <p className="mt-3 mb-0">
            Return to the <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">home page</Link> to explore all tutorials.
          </p>
        </div>
      </section>
    </article>
  );
}