import Image from 'next/image';
import React from 'react';

const HotfootBaseballIntro: React.FC = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto p-6 ">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Hotfoot Baseball: The Ultimate Arcade Experience
          </h1>
          <p className="text-xl mb-6">
            Step into the vibrant world of <strong>Hotfoot Baseball</strong> – an engaging, fast-paced arcade baseball game that combines fun, strategy, and quick action.
          </p>
          <div className="flex justify-center">
            <Image
              src="/assets/images/games/hotfoot-baseball.png"
              alt="Hotfoot Baseball Logo"
              width={200}
              height={100}
              className="rounded-md"
            />
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg leading-relaxed">
            <strong>Hotfoot Baseball</strong> is a lively and accessible sports game developed by DParrot, released in February 2025. With its colorful, cartoony graphics and simple one-click controls, the game appeals to players of all ages. Choose from 18 national teams—each boasting unique stats and abilities—and jump into quick, action-packed matches perfect for gaming on the go.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gameplay Overview</h2>
          <p className="text-lg leading-relaxed mb-4">
            In <strong>Hotfoot Baseball</strong>, you step up as the batter in a series of short and thrilling matches. Designed for brief play sessions during breaks or commutes, the game emphasizes timing and strategy:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Select Your Team:</strong> Pick from 18 national teams, each with its own strengths and play style.
            </li>
            <li>
              <strong>Timing is Key:</strong> Swing the bat at the perfect moment as the ball reaches the strike zone.
            </li>
            <li>
              <strong>Automatic Base Running:</strong> Runners advance automatically post-hit, with the option to manually control base running for strategic decisions.
            </li>
            <li>
              <strong>Strategic Risk-Taking:</strong> Decide when to play safe or take a risk for extra bases.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Controls & Mechanics</h2>
          <p className="text-lg leading-relaxed mb-4">
            The controls in <strong>Hotfoot Baseball</strong> are designed to be intuitive and easy to master:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Swing Control:</strong> Simply click or tap once to swing the bat – timing is everything.
            </li>
            <li>
              <strong>Base Running:</strong> Click on your player to manually advance to the next base when needed.
            </li>
            <li>
              <strong>Simplicity First:</strong> With no complex combinations to worry about, you can focus entirely on perfecting your swing.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Game Features & Innovations</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Hotfoot Baseball</strong> distinguishes itself through a combination of retro arcade charm and modern gaming innovations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Vibrant Cartoon Graphics:</strong> Enjoy playful visuals that bring a fun atmosphere to every match.
            </li>
            <li>
              <strong>Progressive Difficulty:</strong> The game adapts to your skill level, ensuring that each match remains challenging.
            </li>
            <li>
              <strong>No Downloads Required:</strong> Play instantly in any modern browser—ideal for quick gaming sessions.
            </li>
            <li>
              <strong>Quick Matches:</strong> Games last only 3-5 minutes, making them perfect for on-the-go play.
            </li>
            <li>
              <strong>Innovative One-Click Controls:</strong> Focus on timing and strategy without the need for complex inputs.
            </li>
          </ul>
          <div className="mt-6">
            <iframe
              width="700"
              height="600"
              src="https://www.youtube.com/embed/XCF-sqaIh6Y?si=AH-8xsk3yXZD4MSn"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
            <p className="text-center mt-2 text-sm text-gray-600">Watch Hotfoot Baseball Gameplay</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Strategies for Success</h2>
          <p className="text-lg leading-relaxed mb-4">
            To become a true star in <strong>Hotfoot Baseball</strong>, consider these expert tips:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Practice Your Timing:</strong> Perfect your swing by practicing the exact moment to hit the ball.
            </li>
            <li>
              <strong>Maintain Consistent Contact:</strong> Focus on making steady contact before attempting power hits.
            </li>
            <li>
              <strong>Recognize Pitch Patterns:</strong> Learn the different pitches to anticipate the perfect swing moment.
            </li>
            <li>
              <strong>Optimize Base Running:</strong> Master when to manually control your player’s base running for a tactical advantage.
            </li>
            <li>
              <strong>Stay Patient:</strong> Avoid impulsive swings—wait for the right pitch to maximize your hit potential.
            </li>
          </ul>
        </section>

        <footer className="mt-12 text-center">
          <p className="text-xl font-medium">
            Jump into <strong>Hotfoot Baseball</strong> and experience an innovative, fast-paced, and fun arcade baseball game that’s perfect for quick sessions and endless excitement!
          </p>
        </footer>
      </div>
    </>
  );
};

export default HotfootBaseballIntro;
