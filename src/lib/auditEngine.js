export function generateAudit(data) {
  const spend = Number(data.spend);
  const teamSize = Number(data.teamSize);

  // ChatGPT Team for solo users
  if (
    data.tool === "ChatGPT" &&
    data.plan === "Team" &&
    teamSize <= 1
  ) {
    return {
      recommendation:
        "Switch to ChatGPT Plus",

      savings: 60,

      annualSavings: 720,

      reason:
        "Team plans are optimized for collaboration, not solo usage."
    };
  }

  // Cursor Business overkill
  if (
    data.tool === "Cursor" &&
    data.plan === "Business" &&
    teamSize < 3
  ) {
    return {
      recommendation:
        "Downgrade to Cursor Pro",

      savings: 25,

      annualSavings: 300,

      reason:
        "Small teams rarely need advanced admin controls included in Business."
    };
  }

  // Claude heavy spend
  if (
    data.tool === "Claude" &&
    spend > 150
  ) {
    return {
      recommendation:
        "Mix Claude with ChatGPT Plus",

      savings: 40,

      annualSavings: 480,

      reason:
        "Research and writing workflows can often be split across lower-cost tools."
    };
  }

  // Copilot Team unnecessary
  if (
    data.tool === "Copilot" &&
    data.plan === "Business" &&
    teamSize <= 2
  ) {
    return {
      recommendation:
        "Use GitHub Copilot Individual",

      savings: 30,

      annualSavings: 360,

      reason:
        "Business features provide limited ROI for very small engineering teams."
    };
  }

  // default
  return {
    recommendation:
      "Your AI stack already looks cost-efficient",

    savings: 0,

    annualSavings: 0,

    reason:
      "No major optimization opportunities detected."
  };
}