import Image from 'next/image';

const BaseballBatGame: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Baseball Bat Game</h1>
      <p className="mb-4">
        Step up to the plate and experience the thrill of baseball like never before with the <strong>Baseball Bat Game</strong>. This engaging game combines the classic elements of baseball with innovative gameplay mechanics, offering both casual players and baseball enthusiasts an exciting experience.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Gameplay Overview</h2>
      <p className="mb-4">
        In the <strong>Baseball Bat Game</strong>, players take on the role of a batter aiming to hit pitches with precision and power. The objective is to score runs by hitting the ball effectively, considering factors like pitch type, swing timing, and ball placement. The game offers various modes, including quick play, tournaments, and challenges, each designed to test and enhance your batting skills.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Controls</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Mouse or Touchpad:</strong> Move the cursor to position your batter and aim your swing.</li>
        <li><strong>Click or Tap:</strong> Execute your swing. Timing is crucial to connect with the ball effectively.</li>
        <li><strong>Keyboard Arrows:</strong> Adjust your stance and influence the direction of the hit.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Game Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Realistic Physics Engine:</strong> Experience authentic ball trajectories and interactions, providing a lifelike batting experience.</li>
        <li><strong>Customization Options:</strong> Personalize your player’s appearance, equipment, and batting style to reflect your preferences.</li>
        <li><strong>Progression System:</strong> Unlock new bats, stadiums, and challenges as you advance, keeping the gameplay fresh and rewarding.</li>
        <li><strong>Multiplayer Mode:</strong> Compete against friends or players worldwide to showcase your batting prowess.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Strategies for Success</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Master Timing:</strong> Focus on the pitcher’s wind-up and release to improve your swing timing, increasing the chances of a successful hit.</li>
        <li><strong>Study Pitch Patterns:</strong> Observe and anticipate different pitch types to adjust your swing strategy accordingly.</li>
        <li><strong>Utilize Power-Ups:</strong> Take advantage of in-game power-ups to boost your hitting power or slow down pitches temporarily.</li>
        <li><strong>Upgrade Equipment:</strong> Invest in better bats and gear to enhance your performance and unlock new abilities.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Innovative Elements</h2>
      <p className="mb-4">
        The <strong>Baseball Bat Game</strong> introduces unique features such as dynamic weather conditions affecting gameplay, interactive crowds that react to your performance, and a career mode where you can rise from a rookie to a legendary slugger. These elements add depth and replayability, setting the game apart from traditional baseball simulations.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Visuals and Media</h2>
      <div className="mb-4">
        <Image src="/assets/images/games/baseball-bat.png" alt="Baseball Bat Game Gameplay" width={600} height={400} className="rounded-lg" />
        <p className="text-center text-sm text-gray-500 mt-2">Screenshot: In-game batting scenario showcasing realistic graphics and stadium ambiance.</p>
      </div>
      <p className="mb-4">
        For a visual demonstration of the gameplay mechanics and features, you can watch the following video:
      </p>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src="https://www.youtube.com/embed/6jt3Fa1c_zg"
          title="Baseball Bat Game Gameplay"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
      <p className="mb-4">
        The <strong>Baseball Bat Game</strong> offers an immersive and enjoyable baseball experience with its realistic mechanics, diverse game modes, and innovative features. Whether you're a seasoned baseball fan or a newcomer to the sport, this game provides endless fun and challenges to keep you engaged.
      </p>
    </div>
  );
};

export default BaseballBatGame;
