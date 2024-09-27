import "core-js/full/promise/with-resolvers.js";
import polyfillPromiseWithResolvers from "@/utils/polyfilsResolver";
import MagazineWrapper from "@/components/magazine/MagazineWrapper";

polyfillPromiseWithResolvers();

export default function page() {
  return <MagazineWrapper />;
}
