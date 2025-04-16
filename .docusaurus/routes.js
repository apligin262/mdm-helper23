import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b47'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '68e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7b5'),
            routes: [
              {
                path: '/docs/android-enterprise/',
                component: ComponentCreator('/docs/android-enterprise/', '136'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/android-management/',
                component: ComponentCreator('/docs/android-management/', 'a9c'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/announcements/',
                component: ComponentCreator('/docs/announcements/', '9c5'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/app-deployment/',
                component: ComponentCreator('/docs/app-deployment/', '55b'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/configurations/',
                component: ComponentCreator('/docs/configurations/', 'c33'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/content-management/',
                component: ComponentCreator('/docs/content-management/', '11e'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/deployment/',
                component: ComponentCreator('/docs/deployment/', 'f7a'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/enrolled-devices/',
                component: ComponentCreator('/docs/enrolled-devices/', '180'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/faq/',
                component: ComponentCreator('/docs/faq/', 'c20'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/getting-started/',
                component: ComponentCreator('/docs/getting-started/', '8ac'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/instructions/',
                component: ComponentCreator('/docs/instructions/', '62e'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/integrations/',
                component: ComponentCreator('/docs/integrations/', 'fa5'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/ios-management/',
                component: ComponentCreator('/docs/ios-management/', 'b2f'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/kiosk-mode/',
                component: ComponentCreator('/docs/kiosk-mode/', '283'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/linux-management/',
                component: ComponentCreator('/docs/linux-management/', '914'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/mac-management/',
                component: ComponentCreator('/docs/mac-management/', '9b7'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/patches-updates/',
                component: ComponentCreator('/docs/patches-updates/', '471'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/profile-repository/',
                component: ComponentCreator('/docs/profile-repository/', 'bfc'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/remote-actions/',
                component: ComponentCreator('/docs/remote-actions/', 'c19'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/reports/',
                component: ComponentCreator('/docs/reports/', 'cf5'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/script-repository/',
                component: ComponentCreator('/docs/script-repository/', '8f3'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/tracking-devices/',
                component: ComponentCreator('/docs/tracking-devices/', 'b31'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/troubleshooting/',
                component: ComponentCreator('/docs/troubleshooting/', '12c'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/tvos-management/',
                component: ComponentCreator('/docs/tvos-management/', '865'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/user-group-management/',
                component: ComponentCreator('/docs/user-group-management/', '23f'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/visionos-management/',
                component: ComponentCreator('/docs/visionos-management/', 'cb6'),
                exact: true,
                sidebar: "sidebar"
              },
              {
                path: '/docs/windows-management/',
                component: ComponentCreator('/docs/windows-management/', '00d'),
                exact: true,
                sidebar: "sidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
