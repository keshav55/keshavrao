// Blog posts data
export const posts = [
  {
    id: 'craft-work-invisible-work',
    title: 'Craft Work vs Invisible Work',
    date: '2025-08',
    content: `It shouldn't take 20 messages to find a flow with AI.

That's usually the case. Twenty messages to get output that satisfies you. By then you're drowning in context, the AI is making things up, and you're ready to cancel your subscription.

To speed the process, we really need to define the type of work AI systems are focused on.

Invisible work just needs to get done. Pull the emails. Search the codebase. Format the document. Fast, accurate, no explanation needed. I don't want to watch or correct, just give me results.

Craft work is different. There's no single right answer. Every decision shapes the outcome. If AI jumps to conclusions, I spend more time correcting than creating. This is why AI writing sounds soulless, why generated music feels empty, why no code platforms still require so much tweaking.`
  },
  {
    id: '2am-flow',
    title: 'Flow State',
    date: '2025-06',
    content: `Long day, you're about to sleep, then you put on that minimal afters house set and something kicks in at this time of night. You're in this undefeatable flow state. I feel unrecognizable at these times. My brain doesn't feel scattered. Everything compounds. One task. Time disappears. Time expands. Beautiful feeling. Freeing feeling. Makes everything worth it.

Four Claude windows open. No Chrome tabs. No context switching. Just the set playing and this pure interface where I talk to a team. The conversation becomes the interface. Not jumping between windows, not breaking concentration. Just conversation and execution. The music keeps the rhythm, the agents handle the tasks.

This is what computing should feel like. Talk to your team, things get done. No clicking through menus or searching for buttons. Pure intent to action.

Everyone in SF is finding their groove with agents right now. Some people are scared, some are building, some are watching. But the interesting part is how personal this gets. Everyone discovering their own way to work with these things. For me it's Archie Hamilton at 2am with 4 Claude instances running different tasks. For someone else morning coffee and cursor. The city feels different when everyone's experimenting at the same time. This energy of people just trying things, seeing what sticks.

The gap between thought and reality gets smaller every week. Right now I have 4 agents open. This is flow state. Not jumping between windows, not breaking concentration. Just conversation and execution.

At Atris Labs we're building for exactly this. Making this flow state universal. Not just for developers or tech people. Everyone. Because everyone has ideas stuck in their head. Everyone wants to move faster. Everyone's tired of clicking through interfaces when they could just talk.

The market is everyone who thinks.

Back to 2am. The set still playing. Another task complete. Another idea becomes real. No ceremony. No friction. Just flow.`
  }
];

export function getSortedPostsData() {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
} 