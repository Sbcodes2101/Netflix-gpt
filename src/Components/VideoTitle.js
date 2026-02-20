import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen h-screen pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black/90'>
        <h1 className='py-6 text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className="flex flex-wrap items-center gap-4 pt-2 md:pt-4">
        {/* Play button */}
        <button
          className="
            flex items-center gap-2 rounded bg-white px-5 py-2 md:px-8 md:py-4
            text-base font-bold text-black transition hover:bg-white/90 md:text-xl
          "
        >
          <svg
            className="h-6 w-6 md:h-8 md:w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>

        {/* More Info button */}
        <button
          className="
            flex items-center gap-2 rounded bg-gray-600/70 px-5 py-2 md:px-8 md:py-4
            text-base font-bold text-white backdrop-blur-sm transition hover:bg-gray-600/90 md:text-xl
          "
        >
          <svg
            className="h-6 w-6 md:h-8 md:w-8"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle