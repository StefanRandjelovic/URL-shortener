// DEV DEPENDENCIES
import { atomWithStorage } from "jotai/utils";

const shortenedLinks = atomWithStorage("links", []);

export { shortenedLinks };
