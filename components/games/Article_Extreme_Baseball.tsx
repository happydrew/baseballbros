import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const ExtremeBaseballIntro: React.FC = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Extreme Baseball</h1>
          <p className="text-xl">A Revolutionary Twist on America's Pastime</p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/assets/images/games/extreme-baseball.png"
              alt="Extreme Baseball Logo"
              width={400}
              height={200}
              className="rounded-md"
            />
          </div>
        </header>

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-lg leading-relaxed">
            <strong>Extreme Baseball</strong> is a unique and dynamic game that takes traditional baseball and injects it with innovative twists.
            The game features multiple modes—from the intense, simultaneous play of Double Diamond Baseball to a challenging physics-based puzzle mode—providing players with varied and exciting experiences.
          </p>
        </section>

        {/* Gameplay Overview */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Gameplay Overview</h2>
          <p className="text-lg leading-relaxed mb-4">
            Extreme Baseball offers two distinct gameplay modes:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Double Diamond Baseball:</strong> Both teams play on the field simultaneously. Each team runs the bases in opposite directions with dual home plates, creating a fast-paced and competitive atmosphere.
            </li>
            <li>
              <strong>Physics Puzzle Mode:</strong> In this mode, players use physics-based mechanics to aim and launch baseballs at targets. Utilize environmental elements like walls and explosives to create destructive combos and score big.
            </li>
          </ul>
        </section>

        {/* Controls */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Controls</h2>
          <p className="text-lg leading-relaxed mb-4">
            The controls adapt to each mode for intuitive gameplay:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Double Diamond Baseball:</strong> Traditional baseball controls apply. Use arrow keys or a gamepad to navigate, and designated buttons to swing or pitch.
            </li>
            <li>
              <strong>Physics Puzzle Mode:</strong> Aim using a mouse or touchscreen and click/tap to launch the baseball. Timing and precision are key.
            </li>
          </ul>
        </section>

        {/* Game Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Game Features & Innovations</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Extreme Baseball</strong> stands out with its blend of classic and modern elements:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Innovative Gameplay Modes:</strong> Enjoy both the competitive spirit of Double Diamond Baseball and the strategic challenges of the Physics Puzzle Mode.
            </li>
            <li>
              <strong>Immersive Visuals:</strong> Experience detailed graphics that bring the baseball field and urban environments to life.
            </li>
            <li>
              <strong>Competitive Leaderboards:</strong> Track your high scores and compete with players worldwide.
            </li>
            <li>
              <strong>Dynamic Levels:</strong> Each mode offers increasing challenges to keep gameplay fresh and engaging.
            </li>
          </ul>
        </section>

        {/* Strategies */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Strategies for Success</h2>
          <p className="text-lg leading-relaxed mb-4">
            To excel in <strong>Extreme Baseball</strong>, consider these expert strategies:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Master Your Timing:</strong> Focus on precise timing when swinging or pitching to maximize your impact.
            </li>
            <li>
              <strong>Utilize Environmental Elements:</strong> In Physics Puzzle Mode, experiment with bouncing the ball off walls or using explosives to create chain reactions.
            </li>
            <li>
              <strong>Adapt Your Strategy:</strong> In Double Diamond Baseball, adjust your tactics based on the opposing team’s movements for a competitive edge.
            </li>
            <li>
              <strong>Practice Consistently:</strong> Regular play will improve your precision and strategic thinking in both modes.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <footer className="mt-8 text-center">
          <p className="text-xl font-medium">
            Experience the future of sports with <strong>Extreme Baseball</strong> and redefine what you know about America's favorite pastime!
          </p>
        </footer>
      </div>
    </>
  );
};

export default ExtremeBaseballIntro;
