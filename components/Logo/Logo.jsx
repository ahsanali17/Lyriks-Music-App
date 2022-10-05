import Image from 'next/image';

import { LogoWrapper, SVGWrapper } from './styles';
import logoSVG from '../../assets/lyriks-logo.svg';

const Logo = () => {
  return (
    <LogoWrapper>
      <SVGWrapper>
        <Image src={logoSVG} />
      </SVGWrapper>
    </LogoWrapper>
  );
};

export default Logo;
