import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';

import {
  HEADER_EDGE_SPACE_TOKEN,
  HEADER_ICON_SIZE,
} from '../../../config/constant';

export default function IndexTabBarHeaderRight() {
  return (
    <Link href="/modal" asChild>
      <Ionicons
        name="notifications-outline"
        size={HEADER_ICON_SIZE}
        color="black"
        style={{ marginRight: HEADER_EDGE_SPACE_TOKEN }}
      />
    </Link>
  );
}
