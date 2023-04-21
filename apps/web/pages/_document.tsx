import { isFunction } from 'lodash';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { Children } from 'react';
import { AppRegistry } from 'react-native';

import tamaguiConfig from '../tamagui.config';

class MyDocument extends Document {
  static async getInitialProps({ renderPage }: DocumentContext) {
    AppRegistry.registerComponent('Main', () => Main);
    const page = await renderPage();
    let _getStyleElement;

    if ('getApplication' in AppRegistry) {
      if (isFunction(AppRegistry.getApplication)) {
        const { getStyleElement } = AppRegistry.getApplication('Main');

        _getStyleElement = getStyleElement;
      }
    }

    /**
     * Note: be sure to keep tamagui styles after react-native-web styles like
     * it is here! So Tamagui styles can override the react-native-web styles.
     */
    const styles = [
      _getStyleElement?.(),
      <style
        key="tamagui-css"
        dangerouslySetInnerHTML={{ __html: tamaguiConfig.getCSS() }}
      />,
    ];

    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
