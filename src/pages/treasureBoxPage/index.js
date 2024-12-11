import { treasureIcon, treasurePoster1, treasurePoster2 } from '@/assets/images/image'
import GameBanner from '@/component/gameBanner'
import GameDes from '@/component/gameDes';
import Reviews from '@/component/reviews'
import React from 'react'

const reviewsData3 = [
  {
    name: 'Max Ottis',
    review: 'The game combines smooth mechanics with stunning visuals. I’m absolutely loving the unique challenges it offers. It’s perfect for anyone looking for a fun and exciting game!',
  },
  {
    name: 'Charlie K',
    review: 'Such a delightful game! It’s easy to pick up but hard to put down. The levels are well-designed and offer a great balance of fun and difficulty.',
  },
  {
    name: 'Sofie Zacks',
    review: 'This game has quickly become my favorite pastime. The creative gameplay and vibrant visuals make it a joy to play. I can’t wait for more updates!',
  },
];

export default function TreasureBoxPage() {
  return (
    <main>
      <GameBanner
        gameBgClass="gameBg3"
        icon={treasureIcon}
        name="Treasure Box"
        category="Adventure - Free"
        heading="A Free-to-Play Adventure Game That Seriously Packs a Punch"
        description="Unleash your inner explorer in Treasure Box! Solve puzzles, discover hidden treasures, and embark on thrilling adventures across magical lands. It's a journey filled with surprises and rewards!"
      />
      <Reviews
        ss1={treasurePoster1}
        ss2={treasurePoster2}
        rating="3.5"
        reviewsData={reviewsData3}
      />
      <GameDes
        gameDesCls="gameDesBg3"
        title="Challenge a Friend or Race Against the Clock as You Battle Through 20 Levels of Endless Fun"
        description="Treasure Box combines the excitement of puzzle-solving with the thrill of exploration. Every level is a new adventure, packed with mysteries to unravel and treasures to claim. Its captivating visuals and engaging gameplay ensure endless fun for adventurers of all ages."
      />
    </main>
  )
}
