import joinClassNames from "@adapters/native/functions/joinClassNames";

import type { SpinnerProps } from "./types";

const Spinner = ({ isLarge = false }: SpinnerProps) => <span className={joinClassNames("msf-spinner", isLarge && "msf-spinner--large")} aria-hidden="true" />;

export default Spinner;
