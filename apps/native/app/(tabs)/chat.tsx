import { map } from 'lodash';
import { Stack, Text } from 'tamagui';
import { Carousel, ChatIndexTemplate } from 'ui';

export default function Chat() {
  return (
    <ChatIndexTemplate>
      <Carousel
        native={{
          containerStyle: {
            maxHeight: 160,
          },
        }}
      >
        {map([1, 2, 3], (item, index) => (
          <Stack
            key={index}
            alignItems="center"
            backgroundColor="#98cae5"
            flex={1}
            justifyContent="center"
          >
            <Text color="#fff" fontSize="$10" fontWeight="200">
              Slide {++index}
            </Text>
          </Stack>
        ))}
      </Carousel>
    </ChatIndexTemplate>
  );
}
