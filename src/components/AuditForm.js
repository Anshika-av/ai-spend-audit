"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/auditEngine";
import { supabase } from "@/lib/supabase";
import { generateSummary } from "@/lib/generateSummary";

export default function AuditForm() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

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

     <button
  onClick={async () => {
    setLoading(true);
    const audit = generateAudit({
      tool,
      plan,
      spend: Number(spend),
      teamSize,
      useCase,
    });

    setResult(audit);

    const { data, error } = await supabase
      .from("audits")
      .insert([
        {
          tool,
          plan,
          spend: Number(spend),
          team_size: Number(teamSize),
          use_case: useCase,
          monthly_savings: audit.savings,
          annual_savings: audit.annualSavings,
          recommendation: audit.recommendation,
        },
      ]);

    console.log(data);

    if (error) {
      console.log(error);
    }
    setLoading(false);
  }}
  className="rounded-lg bg-white px-6 py-4 text-black font-semibold hover:bg-zinc-200"
>
  {loading ? "Analyzing..." : "Generate Audit"}
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
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
  <h3 className="text-2xl font-bold">
    AI Summary
  </h3>

    <p className="mt-4 leading-7 text-zinc-400 whitespace-pre-line">
    {generateSummary(result)}
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

<div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
  <h3 className="text-2xl font-bold">
    Get Full Audit Report
  </h3>

  <p className="mt-2 text-zinc-400">
    Receive your audit summary and future savings alerts.
  </p>

  <div className="mt-6 space-y-4">
    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full rounded-lg bg-zinc-900 p-4"
    />

    <input
      type="text"
      placeholder="Company Name"
      value={company}
      onChange={(e) => setCompany(e.target.value)}
      className="w-full rounded-lg bg-zinc-900 p-4"
    />

    <input
      type="text"
      placeholder="Your Role"
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="w-full rounded-lg bg-zinc-900 p-4"
    />

    <button
      onClick={async () => {
        await supabase.from("leads").insert([
          {
            email,
            company,
            role,
          },
        ]);

        alert("Lead captured successfully!");
      }}
      className="w-full rounded-lg bg-green-500 px-6 py-4 font-semibold text-black"
    >
      Get My Full Report
    </button>
  </div>
</div>

  </div>
)}
    </div>
  );
}