import BackgroundVideo from "./assets/Cryptohub.mp4";
import { LinkContainer } from "react-router-bootstrap";

import "./styles.css";

export default function Home() {
  return (
    <div styl>
      <h1 className="front-text">Welcome to Cryptohub</h1>
      <LinkContainer to="/Chart">
        <video className="Video-player" loop autoPlay muted={true}>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </LinkContainer>
    </div>
  );
}
