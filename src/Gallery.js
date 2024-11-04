
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

export default function Gallery() {

  // Add your images here...
  const items = [
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    { // Another Image item:
      itemId: 'differentItem',
      mediaUrl: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    { // Another Image item:
      itemId: 'differentItem',
      mediaUrl: 'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    { // Another Image item:
      itemId: 'differentItem',
      mediaUrl: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    { // Another Image item:
      itemId: 'differentItem',
      mediaUrl: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    { // Image item:
      itemId: 'sample-id',
      mediaUrl: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    { // Another Image item:
      itemId: 'differentItem',
      mediaUrl: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    { // Another Image item:
      itemId: 'differentItem',
      mediaUrl: 'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    { // Another Image item:
      itemId: 'differentItem',
      mediaUrl: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
    { // Another Image item:
      itemId: 'differentItem',
      mediaUrl: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png',
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
        link: {
          url: 'http://example.com',
          target: '_blank'
        },
      }
    },
  ]

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 2, // 원하는 레이아웃 번호로 설정
    // 기타 옵션들
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) => console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <ProGallery
      items={items}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  );
}

// Enjoy using your new gallery!
// For more options, visit https://github.com/wix/pro-gallery
