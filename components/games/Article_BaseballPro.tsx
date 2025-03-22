// components/ArticleContent.tsx
import React from 'react';
import Image from 'next/image';

const ArticleContent: React.FC = () => {
  return (
    <article className="max-w-4xl w-full mx-auto p-6 bg-white rounded-lg shadow-md space-y-8">
      {/* Title */}
      <header className="space-y-4">
        <h1
          className="text-3xl md:text-4xl font-extrabold text-center text-blue-600"
          style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
        >
          Mastering Baseball Pro: Your Ultimate Guide to Dominating the Digital Diamond
        </h1>
        <p className="text-center text-gray-700">
          Step up to the plate with <em>Baseball Pro</em>, the browser-based sensation redefining America&apos;s favorite pastime for the digital generation. With over 900,000 monthly active players and a 4.8/5 rating on CrazyGames, this HTML5 powerhouse combines arcade excitement with strategic depth. Our guide unlocks pro-level techniques while optimizing for &quot;baseball pro&quot; SEO dominance.
        </p>
      </header>

      {/* Header Image */}
      <Image
        src="/assets/images/games/baseball-pro.png"
        alt="Baseball Pro header image"
        width={300}
        height={300}
      />

      {/* Game Overview Section */}
      <section className="space-y-4">
        <h2
          className="text-2xl font-bold text-blue-500"
          style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
        >
          ⚾ Game Overview: More Than Just a Home Run Derby
        </h2>
        <p className="text-gray-800">
          Developed by Code This Lab, <em>Baseball Pro</em> distills baseball&apos;s essence into thrilling 1-button gameplay without sacrificing strategic nuance. Unlike traditional baseball simulations, this title focuses on:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">Instant gratification:</span> 30-second matches perfect for mobile play
          </li>
          <li>
            <span className="font-semibold">Skill-based progression:</span> with 12 unlockable stadiums
          </li>
          <li>
            <span className="font-semibold">Global leaderboards:</span> tracking power hitters worldwide
          </li>
          <li>
            <span className="font-semibold">Realistic ball physics:</span> creating unique trajectories each swing
          </li>
        </ul>
        <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600">
          “The game looks and feels like real baseball - the animations are dead-on without looking canned” - GameSpot
        </blockquote>
      </section>

      {/* Core Gameplay Mechanics Section */}
      <section className="space-y-6">
        <h2
          className="text-2xl font-bold text-blue-500"
          style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
        >
          🎮 Core Gameplay Mechanics Decoded
        </h2>

        {/* The Art of Perfect Timing */}
        <div className="space-y-4">
          <h3
            className="text-xl font-semibold text-blue-400"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            The Art of Perfect Timing
          </h3>
          <p className="text-gray-800">
            Master the game&apos;s deceptively simple control scheme:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              <span className="font-semibold">Single-button input:</span> (spacebar/mouse click) for universal accessibility
            </li>
            <li>
              <span className="font-semibold">Three swing phases:</span>
              <ul className="list-disc list-inside ml-6">
                <li>Early (power penalty)</li>
                <li>Sweet Spot (max distance)</li>
                <li>Late (ground ball risk)</li>
              </ul>
            </li>
          </ul>
          <p className="text-gray-800">
            <span className="font-semibold">Pro Tip:</span> Watch the pitcher&apos;s release point rather than the ball for better timing.
          </p>
        </div>

        {/* Progressive Difficulty Curve */}
        <div className="space-y-4">
          <h3
            className="text-xl font-semibold text-blue-400"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            Progressive Difficulty Curve
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border text-left text-blue-500 font-semibold" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                    Level
                  </th>
                  <th className="px-4 py-2 border text-left text-blue-500 font-semibold" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                    Pitcher Speed
                  </th>
                  <th className="px-4 py-2 border text-left text-blue-500 font-semibold" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                    Ball Types
                  </th>
                  <th className="px-4 py-2 border text-left text-blue-500 font-semibold" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                    Environmental Factors
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr>
                  <td className="px-4 py-2 border">1-3</td>
                  <td className="px-4 py-2 border">65 mph</td>
                  <td className="px-4 py-2 border">Straight</td>
                  <td className="px-4 py-2 border">Daytime</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">4-6</td>
                  <td className="px-4 py-2 border">72 mph</td>
                  <td className="px-4 py-2 border">Curveballs</td>
                  <td className="px-4 py-2 border">Evening lighting</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">7-9</td>
                  <td className="px-4 py-2 border">79 mph</td>
                  <td className="px-4 py-2 border">Sliders</td>
                  <td className="px-4 py-2 border">Wind effects</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">10-12</td>
                  <td className="px-4 py-2 border">86 mph+</td>
                  <td className="px-4 py-2 border">Knuckleballs</td>
                  <td className="px-4 py-2 border">Rain simulation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advanced Strategy Playbook */}
      <section className="space-y-6">
        <h2
          className="text-2xl font-bold text-blue-500"
          style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
        >
          🏆 Advanced Strategy Playbook
        </h2>

        {/* Hitting Matrix */}
        <div className="space-y-4">
          <h3
            className="text-xl font-semibold text-blue-400"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            Hitting Matrix for Power Players
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md text-gray-800 overflow-x-auto">
            <tbody>
              <tr>
                <td className="px-4 py-2 border">SWING TIMING</td>
                <td className="px-4 py-2 border">BALL TYPE</td>
                <td className="px-4 py-2 border">OPTIMAL RESULT</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Early</td>
                <td className="px-4 py-2 border">Fastball</td>
                <td className="px-4 py-2 border">Right-field line drive</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Perfect</td>
                <td className="px-4 py-2 border">Curveball</td>
                <td className="px-4 py-2 border">Center-field home run</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Late</td>
                <td className="px-4 py-2 border">Slider</td>
                <td className="px-4 py-2 border">Left-field gap shot</td>
              </tr>
            </tbody>
          </pre>
        </div>

        {/* Mental Game Mastery */}
        <div className="space-y-4">
          <h3
            className="text-xl font-semibold text-blue-400"
            style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}
          >
            Mental Game Mastery
          </h3>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            <li>
              <span className="font-semibold">Pattern recognition:</span> Track pitcher sequences over 3-pitch cycles
            </li>
            <li>
              <span className="font-semibold">Environmental adaptation:</span> Adjust for wind direction in later levels
            </li>
            <li>
              <span className="font-semibold">Risk management:</span> Sacrifice distance for contact in crucial situations
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
};

export default ArticleContent;
