import Image from 'next/image';

const GullyBaseballPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Gully Baseball</h1>
      <p className="mb-4">
        <strong>Gully Baseball</strong> is an engaging online game that combines the classic sport of baseball with a unique urban twist. Players step into the shoes of a batter aiming to break as many windows as possible within a bustling cityscape. This fusion of traditional baseball mechanics with an unconventional setting offers a fresh and entertaining experience for players seeking both fun and challenge.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Gameplay</h2>
      <p className="mb-4">
        In <strong>Gully Baseball</strong>, the primary objective is to hit baseballs with precision to shatter windows on surrounding buildings. Each successful hit adds to your score, and the player with the highest score at the end of the round emerges victorious.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Objective:</strong> Break as many windows as possible within a limited time frame, typically 60 seconds.</li>
        <li><strong>Competition:</strong> Face off against another player in a head-to-head match to see who can cause the most destruction.</li>
        <li><strong>Scoring:</strong> Each broken window contributes to your overall score; the more windows you break, the higher your score.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Controls</h2>
      <p className="mb-4">
        The game features intuitive controls, making it accessible to players of all skill levels:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Mouse or Touchpad:</strong> Use your mouse or touchpad to control the bat's position and swing.</li>
        <li><strong>Click or Tap:</strong> Click or tap at the right moment to hit the ball towards the target windows.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Game Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Urban Environment:</strong> The cityscape setting adds a unique twist to traditional baseball, providing a fresh backdrop for gameplay.</li>
        <li><strong>Competitive Play:</strong> Engage in one-on-one matches against other players, adding a layer of competition and excitement.</li>
        <li><strong>Simple Mechanics:</strong> Easy-to-learn controls ensure that players can quickly get into the action without a steep learning curve.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Strategies</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Timing is Key:</strong> Swinging the bat at the optimal moment increases the chances of hitting the ball accurately and breaking more windows.</li>
        <li><strong>Target Clusters:</strong> Aim for areas with multiple windows close together to maximize your score with each hit.</li>
        <li><strong>Maintain Focus:</strong> Staying concentrated throughout the game helps in making precise swings and achieving higher scores.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Additional Content</h2>
      <p className="mb-4">
        For a visual glimpse into the game, here's a screenshot showcasing the urban setting and gameplay mechanics:
      </p>
      <div className="mb-4">
        <Image src="/assets/images/games/gully_baseball.png" alt="Gully Baseball Gameplay" width={600} height={400} />
      </div>
      <p className="mb-4">
        To see the game in action, check out this gameplay video:
      </p>
      <div className="mb-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/example_video" title="Gully Baseball Gameplay Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
      <p className="mb-4">
        <strong>Gully Baseball</strong> offers a refreshing take on the traditional baseball game by integrating it into an urban environment where breaking windows is the main goal. Its simple controls, competitive gameplay, and unique setting make it a delightful experience for casual gamers and baseball enthusiasts alike. Whether you're looking to pass the time or challenge a friend, Gully Baseball provides an enjoyable and entertaining platform to test your batting skills in a fun, destructible world.
      </p>
    </div>
  );
};

export default GullyBaseballPage;
