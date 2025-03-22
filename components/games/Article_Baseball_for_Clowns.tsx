import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const BaseballForClownsIntro: React.FC = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Baseball for Clowns</h1>
          <p className="text-xl">
            A quirky, fun-filled arcade experience where strategy and precision collide.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/assets/images/games/baseball-for-clowns.png"
              alt="Baseball for Clowns Logo"
              width={400}
              height={200}
              className="rounded-md"
            />
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-lg leading-relaxed">
            <strong>Baseball for Clowns</strong> is an entertaining online arcade game that challenges players to hit clowns with a baseball. Combining humor with skill, this game offers a unique twist on traditional sports games by introducing playful targets and inventive mechanics.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Gameplay Overview</h2>
          <p className="text-lg leading-relaxed mb-4">
            In this game, the objective is simple yet challenging: use your baseball to hit all the clowns in each level. Players must navigate various obstacles, utilizing ricochet mechanics to reach clowns that are not directly in line of sight.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Ricochet Mechanics:</strong> Bounce your ball off walls and obstacles to hit clowns positioned at tricky angles.
            </li>
            <li>
              <strong>Level-Based Challenges:</strong> Each level introduces new clown placements and obstacles, keeping the gameplay fresh and engaging.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Controls</h2>
          <p className="text-lg leading-relaxed mb-4">
            The controls in <strong>Baseball for Clowns</strong> are designed to be simple and intuitive:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Mouse or Touch Input:</strong> Aim your shot with a guiding line, then tap or click to throw the ball.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Game Features & Innovations</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Baseball for Clowns</strong> sets itself apart with a playful and innovative design:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Vibrant Graphics:</strong> Enjoy colorful visuals that bring a whimsical circus atmosphere to life.
            </li>
            <li>
              <strong>Dynamic Levels:</strong> Experience varied challenges as each level introduces new obstacles and clown formations.
            </li>
            <li>
              <strong>Power-Ups & Bonuses:</strong> Collect special items during gameplay to enhance your throw, slow down time, or earn extra points.
            </li>
            <li>
              <strong>Multiplayer Mode:</strong> Challenge friends or compete online to see who can achieve the highest score.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Strategies for Success</h2>
          <p className="text-lg leading-relaxed mb-4">
            To excel in <strong>Baseball for Clowns</strong>, keep these strategies in mind:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Master the Ricochet:</strong> Experiment with different angles to learn how to use obstacles to your advantage.
            </li>
            <li>
              <strong>Aim for Multiple Targets:</strong> Strategically plan your shots to hit more than one clown with a single throw.
            </li>
            <li>
              <strong>Timing is Key:</strong> Practice your throw timing to ensure maximum accuracy and distance.
            </li>
            <li>
              <strong>Adapt Your Strategy:</strong> Adjust your approach based on the unique layout of each level.
            </li>
          </ul>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-xl font-medium">
            Experience the quirky fun of <strong>Baseball for Clowns</strong> and see if you can hit all the targets while enjoying a playful twist on arcade action!
          </p>
        </footer>
      </div>
    </>
  );
};

export default BaseballForClownsIntro;
