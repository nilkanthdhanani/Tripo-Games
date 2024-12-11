import GameBanner from "@/component/gameBanner";
import { robotrixIcon, robotrixPoster1, robotrixPoster2 } from "@/assets/images/image";
import Reviews from "@/component/reviews";
import GameDes from "@/component/gameDes";

const reviewsData2 = [
  {
    name: 'Omar Zaine',
    review: 'Incredible game with great strategy elements! It keeps me hooked with its futuristic design and challenging levels. Definitely one of the best games I’ve played in a while.',
  },
  {
    name: 'Jay Panday',
    review: 'The attention to detail in this game is amazing. From the gameplay to the visuals, everything feels polished and fun. I’d recommend it to all my friends!',
  },
  {
    name: 'Danni Lopez',
    review: 'I can’t stop playing this game! It’s both fun and challenging, which makes it highly addictive. Kudos to the developers for creating such an enjoyable experience.',
  },
];

export default function RobotrixPage() {
  return (
    <main>
      <GameBanner
        gameBgClass="gameBg2"
        icon={robotrixIcon}
        name="Robotrix"
        category="RPG - Free"
        heading="Enjoy Tactical Combat and Secrets to Find With Robotrix."
        description="Embark on an epic adventure in Robotrix, an RPG filled with futuristic challenges. Customize robots, battle powerful enemies, and explore a world where strategy and skill decide your fate."
      />
      <Reviews
        ss1={robotrixPoster1}
        ss2={robotrixPoster2}
        rating="4.2"
        reviewsData={reviewsData2}
      />
      <GameDes
        gameDesCls="gameDesBg2"
        title="Open-world playability wherever you are"
        description="Robotrix offers a captivating RPG experience, blending strategic gameplay with an expansive world to explore. Build your perfect team of robots, uncover hidden secrets, and prove your skills in epic battles. Each decision you make shapes your adventure, offering a unique journey with every playthrough."
      />
    </main>
  );
}
