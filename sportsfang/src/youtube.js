function YouTube({ url, height, width }) {
    return <iframe
        src={`https://www.youtube-nocookie.com/embed/${url}?autoplay=1&mute=1&enablejsapi=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        height={height}
        width={width}
        frameBorder={0}
    />
}

export default YouTube;