

const component = require('./index');
const less = require('!raw-loader!./index.less');
const templateStr = require('!raw-loader!./index');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper content8-wrapper',
    },
    page: {
      className: 'home-page content8',
    },
    OverPack: {
      playScale: 0.3,
    },
    titleWrapper: {
      className: 'title-wrapper',
      children: [
        {
          name: 'image',
          children: 'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
          className: 'title-image',
        },
        {
          name: 'title',
          children: '特邀嘉宾',
          className: 'title-h1',
        },
      ],
    },
    block: {
      className: 'content-wrapper',
      children: [
        {
          name: 'block0',
          md: 6,
          xs: 24,
          className: 'block-wrapper',
          children: {
            className: 'block',
            img: {
              className: 'block-img',
              children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
            },
            title: {
              className: 'block-title',
              children: 'Jack',
            },
            content: {
              className: 'block-content',
              children: '公司+职位 信息暂缺',
            },
          },
        },
        {
          name: 'block1',
          md: 6,
          xs: 24,
          className: 'block-wrapper',
          children: {
            className: 'block',
            img: {
              className: 'block-img',
              children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
            },
            title: {
              className: 'block-title',
              children: 'Jack',
            },
            content: {
              className: 'block-content',
              children: '公司+职位 信息暂缺',
            },
          },
        },
        {
          name: 'block2',
          md: 6,
          xs: 24,
          className: 'block-wrapper',
          children: {
            className: 'block',
            img: {
              className: 'block-img',
              children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
            },
            title: {
              className: 'block-title',
              children: 'Jack',
            },
            content: {
              className: 'block-content',
              children: '公司+职位 信息暂缺',
            },
          },
        },
        {
          name: 'block3',
          md: 6,
          xs: 24,
          className: 'block-wrapper',
          children: {
            className: 'block',
            img: {
              className: 'block-img',
              children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
            },
            title: {
              className: 'block-title',
              children: 'Jack',
            },
            content: {
              className: 'block-content',
              children: '公司+职位 信息暂缺',
            },
          },
        },
        {
          name: 'block4',
          md: 6,
          xs: 24,
          className: 'block-wrapper',
          children: {
            className: 'block',
            img: {
              className: 'block-img',
              children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
            },
            title: {
              className: 'block-title',
              children: 'Jack',
            },
            content: {
              className: 'block-content',
              children: '公司+职位 信息暂缺',
            },
          },
        },
        {
          name: 'block5',
          md: 6,
          xs: 24,
          className: 'block-wrapper',
          children: {
            className: 'block',
            img: {
              className: 'block-img',
              children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
            },
            title: {
              className: 'block-title',
              children: 'Jack',
            },
            content: {
              className: 'block-content',
              children: '公司+职位 信息暂缺',
            },
          },
        },
        {
          name: 'block6',
          md: 6,
          xs: 24,
          className: 'block-wrapper',
          children: {
            className: 'block',
            img: {
              className: 'block-img',
              children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
            },
            title: {
              className: 'block-title',
              children: 'Jack',
            },
            content: {
              className: 'block-content',
              children: '公司+职位 信息暂缺',
            },
          },
        },
        {
          name: 'block7',
          md: 6,
          xs: 24,
          className: 'block-wrapper',
          children: {
            className: 'block',
            img: {
              className: 'block-img',
              children: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
            },
            title: {
              className: 'block-title',
              children: 'Jack',
            },
            content: {
              className: 'block-content',
              children: '公司+职位 信息暂缺',
            },
          },
        },
      ],
    },
  },
};
