export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60bfe4bc004ecb00b3e9b4f7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tgbcw5uj',
                  apiId: '3108873e-04dd-44df-92d8-14843fa234d8'
                },
                {
                  buildHookId: '60bfe4bd1dd05f00e93c5a7c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vh6e6bz7',
                  apiId: '83340a26-5485-4bb7-bf30-acf3e5ebe9bc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/notwerk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vh6e6bz7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
