import React from 'react';

const HomerCity3DPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-center">Homer City 3D</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Welcome to <strong>Homer City 3D</strong>, an exhilarating baseball-themed game that brings the classic sport into a vibrant urban setting. Developed by Nimmi Developers, this game challenges players to test their batting skills by smashing windows in towering city buildings. Available on various platforms, including web browsers and mobile devices, Homer City 3D offers an accessible and thrilling experience for players of all ages.
        </p>
      </section>

      {/* Gameplay */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Gameplay</h2>
        <p>
          In Homer City 3D, players aim to hit baseballs to break as many windows as possible in the surrounding skyscrapers. The game emphasizes precision and timing, requiring players to carefully aim their shots to maximize their scores. Each shattered window earns points, and players can compete against others to see who can achieve the highest score.
        </p>
      </section>

      {/* Controls */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Controls</h2>
        <p>
          The game features intuitive controls:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Mouse or Touchpad:</strong> Adjust the angle and power of your swing by moving the cursor or sliding your finger.</li>
          <li><strong>Click or Tap:</strong> Execute your swing by clicking the mouse or tapping the screen at the desired power level.</li>
        </ul>
      </section>

      {/* Game Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Game Features</h2>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Urban Baseball Experience:</strong> Enjoy a unique twist on traditional baseball by playing in a city environment.</li>
          <li><strong>Competitive Play:</strong> Challenge friends and other players to beat your high score.</li>
          <li><strong>Accessible Gameplay:</strong> Easy-to-learn controls make it suitable for players of all skill levels.</li>
        </ul>
      </section>

      {/* Strategies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Strategies</h2>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Master Your Aim:</strong> Focus on precision to consistently hit and break windows.</li>
          <li><strong>Timing is Key:</strong> Perfect your swing timing to maximize the impact and trajectory of the ball.</li>
          <li><strong>Analyze Opponents:</strong> Learn from other players' techniques to improve your own gameplay.</li>
        </ul>
      </section>

      {/* Additional Content */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Additional Content</h2>
        <p>
          For a visual demonstration of the gameplay, check out the following walkthrough video:
        </p>
        <div className="video-container my-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GNIfIqCFKyA"
            title="Homer City 3D Walkthrough"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p>
          Homer City 3D offers a fresh and exciting take on baseball, blending the sport with an urban environment to create a unique gaming experience. Its straightforward controls and competitive elements make it a must-try for both sports enthusiasts and casual gamers alike.
        </p>
      </section>
    </div>
  );
};

export default HomerCity3DPage;
