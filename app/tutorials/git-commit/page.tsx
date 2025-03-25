import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Git Commit Tutorial",
  description: "Learn how to save your changes to the repository",
};

export default function GitCommitTutorial() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Git Commit Tutorial</h1>
      
      <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg font-medium m-0">
          The <code>git commit</code> command saves your changes to the local repository. It creates a new commit containing the current contents 
          of the staging area along with a log message describing the changes.
        </p>
      </div>
      
      <section className="mb-8">
        <h2>Basic Usage</h2>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
          <pre className="whitespace-pre-wrap m-0">git commit -m "Your commit message"</pre>
        </div>
        <p>
          This command creates a new commit with the specified message, including all changes that have been staged with <code>git add</code>.
        </p>
      </section>
      
      <section className="mb-8">
        <h2>Writing Good Commit Messages</h2>
        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
          <p className="mb-4">
            Good commit messages are important for maintaining a clear and useful revision history. Here are some best practices:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Be concise and specific</strong>: The first line should be a short summary (50 characters or less)
            </li>
            <li>
              <strong>Use the imperative mood</strong>: "Add feature" rather than "Added feature" or "Adds feature"
            </li>
            <li>
              <strong>Separate subject from body</strong>: Leave a blank line after the summary
            </li>
            <li>
              <strong>Explain what and why, not how</strong>: The code shows how the change was made
            </li>
          </ul>
        </div>
      </section>
      
      <section className="mb-8">
        <h2>Step-by-step Example</h2>
        <ol>
          <li>
            <p className="font-medium">First, ensure you have changes staged:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git status</pre>
            </div>
            <p>You should see staged changes ready to be committed.</p>
          </li>
          <li>
            <p className="font-medium">Create a commit with a short message:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git commit -m "Add hello.txt file"</pre>
            </div>
            <p>You should see output like:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">[main 1a2b3c4] Add hello.txt file
 1 file changed, 1 insertion(+)
 create mode 100644 hello.txt</pre>
            </div>
          </li>
          <li>
            <p className="font-medium">Create a commit with a more detailed message by omitting the -m flag:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git commit</pre>
            </div>
            <p>This will open your default editor where you can write a multi-line message:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">Add configuration file for project

- Sets default values for common parameters
- Includes documentation for config options
- Ensures backward compatibility with older versions</pre>
            </div>
          </li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2>Common Options</h2>
        <div className="grid gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">-a or --all</h3>
            <p className="m-0">Automatically stage all modified and deleted files (but not untracked files)</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git commit -a -m "Update documentation and fix typos"</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--amend</h3>
            <p className="m-0">Modify the most recent commit instead of creating a new one</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git commit --amend -m "Updated message for the previous commit"</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--no-verify</h3>
            <p className="m-0">Skip the pre-commit and commit-msg hooks</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git commit --no-verify -m "Quick fix"</pre>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2>What Goes into a Commit?</h2>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-500">
          <p>
            Each Git commit contains:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>A pointer to the snapshot of the content you staged</li>
            <li>The author's name and email</li>
            <li>The commit message you wrote</li>
            <li>Pointers to the commit(s) that came directly before it (its parent commits)</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h2>Next Steps</h2>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-900">
          <p className="m-0">
            After committing your changes locally, you might want to share them with others by pushing to a remote repository.
            Continue to the <Link href="/tutorials/git-push" className="text-blue-600 dark:text-blue-400 hover:underline">Git Push tutorial</Link> to learn how.
          </p>
        </div>
      </section>
    </article>
  );
}