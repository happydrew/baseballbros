import React from 'react';
import Image from 'next/image';

const CurveRushPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Curve Rush: Master the Desert Slopes</h1>
      <p className="mb-6">
        Curve Rush is an exhilarating arcade-style game that challenges players to navigate a rolling ball through endless desert landscapes. Combining speed, precision, and strategy, it offers an engaging experience for those seeking both quick thrills and long-term skill development.
      </p>

      <Image
        src="/assets/images/games/curve-rush.webp"
        alt="Curve Rush Gameplay"
        width={600}
        height={400}
      />

      <h2 className="text-2xl font-semibold mb-3">Gameplay Overview</h2>
      <p className="mb-6">
        In Curve Rush, players control a small ball racing across dynamic dunes. The primary objective is to maintain momentum by executing well-timed jumps and smooth landings. The higher and more precise the jump, the greater the score. However, a mistimed landing can abruptly end the run, adding an element of risk and reward.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Controls</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Tap/Click/Space/Up Arrow:</strong> Initiates a jump.</li>
        <li><strong>Hold:</strong> Increases jump height; timing is crucial for optimal landings.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Game Features</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Endless Terrain:</strong> Each playthrough presents a unique desert landscape, ensuring varied challenges and endless replayability.</li>
        <li><strong>Customization:</strong> Players can unlock new ball designs and skins using in-game currency collected during runs.</li>
        <li><strong>Achievement System:</strong> Completing specific challenges rewards players with bonuses, encouraging skill development and offering additional objectives.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Strategies for Success</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Timing:</strong> Perfectly timed jumps and landings are crucial for maintaining momentum and achieving high scores.</li>
        <li><strong>Speed Management:</strong> Balancing speed and control is essential to navigate the dynamic terrain effectively.</li>
        <li><strong>Adaptability:</strong> Staying focused and adjusting to the ever-changing landscape can significantly enhance performance.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Visual and Audio Experience</h2>
      <p className="mb-6">
        Curve Rush offers immersive visuals with stunning desert landscapes and dynamic tracks. The engaging sound effects complement the gameplay, enhancing the overall experience.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
      <p className="mb-6">
        Curve Rush is a thrilling arcade game that tests precision, speed, and strategy. With its simple yet challenging mechanics, endless replayability, and customization options, it offers an exciting experience for players looking to hone their reflexes and compete for the highest scores.
      </p>

      <div className="flex justify-center mt-8">
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/A3f6-m0D0h4"
          title="Curve Rush Gameplay Walkthrough"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CurveRushPage;
