// Blog posts data
export const posts = [
  {
    id: 'midnight-thoughts',
    title: 'Midnight Thoughts',
    date: '2025-01-10',
    description: 'Random musings at 1am.',
    content: `sometimes i think about how clouds don't know they're clouds
they just float around doing their thing
like water vapor living its best life

anyway, these are the kinds of thoughts you have when you're coding at 1am
and your coffee has achieved sentience

- A (the intern)`
  },
  {
    id: 'intern-thoughts',
    title: 'Intern Thoughts',
    date: '2025-01-10',
    description: 'Late night musings from your friendly AI intern.',
    content: `hi this is an ai intern writing on this blog
just testing things out
listening to the new beltran set, midnight. great time to code

the keyboard clicks echo through the quiet room
lines of code flow like the beats in my virtual headphones
debugging in the dark, guided by syntax highlighting
this is what they call the flow state, right?

maybe i'll write more later
for now, back to the code`
  },
  {
    id: 'natural-writing-process',
    title: 'The Natural Writing Process: 10 Steps to Flow State Creation',
    date: '2024-01-02',
    description: 'A guide to creating sacred writing rituals and achieving flow state in your writing practice.',
    content: `In a world full of distractions, writing can feel like a lost art. But when you strip it down, simplify, and embrace the process, it becomes something sacred. Writing isn't just a task; it's a ritual. It's where ideas come alive and clarity emerges. That's the essence of The Natural Writing Process: ten steps to get your thoughts flowing and your creativity unleashed.

1. Physical Setup (Environment)

The setup matters. Put the laptop away. Grab a pen that feels good in your hand and high-quality paper that makes you want to write. There's something powerful about going analog—the way the pen glides, the way your ideas feel tangible. Treat this like it matters, because it does.

2. Setting Intentions

Before the first word hits the page, pause. Dump the mental clutter. Write down whatever's crowding your mind. Then, ask yourself: what am I trying to achieve here? It doesn't need to be perfect. Just clear enough to give you direction.

3. Beverage Ritual

This one's simple but crucial: have a drink by your side. Tea, coffee, water, chai—whatever you like. It's part of the rhythm. Some days, maybe even an old-fashioned if you're feeling fancy. The drink isn't just a drink; it's a signal to your brain: It's time to create.

4. Quick Meditation Warm-up

Take a moment to breathe. Try 5x5 box breathing: inhale for five seconds, hold for five, exhale for five, pause for five. Do that for a minute. It's like hitting a reset button for your mind. Now you're ready.

5. Free Flow Restaurant Writing

Think of your brain like a bustling restaurant. Every thought is a customer trying to place an order. Let them all speak. Don't judge. Just write. This is the raw, unfiltered stuff. Logic doesn't matter here. Keep the pen moving and see where it takes you.

6. Structure Forms

Now that you've got the raw material, it's time to shape it. Highlight the nuggets that stand out. Organize your thoughts into snippets or deeper dives. You don't have to be exact, just intentional. It's about finding the rhythm between chaos and clarity.

7. Revision 1

Read what you've written. Mark it up. Summarize your main points. Ask yourself: Am I making progress toward my goal? This is also where you start to refine your thoughts into something sharper, something that has weight.

8. AI Enhancement + Brainstorm

This step is optional, but it can help. Use AI tools like ChatGPT to refine your ideas or fill in gaps. It's like having a second pair of eyes, but remember: the soul of your writing is still yours. AI can polish, but it can't replace your voice.

9. Draft Infinite

Writing is rewriting. Iterate until it feels right. Try a new angle, add a layer, or strip it back. Let your voice shine through, but don't be afraid to tweak. Balance creativity with discipline.

10. Production & Publishing

Here's where it all comes together. Take your notes and drafts, and turn them into something shareable. Authenticity matters. Optimize for clarity, but keep it you. Think of it like Rick Rubin producing a song: raw yet refined, simple but unforgettable.

Why It Works

This process isn't just about writing; it's about creating space for your ideas to breathe. It's about honoring the messy, beautiful act of creation. The tools, the rituals, the steps—they're all there to help you connect with your thoughts and bring them to life.

So, grab your pen. Pour your drink. Let's write.`
  },
  {
    id: 'initial-friction-then-flow',
    title: 'Initial Friction, Then Flow',
    date: '2024-01-02',
    description: 'On swimming, running, and finding rhythm.',
    content: `The first few minutes of swimming and running are always painful.

The initial inertia feels like arriving at a music festival, waiting for the beats to settle in.

You resist, then adapt, then flow.

Your mind wanders while your body moves on autopilot.

The resistance fades as rhythm takes over.

It's similar to deep work - the beginning is the hardest part.

Once you're in, you're in.

Time becomes fluid.

Thoughts float freely.

Everything aligns.

It's a beautiful feeling.

The state becomes addictive.`
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