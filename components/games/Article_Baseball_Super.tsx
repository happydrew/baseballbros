import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const HomerCity3DIntro: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Homer City 3D</h1>
        <p className="text-xl">
          A unique fusion of baseball and urban destruction.
        </p>
        <div className="mt-6 flex justify-center">
          <Image
            src="/assets/images/games/homer-city-3d.png"
            alt="Homer City 3D Logo"
            width={400}
            height={200}
            className="rounded-md"
          />
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-lg leading-relaxed">
          <strong>Homer City 3D</strong> is a thrilling baseball game that challenges you to test your batting skills in a dynamic urban setting. Developed by Nimmi Developers, the game combines the excitement of baseball with the unique challenge of breaking glass windows in a bustling cityscape.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Gameplay Overview</h2>
        <p className="text-lg leading-relaxed mb-4">
          In <strong>Homer City 3D</strong>, the objective is to hit baseballs at city buildings to shatter as many windows as possible. Set against a backdrop of towering urban structures, every broken window boosts your score, and competitive modes allow you to challenge others for the highest score.
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Accuracy Over Power:</strong> Focus on precision and timing to maximize your window-breaking potential.
          </li>
          <li>
            <strong>Competitive Mode:</strong> Engage with other players and climb the leaderboards.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Controls</h2>
        <p className="text-lg leading-relaxed mb-4">
          The controls in <strong>Homer City 3D</strong> are designed to be intuitive:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Mouse or Touchpad:</strong> Adjust the angle and strength of your throw.
          </li>
          <li>
            <strong>Tap or Click:</strong> Initiate the throw and swing the bat with precise timing.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Game Features & Innovations</h2>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Homer City 3D</strong> stands out for its creative twist on baseball:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Addictive Gameplay:</strong> Enjoy the thrill of breaking windows and racking up high scores.
          </li>
          <li>
            <strong>Urban Destruction:</strong> The detailed cityscape setting offers a visually engaging environment.
          </li>
          <li>
            <strong>Competitive Multiplayer:</strong> Challenge friends or players worldwide in head-to-head showdowns.
          </li>
          <li>
            <strong>Rewarding Progression:</strong> Earn points and unlock new levels as you improve your skills.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Strategies for Success</h2>
        <p className="text-lg leading-relaxed mb-4">
          To excel in <strong>Homer City 3D</strong>, consider these expert tips:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Focus on Accuracy:</strong> Experiment with different angles to maximize the number of windows you break.
          </li>
          <li>
            <strong>Optimize Your Timing:</strong> Balance power with precision to achieve effective hits.
          </li>
          <li>
            <strong>Study Opponents:</strong> Observe competitive players to refine your own techniques.
          </li>
          <li>
            <strong>Stay Calm Under Pressure:</strong> Maintain focus during high-stakes moments for consistent performance.
          </li>
        </ul>
      </section>

      <footer className="mt-8 text-center">
        <p className="text-xl font-medium">
          Experience the excitement of <strong>Homer City 3D</strong> and redefine urban baseball with every swing!
        </p>
      </footer>
    </div>
  );
};

export default HomerCity3DIntro;
