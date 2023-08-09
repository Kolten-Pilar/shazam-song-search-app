import React from 'react'

// function to display data from song search
function DisplaySong({ result }) {
  // if there isn't any results, display this
  if (!result || !result.tracks || !result.tracks.hits || !result.tracks.hits[0]) {
    return <div>No Results Found</div>
  }
  console.log(result);
  return (
    <div>
      <h1>{result.tracks.hits[0].track.title}</h1>
      <h2>{result.tracks.hits[0].track.subtitle}</h2>
      <img src={result.tracks.hits[0].track.images.coverarthq} alt='image' />
      {/* I wanted to add the album, but there was no data for it. So the album will be in the cover art (hopefully) */}
    </div>
  )
}

export default DisplaySong