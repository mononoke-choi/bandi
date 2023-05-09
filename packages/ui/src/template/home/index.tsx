'use client';

import 'client-only';
import React, { ComponentProps } from 'react';
import { getVariable, Stack, Text, XStack, YStack, useTheme } from 'tamagui';
import HeartSVG from 'ui/src/assets/heart.svg';
import { Post } from 'web/app/api/posts/post';

import Image from '../../block/image/image';
import Windowing from '../../block/windowing';

const POST_IMAGE_SIZE = 80;
function FixedRow({
  item,
  isLastItem,
  isWeb,
  children,
  ...rest
}: {
  item: Post;
} & {
  isLastItem: boolean;
  isWeb?: boolean;
} & ComponentProps<typeof XStack>) {
  const theme = useTheme();

  return (
    <XStack
      paddingVertical="$4"
      paddingHorizontal="$4"
      borderBottomColor="$gray5"
      borderBottomWidth={isLastItem ? '$0' : '$1'}
      space="$4"
      {...(isWeb && {
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
      })}
      {...rest}
    >
      <Stack borderRadius="$4" overflow="hidden">
        <Image
          web={{
            alt: 'Random sport faker image',
            height: POST_IMAGE_SIZE,
            src: item.img,
            unoptimized: true,
            width: POST_IMAGE_SIZE,
          }}
          native={{
            source: {
              height: POST_IMAGE_SIZE,
              uri: item.img,
              width: POST_IMAGE_SIZE,
            },
          }}
        />
      </Stack>
      <YStack space="$2" flex={1}>
        <Text
          fontFamily="$body"
          fontSize="$4"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item?.title}
        </Text>
        <Text
          fontFamily="$body"
          fontSize="$3"
          numberOfLines={1}
          ellipsizeMode="tail"
          color="$gray11"
        >
          {item?.description}
        </Text>
        <XStack space="$2" alignItems="center" marginTop="$1">
          <Text fontFamily="$body" fontSize="$1" color="$gray10">
            {item?.meta.location}
          </Text>
          <Text fontFamily="$body" fontSize="$1" color="$gray10">
            {item?.meta.createdAt?.toLocaleString()}
          </Text>
          <XStack space="$1" alignItems="center" marginLeft="auto">
            <HeartSVG width={14} height={14} color={getVariable(theme.gray9)} />
            <Text fontFamily="$body" fontSize="$1" color="$gray10">
              1
            </Text>
          </XStack>
        </XStack>
      </YStack>
    </XStack>
  );
}

const ESTIMATED_ITEM_SIZE = 120;
interface HomeTemplateProps {
  data: Post[];
}
export default function HomeTemplate({ data }: HomeTemplateProps) {
  const count = data.length;

  return (
    <Windowing
      data={data}
      native={{
        estimatedItemSize: ESTIMATED_ITEM_SIZE,
        renderItem: ({ item, index }) => (
          <FixedRow item={item} isLastItem={count - 1 === index} />
        ),
      }}
      web={{
        count,
        estimateSize: () => ESTIMATED_ITEM_SIZE,
        renderItem: ({ item, size, start, isLastItem, index }) => (
          <FixedRow
            item={item}
            isLastItem={isLastItem}
            style={{
              height: `${size}px`,
            }}
            y={start}
            isWeb={true}
          >
            {index}
          </FixedRow>
        ),
      }}
    />
  );
}
