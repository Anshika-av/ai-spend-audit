export function generateAudit({
  tool,
  plan,
  spend,
  teamSize,
  useCase,
}) {
  let recommendation = "";
  let savings = 0;
  let reason = "";

  // Team plan for solo users
  if (
    (plan.toLowerCase() === "team" ||
      plan.toLowerCase() === "business") &&
    Number(teamSize) <= 1
  ) {
    recommendation = "Downgrade to a cheaper individual plan";
    savings = spend * 0.5;

    reason =
      "You're paying for collaboration features that solo users typically don't need.";
  }

  // Enterprise for small teams
  else if (
    plan.toLowerCase() === "enterprise" &&
    Number(teamSize) < 10
  ) {
    recommendation = "Switch to a business/team plan";

    savings = spend * 0.4;

    reason =
      "Enterprise pricing usually makes sense only for larger organizations.";
  }

  // Coding-specific recommendation
  else if (
    useCase.toLowerCase() === "coding" &&
    tool.toLowerCase() === "chatgpt"
  ) {
    recommendation =
      "Consider Cursor or GitHub Copilot for coding workflows";

    savings = spend * 0.3;

    reason =
      "Developer-focused AI tools may offer better productivity per dollar.";
  }

  // Already optimized
  else {
    recommendation = "Your AI stack looks cost-efficient";

    savings = 0;

    reason =
      "No major overspending patterns were detected.";
  }

  return {
    recommendation,
    savings: Math.round(savings),
    annualSavings: Math.round(savings * 12),
    reason,
  };
}