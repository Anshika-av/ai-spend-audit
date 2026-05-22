export function generateAudit(data) {
  const spend = Number(data.spend);

  // ChatGPT Team overpriced for solo users
  if (
    data.tool === "ChatGPT" &&
    data.plan === "Team" &&
    Number(data.teamSize) <= 1
  ) {
    return {
      recommendation:
        "Switch from ChatGPT Team to ChatGPT Plus",

      savings: 60,

      annualSavings: 720,

      reason:
        "Team plans are designed for collaboration. Solo users typically get the same value from Plus."
    };
  }

  // Cursor Business too expensive
  if (
    data.tool === "Cursor" &&
    data.plan === "Business" &&
    spend > 40
  ) {
    return {
      recommendation:
        "Downgrade to Cursor Pro",

      savings: 25,

      annualSavings: 300,

      reason:
        "Most small teams don't fully utilize Business-only features."
    };
  }

  // Claude Pro alternative
  if (
    data.tool === "Claude" &&
    spend > 100
  ) {
    return {
      recommendation:
        "Consider mixed usage with ChatGPT Plus",

      savings: 30,

      annualSavings: 360,

      reason:
        "Many research and writing tasks can be split across lower-cost models."
    };
  }

  // default
  return {
    recommendation:
      "Your current setup looks efficient",

    savings: 0,

    annualSavings: 0,

    reason:
      "No major optimization opportunities detected based on your usage."
  };
}