import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

interface GameAreaProps {
    title: string;
    votes?: number;
    score?: number;
    gameControl?: string;
    gameUrl: string;
}

const GameArea: React.FC<GameAreaProps> = ({
    title,
    votes = 5257,
    score = 4.9,
    gameControl,
    gameUrl
}: GameAreaProps) => {

    const recommandGames = [
        // { id: 7, title: 'Escape Road 2', image: '🏎' },
        // { id: 8, title: 'Tap Road', image: '🔵' },
        // { id: 9, title: 'Escape Road Winter', image: '❄️' },
        // { id: 10, title: 'Escape Road City', image: '🌆' },
        // { id: 11, title: 'Escape Road City 2', image: '🏙' },
        // { id: 12, title: 'Snow Road', image: '🎿' },
    ];

    const gameIframeRef = useRef<HTMLIFrameElement>(null);

    return (
        <div className=" bg-zinc-900 p-4">
            <div className="max-w-4xl mx-auto">

                {/* <div id='top-ads' className="flex justify-center items-center mb-6 w-full h-20 border border-zinc-700 relative">
                    <span className='absolute top-0 left-0 from-zinc-700 to-zinc-800 opacity-50 text-[10px]'>ads</span>
                </div> */}

                <h1 className='text-2xl font-catamaran text-yellow-500 mb-2 text-center font-bold'>{title}</h1>

                {/* Main Game Area */}
                <div className="flex-1">
                    <div className="bg-zinc-700 rounded-lg p-2">
                        {/* UpBar */}
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4].map((star) => (
                                    <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                ))}
                                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" strokeWidth={1} />
                                <span className="ml-2 text-sm text-white font-catamaran">{votes} votes {score}/5</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 bg-blue-100 rounded-full">🔄</button>
                                <button className="p-2 bg-blue-100 rounded-full">🔊</button>
                            </div>
                        </div>

                        {/* Game Canvas */}
                        <div className="aspect-video rounded-lg relative">
                            <div id="iframe-container" className='w-full h-full flex justify-center items-center'>
                                <iframe
                                    ref={gameIframeRef}
                                    src={gameUrl}
                                    className="w-full h-full overflow-hidden"
                                    tabIndex={0}>
                                </iframe>
                            </div>
                            <button
                                onClick={() => {
                                    const iframe = document.querySelector('iframe');
                                    if (iframe) {
                                        if (document.fullscreenElement) {
                                            document.exitFullscreen();
                                        } else {
                                            iframe.requestFullscreen();
                                        }
                                    }
                                }}
                                className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                                ⛶
                            </button>
                        </div>

                        {/* Game Controls */}
                        <div className="flex justify-between mt-4">
                            <div className="flex gap-2">
                                <button className="p-2 bg-blue-500 text-white rounded">🚗</button>
                                <button className="p-2 bg-blue-500 text-white rounded">🏛</button>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='text-sm text-gray-300 font-catamaran font-bold mx-4'>
                                    {gameControl ? <span className='text-yellow-500'>Tip:</span> : null} {gameControl}

                                </span>
                            </div>
                            <a href="/"
                                className="px-4 py-2 bg-yellow-500 text-white rounded">
                                MORE GAMES
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div id='bottom-ads' className="flex justify-center items-center mt-6 w-full h-20 border border-zinc-700 relative">
                    <span className='absolute top-0 left-0 from-zinc-700 to-zinc-800 opacity-50 text-[10px]'>ads</span>
                </div> */}

                {/* recommend */}
                <div className="w-24">
                    {recommandGames.map((game) => (
                        <a
                            href={game.href}
                            key={game.id}
                            style={{ backgroundImage: game.image }}
                            className={`block bg-white rounded-lg mb-2 cursor-pointer hover:shadow-lg transition-shadow relative w-24 h-24`}
                        >
                            <p className="text-xs text-center font-medium absolute bottom-0 left-0 w-full h-8">{game.title}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default GameArea;