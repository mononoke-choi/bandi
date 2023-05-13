import React from 'react';
import { Link } from 'solito/link';
import SettingSVG from 'ui/src/assets/setting.svg';

import { HEADER_ICON_SIZE } from '../../../config/constant';

export default function MyPageHeaderRight() {
  return (
    <Link href="/setting">
      <SettingSVG
        width={HEADER_ICON_SIZE}
        height={HEADER_ICON_SIZE}
        color="#000"
      />
    </Link>
  );
}
