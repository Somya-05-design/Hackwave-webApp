# Hackwave-webApp
A production-minded, hackathon-ready system that refines raw product requirements using collaborating AI agents.

Key Features

Role-based agents: Collector, Critic, Feasibility, Security, Mediator, and Visualizer.

Time-bounded debate: Automatic convergence with a hard cap (≤ 120 seconds).

Feedback aggregation: Weighted synthesis into a single, actionable requirement spec.

Auto-visualization: Generates flowcharts/sequence diagrams from the final spec.

API + UI: FastAPI backend with REST/WebSocket; Next.js frontend for live debates.

Optional integrations: Pull user stories from Trello (lightweight) or Jira (enterprise).

Agents (Default Roles)

Collector: Normalizes input into a structured spec template.

Critic: Flags ambiguity, edge cases, missing acceptance criteria.

Feasibility: Checks technical complexity, timelines, dependencies.

Security: Enforces auth/privacy/compliance considerations.

Mediator: Enforces time cap, resolves conflicts, produces a single draft.

Visualizer: Emits Mermaid/PlantUML representing the agreed flow.
