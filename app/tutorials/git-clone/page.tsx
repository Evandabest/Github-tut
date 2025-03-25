import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Git Clone Tutorial",
  description: "Learn how to clone existing repositories to your local machine",
};

export default function GitCloneTutorial() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Git Clone Tutorial</h1>
      
      <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg font-medium m-0">
          The <code>git clone</code> command creates a copy of an existing Git repository. It's used to download a repository from a remote source,
          typically a platform like GitHub, GitLab, or Bitbucket.
        </p>
      </div>
      
      <section className="mb-8">
        <h2>Basic Usage</h2>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
          <pre className="whitespace-pre-wrap m-0">git clone &lt;repository-url&gt;</pre>
        </div>
        <p>
          This command copies the remote repository to your local machine, creating a new directory
          with the same name as the repository.
        </p>
      </section>
      
      <section className="mb-8">
        <h2>Step-by-step Example</h2>
        <ol>
          <li>
            <p className="font-medium">Navigate to the directory where you want to clone the repository:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">cd ~/projects</pre>
            </div>
          </li>
          <li>
            <p className="font-medium">Clone the repository:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git clone https://github.com/username/repository.git</pre>
            </div>
            <p>You should see output showing the download progress:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">Cloning into 'repository'...
remote: Enumerating objects: 123, done.
remote: Counting objects: 100% (123/123), done.
remote: Compressing objects: 100% (100/100), done.
remote: Total 123 (delta 23), reused 123 (delta 23), pack-reused 0
Receiving objects: 100% (123/123), 10.12 MiB | 5.10 MiB/s, done.
Resolving deltas: 100% (23/23), done.</pre>
            </div>
          </li>
          <li>
            <p className="font-medium">Navigate into the cloned repository:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">cd repository</pre>
            </div>
          </li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2>Common Options</h2>
        <div className="grid gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--branch &lt;name&gt; or -b &lt;name&gt;</h3>
            <p className="m-0">Clone a specific branch instead of the default branch</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git clone -b dev https://github.com/username/repository.git</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--depth &lt;depth&gt;</h3>
            <p className="m-0">Create a shallow clone with a limited number of commits</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git clone --depth=1 https://github.com/username/repository.git</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Clone to a specific directory</h3>
            <p className="m-0">Clone into a specific directory instead of using the repository name</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git clone https://github.com/username/repository.git my-project</pre>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2>Common Use Cases</h2>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg mb-4 border-l-4 border-indigo-500">
          <h3 className="text-lg font-bold">Cloning from different protocols</h3>
          <p className="m-0">Git supports several protocols including HTTPS, SSH, and Git protocol.</p>
          <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
            <pre className="whitespace-pre-wrap m-0"># HTTPS
git clone https://github.com/username/repository.git

# SSH
git clone git@github.com:username/repository.git</pre>
          </div>
        </div>
      </section>
      
      <section>
        <h2>Next Steps</h2>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-900">
          <p className="m-0">
            After cloning a repository, you might want to make changes and add them to the repository.
            Continue to the <Link href="/tutorials/git-add" className="text-blue-600 dark:text-blue-400 hover:underline">Git Add tutorial</Link> to learn how.
          </p>
        </div>
      </section>
    </article>
  );
}