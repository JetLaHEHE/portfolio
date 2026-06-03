export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-6 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl text-center text-sm text-zinc-500 dark:text-zinc-500">
        <p>&copy; {new Date().getFullYear()} John Jethro Agatep. All rights reserved.</p>
      </div>
    </footer>
  );
}
