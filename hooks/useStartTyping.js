import { useStartTyping } from "react-use";
import { useState } from "react";

export default function UseStartTyping() {
  const [typing, setTyping] = useState("try type your keyboard");

  useStartTyping(() => {
    setTyping("Typing...");
  });

  return <div>{typing}</div>;
}
