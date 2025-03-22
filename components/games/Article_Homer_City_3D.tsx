import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

const SuperBaseballIntro: React.FC = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Super Baseball</h1>
          <p className="text-xl">
            Experience a futuristic twist on America's favorite pastime.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/assets/images/games/super-baseball.png"
              alt="Super Baseball Logo"
              width={400}
              height={200}
              className="rounded-md"
            />
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-lg leading-relaxed">
            <strong>Super Baseball</strong> is a groundbreaking arcade sports game that merges classic baseball with futuristic innovations. Originally developed by SNK, it transports players to a high-tech world where advanced gear and power-assisted armor enhance every play.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Gameplay Overview</h2>
          <p className="text-lg leading-relaxed mb-4">
            In <strong>Super Baseball</strong>, players control teams made up of both humans and robotic athletes competing in a futuristic stadium known as Cyber Egg Stadium. Master both offense and defense through:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Hitting:</strong> Batters equipped with power-assisted armor can hit the ball with enhanced force, aiming for a narrow home run zone.
            </li>
            <li>
              <strong>Pitching:</strong> Pitchers employ a variety of pitches—ranging from fastballs to curveballs—to outsmart their opponents.
            </li>
            <li>
              <strong>Fielding:</strong> Fielders make use of unique “jump zones” and “stop zones” to catch high-flying balls and control gameplay dynamics.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Controls</h2>
          <p className="text-lg leading-relaxed mb-4">
            The control scheme adapts across platforms while staying intuitive:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Movement:</strong> Use the D-Pad or arrow keys to navigate your players.
            </li>
            <li>
              <strong>Hitting:</strong> Press the designated button (such as A on Super NES) to swing the bat.
            </li>
            <li>
              <strong>Pitching:</strong> Utilize directional inputs and a pitch button to control the type and speed of your throws.
            </li>
            <li>
              <strong>Fielding:</strong> Move fielders and execute throws using simple, responsive controls.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Game Features</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Super Baseball</strong> distinguishes itself with a mix of classic and futuristic elements:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Diverse Teams:</strong> Choose from 12 teams featuring a blend of human players and advanced robotic athletes.
            </li>
            <li>
              <strong>Upgrades & Power-Ups:</strong> Earn credits to boost your team’s abilities in hitting, pitching, and fielding.
            </li>
            <li>
              <strong>Cyber Egg Stadium:</strong> Play in a state-of-the-art arena with unique features like reduced foul zones, jump zones, and stop zones that influence the flow of the game.
            </li>
            <li>
              <strong>Innovative Gameplay:</strong> Enjoy the perfect balance of traditional baseball strategy and futuristic enhancements.
            </li>
          </ul>
          <p className="text-center text-sm text-gray-600 mt-2">
            Watch Super Baseball Gameplay
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Strategies for Success</h2>
          <p className="text-lg leading-relaxed mb-4">
            To excel at <strong>Super Baseball</strong>, consider these expert tips:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Power Hitting:</strong> Time your swings perfectly to leverage the power-assisted armor for maximum distance.
            </li>
            <li>
              <strong>Smart Pitching:</strong> Mix different pitch types and locations to keep batters guessing.
            </li>
            <li>
              <strong>Dynamic Fielding:</strong> Utilize jump and stop zones effectively to control the ball and secure crucial catches.
            </li>
            <li>
              <strong>Strategic Upgrades:</strong> Invest credits in upgrades that improve your team’s overall performance.
            </li>
          </ul>
        </section>

        <footer className="mt-8 text-center">
          <p className="text-xl font-medium">
            Discover the future of arcade baseball with <strong>Super Baseball</strong> – where classic sports meet futuristic innovation!
          </p>
        </footer>
      </div>
    </>
  );
};

export default SuperBaseballIntro;
