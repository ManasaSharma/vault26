# AI Lab: learn first, build in small steps

The portfolio shell is ready, but the first AI app has not been built. The learner wants diagrams/flowcharts and a small understanding check before each build step. Do not generate the full app ahead of the learner.

## Visibility

All editable content and the switch are in public/data.json:
- featureFlags.aiLab is false until the first app is ready.
- aiLab.projects starts empty.
- A section and navigation link appear only when the flag is true AND at least one project has status "published", an id, a title, and a valid HTTPS demoUrl.
- This is a presentation flag, not access control or a secret. A valid URL does not automatically prove a deployment works: test the demo before publishing.

After the first demo works, add its actual details to aiLab.projects:
id, title, description, status ("published"), demoUrl, optional codeUrl, optional lessons (array of strings).
Then enable featureFlags.aiLab and redeploy the portfolio. Draft entries remain hidden.

## First project: Text Summarizer

Build later as a separate repository and Vercel app. No AI dependency, provider account, API key, or paid service is introduced by this portfolio change.

Learning sequence:
1. Input, instruction/prompt, model, output. Diagram plus a learner-written prompt.
2. Browser → server → AI service → server → browser. Explain why credentials stay on the server.
3. UI only: text area, summarize button, loading/error/results. Use clearly labeled sample output, no pretend live AI.
4. Server request/response and validation. Learner explains the request before writing the handler.
5. Pick a provider and connect a real model; verify current official docs at that time.
6. Evaluate summaries for faithful facts, missing context, and invented claims; handle errors and usage limits.
7. Deploy, test, then publish the project in AI Lab with a short "What I learned" note.

For each step: diagram → plain-language explanation → one small exercise → learner explanation → targeted feedback → a small build task once understood. Progress comes from demonstrated understanding, not just saying "okay". If unclear, teach with another example and let the learner retry.
