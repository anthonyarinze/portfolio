import { headerStyles } from "../constants/headerStyle";

const Playlists = () => {
  return (
    <section className="mt-10">
      <h2 className={headerStyles}>My Playlists</h2>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/0BImrgynnyD6aL1nv8xwSe?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Playlists;
