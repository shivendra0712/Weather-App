function Video({ video }) {
    return (
      <div>
        <Thumbnail video={video} />
        <a href={video.url}>
         
        </a>
        <LikeButton video={video} />
      </div>
    );
  }