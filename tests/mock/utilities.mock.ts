export const snakeCaseObject = {
  first_name: 'Luke',
  last_name: 'Skywalker'
}

export const camelCaseObject = {
  firstName: 'Luke',
  lastName: 'Skywalker'
}

export const nestedResponseObject = {
  'document_name': 'Home',
  'meta_title': 'Foxen',
  'meta_description': 'We do business!',
  'meta_image': {
    'dimensions': {
      'width': 1848,
      'height': 862
    },
    'alt': null,
    'copyright': null,
    'url': 'https://foxen.cdn.prismic.io/foxen/49d0196491caf4421db933427609f4d42dbeea03_foxen.png',
    'second_url': 'https://foxen.cdn.prismic.io/foxen/49d0196491caf4421db933427609f4d42dbeea03_foxen.jpg'
  },
  'body': [
    {
      'slice_type': 'test_slice',
      'slice_label': null,
      'items': [
        {
          'test_loop_rich_text': [
            {
              'type': 'paragraph',
              'text': 'fdsafdas',
              'spans': []
            }
          ]
        },
        {
          'test_loop_rich_text': [
            {
              'type': 'paragraph',
              'text': 'fdsafdsa',
              'spans': []
            }
          ]
        }
      ],
      'primary': {
        'hello_': 'howdy',
        'im_rich': [
          {
            'type': 'paragraph',
            'text': 'hi there',
            'spans': []
          }
        ]
      }
    },
    {
      'slice_type': 'test_slice',
      'slice_label': null,
      'items': [
        {
          'test_loop_rich_text': []
        }
      ],
      'primary': {
        'hello_': 'doody',
        'im_rich': [
          {
            'type': 'heading5',
            'text': 'hi again',
            'spans': []
          }
        ]
      }
    },
    {
      'slice_type': 'test_slice',
      'slice_label': null,
      'items': [
        {
          'test_loop_rich_text': []
        }
      ],
      'primary': {
        'hello_': 'many',
        'im_rich': [
          {
            'type': 'paragraph',
            'text': '',
            'spans': []
          }
        ]
      }
    }
  ]
}

export const flattenedResponseObject = {
  'document_name': 'Home',
  'meta_title': 'Foxen',
  'meta_description': 'We do business!',
  'meta_image.dimensions.width': 1848,
  'meta_image.dimensions.height': 862,
  'meta_image.alt': null,
  'meta_image.copyright': null,
  'meta_image.url': 'https://foxen.cdn.prismic.io/foxen/49d0196491caf4421db933427609f4d42dbeea03_foxen.png',
  'meta_image.second_url': 'https://foxen.cdn.prismic.io/foxen/49d0196491caf4421db933427609f4d42dbeea03_foxen.jpg',
  'body[0].slice_type': 'test_slice',
  'body[0].slice_label': null,
  'body[0].items[0].test_loop_rich_text[0].type': 'paragraph',
  'body[0].items[0].test_loop_rich_text[0].text': 'fdsafdas',
  'body[0].items[1].test_loop_rich_text[0].type': 'paragraph',
  'body[0].items[1].test_loop_rich_text[0].text': 'fdsafdsa',
  'body[0].primary.hello_': 'howdy',
  'body[0].primary.im_rich[0].type': 'paragraph',
  'body[0].primary.im_rich[0].text': 'hi there',
  'body[1].slice_type': 'test_slice',
  'body[1].slice_label': null,
  'body[1].primary.hello_': 'doody',
  'body[1].primary.im_rich[0].type': 'heading5',
  'body[1].primary.im_rich[0].text': 'hi again',
  'body[2].slice_type': 'test_slice',
  'body[2].slice_label': null,
  'body[2].primary.hello_': 'many',
  'body[2].primary.im_rich[0].type': 'paragraph',
  'body[2].primary.im_rich[0].text': ''
}

export const imageArrayFromNestedResponseObject = [
  'https://foxen.cdn.prismic.io/foxen/49d0196491caf4421db933427609f4d42dbeea03_foxen.png',
  'https://foxen.cdn.prismic.io/foxen/49d0196491caf4421db933427609f4d42dbeea03_foxen.jpg'
]
