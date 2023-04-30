'use client';

import 'client-only';
import { useEffect, useState } from 'react';
import { Sheet, Text } from 'tamagui';
import NotificationList from 'ui/src/template/notificationList';

export default function Page() {
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(function renderSheetAfterSomePortalMountingDuration() {
    setTimeout(() => {
      setOpen(true);
    }, 200);
  }, []);

  return (
    <Sheet
      forceRemoveScrollEnabled={open}
      modal={true}
      open={open}
      onOpenChange={setOpen}
      snapPoints={[95, 50, 25]}
      dismissOnSnapToBottom
      position={position}
      onPositionChange={setPosition}
      zIndex={100_000}
    >
      <Sheet.Overlay />
      <Sheet.Frame
        display="flex"
        flex={1}
        padding="$4"
        justifyContent="center"
        alignItems="center"
        space="$5"
      >
        <Text fontFamily="$body" fontSize="$6">
          Notification
        </Text>
        <Sheet.ScrollView width="100%" flex={1}>
          <NotificationList />
        </Sheet.ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
}
