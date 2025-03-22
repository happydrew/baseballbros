import Head from 'next/head';
import Image from 'next/image';

const BaseballGameIntro: React.FC = () => {
  return (
    <>
      <div className="container mx-auto p-6 text-gray-800 bg-white rounded-lg">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Baseball Game</h1>
          <p className="text-xl">
            Experience the perfect fusion of tradition and innovation in the world of <strong>Baseball</strong>.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/assets/images/games/baseball.png"
              alt="Baseball Game Logo"
              width={300}
              height={150}
              className="rounded-md"
            />
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Game Overview</h2>
          <p className="text-lg leading-relaxed">
            The <strong>Baseball game</strong> is a modern reinterpretation of the classic sport. It captures the excitement of America's favorite pastime while introducing innovative elements that cater to both traditional sports fans and modern gamers. Whether you’re here to relive nostalgic moments or experience the thrill of a highly interactive sports simulation, this game has something for everyone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gameplay Mechanics</h2>
          <p className="text-lg leading-relaxed mb-4">
            In this dynamic <strong>Baseball game</strong>, every match is a blend of skill, strategy, and timing. The game is divided into two main phases:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>
              <strong>Batting Phase:</strong> Aim, swing, and strategically hit the ball to advance bases and score runs.
            </li>
            <li>
              <strong>Fielding Phase:</strong> Defend your base by catching the ball, executing quick throws, and coordinating with teammates to prevent the opposition from scoring.
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            Every match requires quick decision-making, precision, and a balance between offense and defense.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Game Controls and Operation</h2>
          <p className="text-lg leading-relaxed mb-4">
            The controls for the <strong>Baseball game</strong> have been designed to offer a natural and intuitive playing experience:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>
              <strong>Movement:</strong> Use the WASD or arrow keys to move your player around the field.
            </li>
            <li>
              <strong>Batting:</strong> Click the left mouse button or tap the screen to swing the bat.
            </li>
            <li>
              <strong>Fielding:</strong> Use the mouse or touch controls to catch and throw the ball with precision.
            </li>
            <li>
              <strong>Special Moves:</strong> Activate unique player skills with customizable hotkeys for an edge during gameplay.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Unique Features and Innovations</h2>
          <p className="text-lg leading-relaxed mb-4">
            The <strong>Baseball game</strong> stands out with several innovative features:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>
              <strong>Realistic Simulation:</strong> Experience true-to-life baseball mechanics with advanced physics, detailed player animations, and authentic stadium atmospheres.
            </li>
            <li>
              <strong>Customizable Gameplay:</strong> Personalize your team’s lineup, uniforms, and strategies to create a unique sporting experience.
            </li>
            <li>
              <strong>Interactive Arenas:</strong> Compete in various stadiums that not only offer stunning visuals but also introduce interactive elements like dynamic weather and crowd influence.
            </li>
            <li>
              <strong>Innovative Game Modes:</strong> Enjoy traditional matches, quick-play modes, and challenge events that keep the gameplay fresh and exciting.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Strategies for Success</h2>
          <p className="text-lg leading-relaxed mb-4">
            Mastering the <strong>Baseball game</strong> requires a mix of tactical prowess and quick reflexes. Here are some pro tips:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>
              <strong>Team Coordination:</strong> Leverage team chemistry by coordinating defensive plays and orchestrating timely offensive pushes.
            </li>
            <li>
              <strong>Timing is Everything:</strong> Perfect your swing and throws by mastering the timing mechanics, which are crucial for both scoring and defense.
            </li>
            <li>
              <strong>Adaptability:</strong> Each stadium offers its own set of challenges. Adapt your strategy according to the environment and the flow of the game.
            </li>
            <li>
              <strong>Resource Management:</strong> Use power-ups and special moves strategically to tip the scales in your favor during critical moments.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Community and Continuous Development</h2>
          <p className="text-lg leading-relaxed">
            The <strong>Baseball game</strong> isn’t just about playing—it’s about being part of a vibrant community. Participate in online leagues, share your achievements, and join discussions that help shape future updates. Regular events, tournaments, and feedback-driven improvements ensure the game evolves with its fan base.
          </p>
        </section>
      </div>
    </>
  );
};

export default BaseballGameIntro;
