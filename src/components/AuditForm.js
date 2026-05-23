"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/auditEngine";

export default function AuditForm() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("");

  const [result, setResult] = useState(null);

  // Load saved form data
  useEffect(() => {
    const savedData = localStorage.getItem("audit-form");

    if (savedData) {
      const parsed = JSON.parse(savedData);

      setTool(parsed.tool || "");
      setPlan(parsed.plan || "");
      setSpend(parsed.spend || "");
      setTeamSize(parsed.teamSize || "");
      setUseCase(parsed.useCase || "");
    }
  }, []);

  // Save form automatically
  useEffect(() => {
    localStorage.setItem(
      "audit-form",
      JSON.stringify({
        tool,
        plan,
        spend,
        teamSize,
        useCase,
      })
    );
  }, [tool, plan, spend, teamSize, useCase]);

  return (
    <div className="mt-12 space-y-4 max-w-xl">
      {/* Tool Dropdown */}
      <select
        value={tool}
        onChange={(e) => setTool(e.target.value)}
        className="w-full rounded-lg bg-zinc-900 p-4"
      >
        <option value="">Select AI Tool</option>
        <option value="ChatGPT">ChatGPT</option>
        <option value="Claude">Claude</option>
        <option value="Cursor">Cursor</option>
        <option value="Copilot">GitHub Copilot</option>
        <option value="Gemini">Gemini</option>
      </select>

      {/* Plan Dropdown */}
      <select
        value={plan}
        onChange={(e) => setPlan(e.target.value)}
        className="w-full rounded-lg bg-zinc-900 p-4"
      >
        <option value="">Select Plan</option>
        <option value="Pro">Pro</option>
        <option value="Team">Team</option>
        <option value="Business">Business</option>
        <option value="Enterprise">Enterprise</option>
      </select>

      {/* Monthly Spend */}
      <input
        type="number"
        placeholder="Monthly Spend ($)"
        value={spend}
        onChange={(e) => setSpend(e.target.value)}
        className="w-full rounded-lg bg-zinc-900 p-4"
      />

      {/* Team Size */}
      <input
        type="number"
        placeholder="Team Size"
        value={teamSize}
        onChange={(e) => setTeamSize(e.target.value)}
        className="w-full rounded-lg bg-zinc-900 p-4"
      />

      {/* Use Case */}
      <select
        value={useCase}
        onChange={(e) => setUseCase(e.target.value)}
        className="w-full rounded-lg bg-zinc-900 p-4"
      >
        <option value="">Primary Use Case</option>
        <option value="coding">Coding</option>
        <option value="writing">Writing</option>
        <option value="research">Research</option>
        <option value="mixed">Mixed</option>
      </select>

      {/* Generate Button */}
      <button
        onClick={() => {
          const audit = generateAudit({
            tool,
            plan,
            spend: Number(spend),
            teamSize,
            useCase,
          });

          setResult(audit);
        }}
        className="rounded-lg bg-white px-6 py-4 text-black font-semibold hover:bg-zinc-200"
      >
        Generate Audit
      </button>
      {result && (
  <div className="mt-10 space-y-6">

    {/* Savings Hero Card */}
    <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8">
      <p className="text-sm uppercase tracking-wide text-green-400">
        Estimated Savings
      </p>

      <h2 className="mt-3 text-6xl font-bold text-green-400">
        ${result.savings}
        <span className="text-2xl text-green-300">
          /month
        </span>
      </h2>

      <p className="mt-3 text-zinc-300">
        Potential annual savings:
        {" "}
        <span className="font-semibold text-white">
          ${result.annualSavings}
        </span>
      </p>
    </div>

    {/* Recommendation Card */}
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">
          Recommendation
        </h3>

        <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
          Optimization Found
        </div>
      </div>

      <p className="mt-6 text-xl text-white">
        {result.recommendation}
      </p>

      <p className="mt-4 leading-7 text-zinc-400">
        {result.reason}
      </p>
    </div>

    {/* Credex CTA */}
    <div className="rounded-2xl border border-zinc-800 bg-black p-8">
      <p className="text-sm uppercase tracking-wide text-zinc-500">
        Next Step
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Reduce Your AI Infrastructure Costs
      </h3>

      <p className="mt-4 text-zinc-400">
        Credex helps startups access discounted AI credits
        for ChatGPT, Claude, Cursor, Gemini, and more.
      </p>

      <button className="mt-6 rounded-xl bg-white px-6 py-4 font-semibold text-black hover:bg-zinc-200">
        Book Credex Consultation
      </button>
    </div>

  </div>
)}
    </div>
  );
}