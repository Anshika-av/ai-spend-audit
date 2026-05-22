import AuditForm from "@/components/AuditForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-6xl font-bold leading-tight">
          Audit Your AI Spend
        </h1>

        <p className="mt-6 text-xl text-zinc-400 max-w-2xl">
          Discover where your startup is overspending on AI tools
          and uncover instant monthly savings.
        </p>

        <AuditForm />
      </div>
    </main>
  );
}