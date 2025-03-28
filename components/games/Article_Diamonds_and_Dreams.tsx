import Image from 'next/image';

const DiamondsAndDreamsPage: React.FC = () => {
  return (
    <>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose lg:prose-xl">
          <h1>Diamonds and Dreams: A Comprehensive Game Overview</h1>
          <p>
            Welcome to <strong>Diamonds and Dreams</strong> – an innovative baseball game that takes you on a thrilling journey from the humble beginnings of the Sandlot League to the glamour of the Major League. Combining classic baseball action with modern gameplay elements, this game offers a rich, mission-driven experience designed for both casual fans and competitive players.
          </p>

          <Image src="/assets/images/games/diamonds-and-dreams.webp" alt="Diamonds and Dreams Cover" width={400} height={200} />

          <h2>Introduction</h2>
          <p>
            In <strong>Diamonds and Dreams</strong>, you step into the shoes of a junior batter and work your way up through various leagues. With 11 exciting levels, each stage challenges you with different objectives such as scoring home runs, avoiding strikes, and accumulating a set number of points to unlock the next level.
          </p>

          <h2>Gameplay Mechanics</h2>
          <p>
            The game is structured around mission-based progression:
          </p>
          <ul>
            <li>
              <strong>Level Progression:</strong> Start in the Sandlot League, advance to the Little League, and eventually enter the Major League by completing challenging missions.
            </li>
            <li>
              <strong>Objective-Based Challenges:</strong> Each level sets specific goals – from hitting a certain number of home runs to maintaining a strike-free streak – that you must achieve to move forward.
            </li>
            <li>
              <strong>Career Mode:</strong> Experience a full baseball career as you develop your skills and unlock new gameplay features along the way.
            </li>
          </ul>

          <h2>Game Controls</h2>
          <p>
            <strong>Diamonds and Dreams</strong> is designed with user-friendly controls to ensure a smooth and enjoyable experience:
          </p>
          <ul>
            <li>
              <strong>Batting:</strong> Use your mouse to swing the bat. Timing is critical—click at the perfect moment to make contact and drive the ball.
            </li>
            <li>
              <strong>Running & Fielding:</strong> While batting is the core focus, innovative running and catching mechanics add extra layers of strategy, allowing you to control your character on the bases.
            </li>
            <li>
              <strong>Menu Navigation:</strong> Easily customize your team’s colors, view your statistics, and track progress through an intuitive in-game interface.
            </li>
          </ul>

          <h2>Unique Game Features</h2>
          <p>
            What sets <strong>Diamonds and Dreams</strong> apart are its standout features:
          </p>
          <ul>
            <li>
              <strong>Mission-Driven Levels:</strong> With 11 varied and challenging levels, each stage introduces new objectives and gameplay twists.
            </li>
            <li>
              <strong>Team Customization:</strong> Personalize your team’s colors and manage detailed statistics right from the main menu.
            </li>
            <li>
              <strong>Enhanced Simulation:</strong> Enjoy a full baseball simulation experience that merges traditional batting with modern running and catching mechanics.
            </li>
            <li>
              <strong>Cross-Platform Accessibility:</strong> Play seamlessly on HTML5 and mobile devices, ensuring you can enjoy the game wherever you are.
            </li>
          </ul>

          <h2>Strategies for Success</h2>
          <p>
            To excel in <strong>Diamonds and Dreams</strong>, consider these strategic tips:
          </p>
          <ul>
            <li>
              <strong>Timing & Precision:</strong> Focus on mastering the swing timing to maximize your contact with the ball and increase your score.
            </li>
            <li>
              <strong>Progressive Skill Development:</strong> As you advance through the leagues, invest time in upgrading your character’s abilities to handle tougher challenges.
            </li>
            <li>
              <strong>Adaptability:</strong> Learn to adjust your strategies based on different pitch speeds and game conditions. The ability to adapt is key to clearing each level.
            </li>
            <li>
              <strong>Practice Mode:</strong> Utilize in-game training modules to refine your skills before tackling competitive levels.
            </li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            <strong>Diamonds and Dreams</strong> delivers an engaging baseball adventure that blends classic sports simulation with modern, mission-based gameplay. With its intuitive controls, customizable team features, and a progressive career mode spanning 11 levels, this game promises an immersive experience for baseball enthusiasts of all levels. Step up to the plate, refine your skills, and chase your dreams in the world of Diamonds and Dreams!
          </p>
        </article>
      </main>
    </>
  );
};

export default DiamondsAndDreamsPage;
