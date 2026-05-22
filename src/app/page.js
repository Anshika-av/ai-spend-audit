import AuditForm from "@/components/AuditForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <div className="inline-block rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400">
            Free AI Spend Optimization Audit
          </div>

          <h1 className="mt-6 text-6xl font-bold leading-tight">
            Stop Overpaying
            <br />
            for AI Tools
          </h1>

          <p className="mt-6 text-xl text-zinc-400">
            Instantly analyze your startup's AI stack,
            uncover unnecessary spend, and discover
            cheaper alternatives in under 30 seconds.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
          <AuditForm />
        </div>
      </div>
    </main>
  );
}
<p className="mt-16 text-center text-sm text-zinc-600">
  Built for startup teams using ChatGPT, Claude,
  Cursor, Copilot, Gemini, and more.
</p>