import { useGeolocation } from "react-use";

export default function UseGeolocation() {
  const state = useGeolocation();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}
