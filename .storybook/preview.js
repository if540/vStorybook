/** @type { import('@storybook/vue3').Preview } */
import { extractComponentDescription } from '@storybook/docs-tools';
import { Title, Subtitle, Description, Primary, ArgTypes, Stories } from '@storybook/addon-docs';

import '../src/styles/tailwind.css';
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      // canvas: {
      //   sourceState: 'shown',
      // },
      toc: true, 
      source: {
        language: 'html',
        transform: function(code, storyContext) {
          // const app = h('a', storyContext.argTypes);
          // console.log('storyContext', storyContext)
          // parameters.docs.source.transform
          return code
        }
      },
    },
  },
  options: {
    // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
    storySort: (a, b) => {
      const isDocsA = a.name.includes('Docs');
      const isDocsB = b.name.includes('Docs');
      if (isDocsA && !isDocsB) {
        return -1; // 優先 "Docs"
      } else if (!isDocsA && isDocsB) {
        return 1; // "Docs" 放前面
      } else {
        // 若兩者皆為 "Docs" 或皆非 "Docs"，則根據 id 排序
        return a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true });
      }
    }
  },
  tags: ['autodocs']
};

export default preview;
