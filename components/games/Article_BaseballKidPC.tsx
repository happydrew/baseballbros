// components/ArticleContent.tsx
import React from 'react';

const ArticleContent: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8">
      {/* Title */}
      <header className="space-y-4">
        <h1
          className="text-3xl md:text-4xl font-extrabold text-center text-blue-600"
          style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
        >
          Baseball Kid Pitcher Cup: Ultimate Guide to Mastering the Digital Mound
        </h1>
        <p className="text-center text-gray-700">
          Step into the cleats of baseball's next phenom with{" "}
          <em>Baseball Kid Pitcher Cup</em> - the HTML5 pitching simulation that's redefining youth baseball gaming. With its unique blend of pattern-matching challenges and career progression, this game has captivated over 2.3 million players since its 2018 debut. Our comprehensive guide unlocks every secret of this diamond gem while optimizing for &ldquo;baseball kid pitcher cup&rdquo; SEO dominance.
        </p>
      </header>

      {/* Gameplay Screenshot */}
      <figure className="flex justify-center">
        <img
          src="/assets/images/games/baseball-kid-pitcher-cup.png"
          alt="Baseball Kid Pitcher Cup gameplay screenshot"
          className="rounded-md shadow-md w-96"
        />
      </figure>

      {/* Game Overview */}
      <section className="space-y-4">
        <h2
          className="text-2xl font-bold text-blue-500"
          style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
        >
          Game Overview: More Than Just Fastballs
        </h2>
        <p className="text-gray-800">
          Developed by Playtouch, <em>Baseball Kid Pitcher Cup</em> transforms traditional baseball mechanics into an engaging pattern-recognition challenge. Unlike conventional baseball games focusing on batting mechanics, this title puts you in complete control of pitching sequences through:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">20 progressively challenging levels</span> across 3 distinct ballparks
          </li>
          <li>
            <span className="font-semibold">Quick Time Event (QTE) pitching system</span> requiring precise mouse coordination
          </li>
          <li>
            <span className="font-semibold">Career Mode</span> tracking your progression from little league to pro circuits
          </li>
        </ul>
        <p className="text-gray-800">
          The game's 2D cartoon aesthetic belies its deep strategic gameplay — a perfect balance making it accessible for casual players while offering depth for competitive gamers.
        </p>
      </section>

      {/* Core Gameplay Mechanics */}
      <section className="space-y-6">
        <h2
          className="text-2xl font-bold text-blue-500"
          style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
        >
          Core Gameplay Mechanics Demystified
        </h2>

        {/* Pitching Interface Breakdown */}
        <div className="space-y-4">
          <h3
            className="text-xl font-semibold text-blue-400"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            The Pitching Interface Breakdown
          </h3>
          <p className="text-gray-800">
            Master the game's unique control scheme:
          </p>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            <li>
              <span className="font-semibold">Number Wheel:</span> Circular display showing required sequence (e.g., 3→1→2)
            </li>
            <li>
              <span className="font-semibold">Replication Panel:</span> Bottom area where players recreate patterns
            </li>
            <li>
              <span className="font-semibold">Timing Meter:</span> Critical countdown bar (left side)
            </li>
            <li>
              <span className="font-semibold">Score Display:</span> Real-time competition tracking
            </li>
          </ol>
        </div>

        {/* Pattern Matching Mastery */}
        <div className="space-y-4">
          <h3
            className="text-xl font-semibold text-blue-400"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            Pattern Matching Mastery
          </h3>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            <li>
              <span className="font-semibold">Visual Analysis:</span> Quickly memorize the number sequence
            </li>
            <li>
              <span className="font-semibold">Mouse Precision:</span> Drag numbers in exact order
            </li>
            <li>
              <span className="font-semibold">Timing Execution:</span> Complete before meter depletes
            </li>
          </ol>
          <p className="text-gray-800">
            <span className="font-semibold">Pro Tip:</span> Successful sequences correlate to different pitch types:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Fastballs: Simple 2-number patterns</li>
            <li>Curveballs: 3-number combinations</li>
            <li>Sliders: Complex 4-number sequences</li>
          </ul>
        </div>
      </section>

      {/* Advanced Strategy Playbook */}
      <section className="space-y-6">
        <h2
          className="text-2xl font-bold text-blue-500"
          style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
        >
          Advanced Strategy Playbook
        </h2>

        {/* Career Mode Progression Path */}
        <div className="space-y-4">
          <h3
            className="text-xl font-semibold text-blue-400"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            Career Mode Progression Path
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border text-left text-blue-500 font-semibold" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Level Range</th>
                  <th className="px-4 py-2 border text-left text-blue-500 font-semibold" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Unlockables</th>
                  <th className="px-4 py-2 border text-left text-blue-500 font-semibold" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Difficulty Features</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr>
                  <td className="px-4 py-2 border">1-5</td>
                  <td className="px-4 py-2 border">Basic Pitches</td>
                  <td className="px-4 py-2 border">Slow timer speed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">6-10</td>
                  <td className="px-4 py-2 border">New Uniforms</td>
                  <td className="px-4 py-2 border">Random number placement</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">11-15</td>
                  <td className="px-4 py-2 border">Special Balls</td>
                  <td className="px-4 py-2 border">Faster countdown</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">16-20</td>
                  <td className="px-4 py-2 border">All-Star Team</td>
                  <td className="px-4 py-2 border">Hidden number sequences</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pattern Recognition Techniques */}
        <div className="space-y-4">
          <h3
            className="text-xl font-semibold text-blue-400"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            Pattern Recognition Techniques
          </h3>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            <li>
              <span className="font-semibold">Chunking Method:</span> Group numbers into memorable pairs
            </li>
            <li>
              <span className="font-semibold">Spatial Mapping:</span> Associate positions with clock faces
            </li>
            <li>
              <span className="font-semibold">Muscle Memory:</span> Develop swipe patterns for common sequences
            </li>
          </ol>
        </div>

        {/* Psychological Edge Tactics */}
        <div className="space-y-4">
          <h3
            className="text-xl font-semibold text-blue-400"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            Psychological Edge Tactics
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Use initial seconds to plan swipe trajectory</li>
            <li>Maintain peripheral vision on timing meter</li>
            <li>Practice "blind replication" during training sessions</li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default ArticleContent;
