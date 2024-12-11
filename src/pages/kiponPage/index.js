import { kiponIcon, kiponPoster1, kiponPoster2 } from "@/assets/images/image";
import GameBanner from "@/component/gameBanner";
import GameDes from "@/component/gameDes";
import Reviews from "@/component/reviews";

const reviewsData1 = [
  {
    name: 'Wang Wai',
    review: 'This game is an absolute joy to play! It’s simple yet challenging, and I find myself coming back to it every day. Perfect for short breaks or long sessions.',
  },
  {
    name: 'Jose Pablo',
    review: 'I really enjoy the relaxing vibe of this game. The graphics are smooth, and the gameplay is addictive. Highly recommend it to anyone who loves casual gaming.',
  },
  {
    name: 'Priya Gunga',
    review: 'A fantastic game to unwind with after a busy day. The controls are intuitive, and the levels are engaging. I appreciate the effort put into making this so enjoyable!',
  },
];

export default function KiponPage() {
  return (
    <main>
      <GameBanner
        gameBgClass="gameBg1"
        icon={kiponIcon}
        name="Kipon"
        category="Casual - Free"
        heading="A One-of-a-Kind Game That Offers Endless Excitement at Your Fingertips."
        description="Dive into a relaxing world with Kipon, a casual game perfect for quick play sessions. Enjoy endless fun, simple controls, and engaging levels to keep your stress at bay."
      />
      <Reviews
        ss1={kiponPoster1}
        ss2={kiponPoster2}
        rating="4.1"
        reviewsData={reviewsData1}
      />
      <GameDes
        gameDesCls="gameDesBg1"
        title="Challenge a Friend or Race Against the Clock as You Battle Through 20 Levels of Endless Fun"
        description="Kipon offers an immersive gaming experience with its unique challenges and engaging levels. Whether you prefer solo adventures or friendly competitions, this game guarantees hours of excitement. Its intuitive design ensures that players of all skill levels can jump right in and enjoy the thrill of casual gaming."
      />
    </main>
  );
}
