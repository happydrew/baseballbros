import Image from 'next/image';

const HomeRunBoyPage = () => {
  return (
    <>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Home Run Boy</h1>
          <p className="text-lg">
            Home Run Boy is an addictive and engaging baseball-themed game that challenges you to hit as many home runs as possible. Perfect for casual gamers and baseball enthusiasts alike, this game tests your timing, reflexes, and strategic thinking.
          </p>
        </header>

        <Image
          src="/assets/images/games/home-run-boy.webp"
          alt="Home Run Boy"
          width={640}
          height={480}
        />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Game Overview</h2>
          <p className="mb-4">
            In Home Run Boy, you step into a virtual baseball field where a dynamic pitcher throws 100 balls with varying speeds and angles. Your goal is to connect with the ball using simple mouse or touch controls, and each successful hit brings you closer to a powerful home run – the ultimate score booster.
          </p>
          <p>
            The game’s simplicity and focus on timing make it accessible yet challenging as the pitching speed increases, providing endless fun and replay value.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Gameplay & Controls</h2>
          <p className="mb-4">
            Home Run Boy’s controls are designed for ease of use without sacrificing challenge. Use your mouse (or touch screen on mobile devices) to move your character left and right. A simple click initiates the bat swing, and precise timing is crucial to hit the ball with maximum power.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Movement:</strong> Move the player horizontally to line up your swing.
            </li>
            <li>
              <strong>Swinging:</strong> Click the mouse or tap the screen to swing the bat.
            </li>
            <li>
              <strong>Timing:</strong> Perfect your timing to hit pitches ranging from standard throws to challenging flaming fastballs.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Game Features</h2>
          <p className="mb-4">
            Home Run Boy offers a variety of engaging features that keep the gameplay fresh:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Dynamic Pitching:</strong> Experience 100 varied pitches that test your reaction speed.
            </li>
            <li>
              <strong>Power-Up Upgrades:</strong> Earn points to upgrade your bat’s power, speed, and bounce for even longer home runs.
            </li>
            <li>
              <strong>Challenging Modes:</strong> As you progress, the game increases in difficulty, introducing tricky flaming fastballs and unpredictable pitch angles.
            </li>
            <li>
              <strong>Leaderboards & Achievements:</strong> Compete with friends and climb the online leaderboard.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Strategies for Success</h2>
          <p className="mb-4">
            Mastering Home Run Boy requires a combination of practice and smart strategy:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Focus on Timing:</strong> Watch the pitcher’s rhythm and anticipate the speed of each ball to perfect your swing.
            </li>
            <li>
              <strong>Upgrade Your Equipment:</strong> Use earned points to boost bat power and improve your overall hitting accuracy.
            </li>
            <li>
              <strong>Stay Calm Under Pressure:</strong> As the game speeds up, maintaining focus will help you continue hitting even the most challenging pitches.
            </li>
          </ul>
          <p>
            Innovative strategy tip: Experiment with different swing timings to discover hidden “sweet spots” that yield bonus points!
          </p>
        </section>

        <footer className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
          <p>
            Dive into Home Run Boy and test your baseball skills in this fast-paced, timing-based challenge. With intuitive controls, dynamic pitching, and rewarding power-up systems, you have all the tools to become the ultimate home run champion. Are you ready to step up to the plate and hit your way to the top?
          </p>
        </footer>
      </main >
    </>
  );
};

export default HomeRunBoyPage;
