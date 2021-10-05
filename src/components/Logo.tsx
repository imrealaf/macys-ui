import logo from "logo.svg";
import { LogoHeight } from "theme/sizes";
import { useBreakpoint } from "hooks";

function Logo() {
  const bp = useBreakpoint();

  return (
    <img
      src={logo}
      style={{ height: `${bp.smAndUp ? LogoHeight.default : LogoHeight.sm}px` }}
      alt="logo"
    />
  );
}

export default Logo;
