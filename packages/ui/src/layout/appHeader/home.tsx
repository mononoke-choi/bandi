import React from 'react';
import { Link } from 'solito/link';

import { HEADER_ICON_SIZE } from '../../../config/constant';
import AlarmSVG from '../../assets/alarm.svg';

export function HomeHeaderRight() {
  return (
    <Link href="/modal">
      <AlarmSVG
        width={HEADER_ICON_SIZE}
        height={HEADER_ICON_SIZE}
        color="#000"
      />
    </Link>
  );
}
