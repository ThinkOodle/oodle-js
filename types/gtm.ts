export interface GTM extends Window {
  dataLayer: any
}

export interface DataLayer {
  event: string
  hitCallback?: () => void // called after the tag has successfully fired
  eventCallback?: () => void // called after all tags for given event have successfully fired
  [key: string]: any
}
