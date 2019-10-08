import { Document } from '../../node_modules/prismic-javascript/d.ts/documents.d'
import {
    MergerdPrismicSingleDocResponse,
    FormattedDocument, 
    CamelCasedFormattedDocument
  } from '../../types/prismic'

export const prismicResponse: Document = {
    'id': 'XYjfVRIAACYAiUwn',
    'uid': 'index',
    'type': 'page',
    'href': 'https://foxen.cdn.prismic.io/api/v2/documents/search?ref=XZuWwBIAACEAulTN&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XYjfVRIAACYAiUwn%22%29+%5D%5D',
    'tags': [],
    'first_publication_date': '2019-09-23T15:06:01+0000',
    'last_publication_date': '2019-10-07T19:12:42+0000',
    'slugs': [
      'home',
      'hi-again',
      'foxen',
      'we-do-business',
      'hello-there',
      'foxen-homepage'
    ],
    'lang': 'en-us',
    'alternate_languages': [],
    'data': {
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
        'url': 'https://foxen.cdn.prismic.io/foxen/49d0196491caf4421db933427609f4d42dbeea03_foxen.png'
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
  }

  export const mergedPrismicResponse: MergerdPrismicSingleDocResponse = {
    'id': 'XYjfVRIAACYAiUwn',
    'uid': 'index',
    'type': 'page',
    'href': 'https://foxen.cdn.prismic.io/api/v2/documents/search?ref=XZuWwBIAACEAulTN&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XYjfVRIAACYAiUwn%22%29+%5D%5D',
    'tags': [],
    'first_publication_date': '2019-09-23T15:06:01+0000',
    'last_publication_date': '2019-10-07T19:12:42+0000',
    'slugs': [
      'home',
      'hi-again',
      'foxen',
      'we-do-business',
      'hello-there',
      'foxen-homepage'
    ],
    'slices': undefined,
    'lang': 'en-us',
    'alternate_languages': [],
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
      'url': 'https://foxen.cdn.prismic.io/foxen/49d0196491caf4421db933427609f4d42dbeea03_foxen.png'
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

  export const loopableSliceResponse: FormattedDocument = {
    'id': 'XYjfVRIAACYAiUwn',
    'uid': 'index',
    'type': 'page',
    'href': 'https://foxen.cdn.prismic.io/api/v2/documents/search?ref=XZuWwBIAACEAulTN&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XYjfVRIAACYAiUwn%22%29+%5D%5D',
    'tags': [],
    'first_publication_date': '2019-09-23T15:06:01+0000',
    'last_publication_date': '2019-10-07T19:12:42+0000',
    'slugs': [
      'home',
      'hi-again',
      'foxen',
      'we-do-business',
      'hello-there',
      'foxen-homepage'
    ],
    'lang': 'en-us',
    'alternate_languages': [],
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
      'url': 'https://foxen.cdn.prismic.io/foxen/49d0196491caf4421db933427609f4d42dbeea03_foxen.png'
    },
    'slices': {
      'test_slice': [
        {
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
          },
          'order': 0
        },
        {
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
          },
          'order': 2
        },
        {
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
          },
          'order': 4
        }
      ]
    }
  }


  export const page: CamelCasedFormattedDocument = {
    'id': 'XYjfVRIAACYAiUwn',
    'uid': 'index',
    'type': 'page',
    'href': 'https://foxen.cdn.prismic.io/api/v2/documents/search?ref=XZuWwBIAACEAulTN&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XYjfVRIAACYAiUwn%22%29+%5D%5D',
    'tags': [],
    'firstPublicationDate': '2019-09-23T15:06:01+0000',
    'lastPublicationDate': '2019-10-07T19:12:42+0000',
    'slugs': [
      'home',
      'hi-again',
      'foxen',
      'we-do-business',
      'hello-there',
      'foxen-homepage'
    ],
    'lang': 'en-us',
    'alternateLanguages': [],
    'documentName': 'Home',
    'metaTitle': 'Foxen',
    'metaDescription': 'We do business!',
    'metaImage': {
      'dimensions': {
        'width': 1848,
        'height': 862
      },
      'alt': null,
      'copyright': null,
      'url': 'https://foxen.cdn.prismic.io/foxen/49d0196491caf4421db933427609f4d42dbeea03_foxen.png'
    },
    'slices': {
      'testSlice': [
        {
          'items': [
            {
              'testLoopRichText': [
                {
                  'type': 'paragraph',
                  'text': 'fdsafdas',
                  'spans': []
                }
              ]
            },
            {
              'testLoopRichText': [
                {
                  'type': 'paragraph',
                  'text': 'fdsafdsa',
                  'spans': []
                }
              ]
            }
          ],
          'primary': {
            'hello': 'howdy',
            'imRich': [
              {
                'type': 'paragraph',
                'text': 'hi there',
                'spans': []
              }
            ]
          },
          'order': 0
        },
        {
          'items': [
            {
              'testLoopRichText': []
            }
          ],
          'primary': {
            'hello': 'doody',
            'imRich': [
              {
                'type': 'heading5',
                'text': 'hi again',
                'spans': []
              }
            ]
          },
          'order': 2
        },
        {
          'items': [
            {
              'testLoopRichText': []
            }
          ],
          'primary': {
            'hello': 'many',
            'imRich': [
              {
                'type': 'paragraph',
                'text': '',
                'spans': []
              }
            ]
          },
          'order': 4
        }
      ]
    }
  }

  
