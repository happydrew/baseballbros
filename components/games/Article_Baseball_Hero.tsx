import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const BaseballHeroIntro: React.FC = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Baseball Hero</h1>
          <p className="text-xl">
            Relive the classic baseball experience reimagined with modern twists.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/assets/images/games/baseball-hero.png"
              alt="Baseball Hero Logo"
              width={400}
              height={200}
              className="rounded-md"
            />
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-lg leading-relaxed">
            <strong>Baseball Hero</strong> is a classic arcade baseball game that blends the nostalgic charm of traditional baseball with innovative modern gameplay elements. Originally popular on retro platforms, this game has evolved into a timeless experience that continues to captivate both longtime fans and new players.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Gameplay Overview</h2>
          <p className="text-lg leading-relaxed mb-4">
            In <strong>Baseball Hero</strong>, players step up to the plate in fast-paced matches that capture the excitement and strategy of baseball. Key gameplay elements include:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Batting:</strong> Time your swing perfectly to hit the ball with precision.
            </li>
            <li>
              <strong>Pitching:</strong> Face various pitch types, from fastballs to curveballs, to challenge your batting skills.
            </li>
            <li>
              <strong>Fielding:</strong> Position your players to catch the ball and make smart defensive plays.
            </li>
            <li>
              <strong>Base Running:</strong> Sprint around the bases to score and outmaneuver your opponents.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Controls</h2>
          <p className="text-lg leading-relaxed mb-4">
            The controls in <strong>Baseball Hero</strong> are designed to be simple and intuitive:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Batting:</strong> Use the designated button to swing the bat at the precise moment.
            </li>
            <li>
              <strong>Pitching:</strong> Select your pitch type using control buttons and aim with directional inputs.
            </li>
            <li>
              <strong>Fielding:</strong> Navigate your fielders with arrow keys or a joystick, and throw the ball accurately to bases.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Game Features</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Baseball Hero</strong> offers a unique blend of retro aesthetics and modern features:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Multiplayer Mode:</strong> Compete against friends or online opponents for the highest score.
            </li>
            <li>
              <strong>Retro Graphics:</strong> Enjoy classic pixel art visuals that evoke nostalgia while remaining vibrant.
            </li>
            <li>
              <strong>Innovative Upgrades:</strong> Earn points to upgrade your team’s batting, pitching, and fielding abilities.
            </li>
            <li>
              <strong>Dynamic Gameplay:</strong> Experience fast-paced matches with unpredictable twists and strategic depth.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Strategies for Success</h2>
          <p className="text-lg leading-relaxed mb-4">
            To master <strong>Baseball Hero</strong>, consider these expert strategies:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Timing is Key:</strong> Perfect your swing by mastering the precise timing of your batting.
            </li>
            <li>
              <strong>Smart Fielding:</strong> Position your fielders to maximize defensive coverage.
            </li>
            <li>
              <strong>Mix Up Your Pitches:</strong> For pitchers, varying your pitch type and location can throw off batters.
            </li>
            <li>
              <strong>Upgrade Wisely:</strong> Invest points in upgrades that boost your team's overall performance.
            </li>
          </ul>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-xl font-medium">
            Discover the timeless fun of <strong>Baseball Hero</strong> and experience the perfect blend of nostalgia and modern gameplay innovation!
          </p>
        </footer>
      </div>
    </>
  );
};

export default BaseballHeroIntro;
