export const CONTACT_EMAIL = "hello@hizen.ai";

export const site = {
  name: "Hizen",
  headline: "Show Hizen how the work gets done. It handles it from there.",
  subtext:
    "Hizen is an intelligence layer on top of your browser that learns the steps your team takes, the context they use, and the decisions they make — and then does the work in their browser, without anyone having to build or deploy an agent.",
  mailtoHref: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Let's talk about a workflow"
  )}`,
};
