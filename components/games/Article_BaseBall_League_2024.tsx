import Image from 'next/image';

const BaseballLeague2024: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Baseball League 2024</h1>
      <Image
        src="/assets/images/games/baseball-league-2024.webp"
        alt="Baseball League 2024 Cover Art"
        width={600}
        height={350}
        className="mb-4 mx-auto"
      />
      <p className="text-lg mb-4">
        <strong>Baseball League 2024</strong> is a cutting-edge baseball simulation game that brings the excitement of America's pastime to your fingertips. Developed by leading sports game developers, this installment offers an immersive experience with enhanced realism and innovative features.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Gameplay</h2>
      <p className="text-lg mb-4">
        Players can engage in various modes, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Exhibition Matches</strong>: Quick games for casual play.
        </li>
        <li>
          <strong>Franchise Mode</strong>: Manage your team over multiple seasons, making strategic decisions on trades, training, and finances.
        </li>
        <li>
          <strong>Road to the Show</strong>: Create a custom player and guide them from the minor leagues to MLB stardom.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Controls</h2>
      <p className="text-lg mb-4">
        The game offers intuitive controls suitable for both newcomers and seasoned players:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Batting</strong>: Use the analog stick for swing direction and buttons for swing type (contact, power, or bunt).
        </li>
        <li>
          <strong>Pitching</strong>: Select pitch type and location using the analog stick and buttons, with a timing mechanic for accuracy.
        </li>
        <li>
          <strong>Fielding</strong>: Control players with the analog stick; buttons correspond to throws to specific bases.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Game Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Enhanced Realism</strong>: Approximately 400 new animations and logic improvements provide lifelike player movements and reactions.
        </li>
        <li>
          <strong>Ambush Hitting</strong>: A new batting feature introducing a risk-reward system based on predicting pitch locations.
        </li>
        <li>
          <strong>Storylines Mode</strong>: Experience the careers of legendary players, including historical Negro Leagues athletes, through immersive narratives.
        </li>
        <li>
          <strong>Female Player Integration</strong>: For the first time, players can create and play as female athletes in the Road to the Show mode, promoting inclusivity.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Strategies</h2>
      <p className="text-lg mb-4">
        To excel in <strong>Baseball League 2024</strong>, consider the following strategies:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Master Ambush Hitting</strong>: Anticipate pitch locations to capitalize on the new batting mechanic.
        </li>
        <li>
          <strong>Utilize Player Development</strong>: Focus on training and upgrading player skills to enhance team performance in Franchise Mode.
        </li>
        <li>
          <strong>Engage with Storylines</strong>: Participate in Storylines Mode to gain insights into baseball history and unlock unique rewards.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Additional Content</h2>
      <p className="text-lg mb-4">
        For a visual overview of the game's features, check out the official gameplay demo:
      </p>
      <div className="mb-4">
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/qg9688J80oY"
          title="MLB The Show 24 Official Gameplay Demo"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-lg mb-4">
        <strong>Baseball League 2024</strong> sets a new standard in sports simulation, offering both depth and accessibility. Whether you're managing a franchise or stepping up to the plate, the game delivers an authentic and engaging baseball experience.
      </p>
    </div>
  );
};

export default BaseballLeague2024;
