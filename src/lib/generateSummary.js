export function generateSummary(audit) {
  return `
Your current AI tooling setup shows potential overspending of approximately $${audit.savings} per month.

Based on your selected plan and team size, your stack appears slightly over-provisioned for your usage needs. Switching to a lower-cost plan or optimizing collaboration features could reduce unnecessary expenses while maintaining productivity.

Credex can further help reduce costs through discounted AI infrastructure credits and optimized vendor pricing.
  `;
}