import { GameInfo } from "@lib/types";
import GameArea from "./GameArea";
import React from "react";


interface GamePageProps {
    main_game: GameInfo;
    left_side_games: GameInfo[];
    right_side_games: GameInfo[];
    recommand_games: GameInfo[];
    // markdown格式的文章
    Article: React.FC;
}

const GamePage = ({
    main_game,
    left_side_games,
    right_side_games,
    recommand_games,
    Article
}: GamePageProps) => {
    return (
        <div className=" bg-zinc-900 p-2">
            <div className="w-full">

                {/* <div id='top-ads' className="flex justify-center items-center mb-6 w-full h-20 border border-zinc-700 relative">
                <span className='absolute top-0 left-0 from-zinc-700 to-zinc-800 opacity-50 text-[10px]'>ads</span>
            </div> */}

                <h1 className='text-3xl font-cartoon text-yellow-500 text-center font-bold mb-2'>{main_game.name}</h1>

                <div id="game-region" className="w-full flex justify-center items-center gap-6 mb-14">
                    <div id="left-side" className="w-[7rem] h-full flex flex-col justify-between items-center gap-4">
                        {left_side_games && left_side_games.map(game => (
                            <a href={game.href}
                                style={{ backgroundImage: `url(${game.image})` }}
                                className="relative w-[7rem] h-[7rem] bg-center bg-cover rounded-lg hover:opacity-75 transition-opacity duration-200 ease-in-out"
                            >
                                <span className="absolute w-full bottom-0 left-0 text-center font-cartoon font-bold break-words drop-shadow-[2px_2px_0px_black] text-white">{game.name}</span>
                            </a>
                        ))}
                    </div>
                    <GameArea name={main_game.name}
                        iframe_url={main_game.iframe_url}
                        votes={main_game.votes}
                        score={main_game.score}
                    />

                    <div id="left-side" className="w-[7rem] h-full flex flex-col justify-center items-center gap-4">
                        {right_side_games && right_side_games.map(game => (
                            <a href={game.href}
                                style={{ backgroundImage: `url(${game.image})` }}
                                className="relative w-[7rem] h-[7rem] bg-center bg-cover rounded-lg hover:opacity-75 transition-opacity duration-200 ease-in-out"
                            >
                                <span className="absolute w-full bottom-0 left-0 text-center font-cartoon break-words drop-shadow-[2px_2px_0px_black] text-white">{game.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div id="article_and_recommand" className="w-full flex justify-center items-start gap-10">
                    <div id="article" className="w-[48%] flex flex-col justify-center items-center gap-4 border-4 border-green-900 rounded-2xl p-2">
                        <h2 className="font-cartoon text-yellow-500 font-bold text-2xl">About Baseball Bros IO</h2>
                        <Article />
                    </div>
                    <div id="recommand" className="w-[48%] flex flex-col py-2 justify-center items-center gap-4 border-4 border-green-900 rounded-2xl">
                        <h2 className="font-cartoon text-yellow-500 font-bold text-2xl">Recommended Games</h2>
                        <div className="w-full flex flex-wrap justify-center items-center gap-4 px-4">
                            {recommand_games && recommand_games.map(game => (
                                <a href={game.href}
                                    style={{ backgroundImage: `url(${game.image})` }}
                                    className="relative w-[6.5rem] h-[6.5rem] bg-center bg-cover rounded-lg hover:opacity-75 transition-opacity duration-200 ease-in-out"
                                >
                                    <span className="absolute w-full bottom-0 left-0 text-center font-cartoon break-words drop-shadow-[2px_2px_0px_black] text-white">{game.name}</span>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default GamePage;