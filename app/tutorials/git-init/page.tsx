import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Git Init Tutorial",
  description: "Learn how to initialize a Git repository",
};

export default function GitInitTutorial() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Git Init Tutorial</h1>
      
      <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg font-medium m-0">
          The <code>git init</code> command creates a new Git repository. It transforms the current directory
          into a Git repository or initializes a new one in a specified directory.
        </p>
      </div>
      
      <section className="mb-8">
        <h2>Basic Usage</h2>
        <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
          <pre className="whitespace-pre-wrap m-0">git init</pre>
        </div>
        <p>
          This command creates a new subdirectory named <code>.git</code> that 
          contains all of your necessary repository files — a Git repository skeleton.
        </p>
      </section>
      
      <section className="mb-8">
        <h2>Step-by-step Example</h2>
        <ol>
          <li>
            <p className="font-medium">Create a new directory for your project:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">mkdir my-new-project
cd my-new-project</pre>
            </div>
          </li>
          <li>
            <p className="font-medium">Initialize the Git repository:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git init</pre>
            </div>
            <p>You should see output like:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">Initialized empty Git repository in /path/to/my-new-project/.git/</pre>
            </div>
          </li>
          <li>
            <p className="font-medium">Verify that the repository was created:</p>
            <div className="bg-slate-900 text-white p-4 rounded-md font-mono mb-4 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">ls -la</pre>
            </div>
            <p>You should see a <code>.git</code> directory listed.</p>
          </li>
        </ol>
      </section>
      
      <section className="mb-8">
        <h2>Common Options</h2>
        <div className="grid gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--bare</h3>
            <p className="m-0">Create a bare repository (without a working directory)</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git init --bare my-repo.git</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--quiet or -q</h3>
            <p className="m-0">Only print error and warning messages</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git init -q</pre>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2">--template=&lt;template-directory&gt;</h3>
            <p className="m-0">Specify the directory from which templates will be used</p>
            <div className="bg-slate-900 text-white p-3 rounded-md font-mono mt-2 overflow-x-auto">
              <pre className="whitespace-pre-wrap m-0">git init --template=/path/to/template</pre>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2>Common Mistakes</h2>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4 border-l-4 border-red-500">
          <h3 className="text-lg font-bold">Initializing a Git repository inside another Git repository</h3>
          <p className="m-0">This creates nested Git repositories (submodules), which can be confusing for beginners.</p>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
          <h3 className="text-lg font-bold">Forgetting to create a .gitignore file</h3>
          <p className="m-0">It's a good practice to create a .gitignore file early to avoid committing unwanted files like build artifacts, dependencies, and sensitive information.</p>
        </div>
      </section>
      
      <section>
        <h2>Next Steps</h2>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-900">
          <p className="m-0">
            After initializing your repository, you'll want to add files to it and make your first commit.
            Continue to the <a href="/tutorials/git-add" className="text-blue-600 dark:text-blue-400 hover:underline">Git Add tutorial</a> to learn how.
          </p>
        </div>
      </section>
    </article>
  );
}