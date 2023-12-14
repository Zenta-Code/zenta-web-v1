"use client"
import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
const YouTubePlayer = ({ videoId }: any) => {
    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
        setShowPlayer(true);
    }, []);

    const url = `${videoId}`;

    return (
        <div className=" max-w-screen-sm mx-auto">
            {showPlayer && (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <ReactPlayer
                        className=" h-auto w-full hover:outline-dotted outline-emerald-900 p-2 my-4 rounded-xl"
                        width="100%"
                        muted={true}
                        url={url}
                        autoPlay={true}
                        controls={true}
                        playing={true}
                        loop={true}
                    />
                </React.Suspense>
            )}
        </div>
    );
};

export default YouTubePlayer;