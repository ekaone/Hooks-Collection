import { useMedia } from "react-use";

export default function UseMedia() {
  const isWide = useMedia("(min-width: 700px)");

  return (
    <div>
      Screen is wide:{" "}
      <span style={{ color: "orangered", fontWeight: "600" }}>
        {isWide ? "Yes" : "No"}
      </span>
    </div>
  );
}
