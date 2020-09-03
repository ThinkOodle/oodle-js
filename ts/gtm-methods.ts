import { DataLayer, GTM } from '../types'

export async function saveDataLayerToLocalStorage(localStorageKey: string, dataLayerObject: DataLayer): Promise<void> {
  await localStorage.setItem(localStorageKey, JSON.stringify(dataLayerObject))
}

export function pushDataLayer(localStorageKey: string, page?: string): void {
  const win: GTM = window as GTM
  const ls: string = localStorage.getItem(localStorageKey)

  win.dataLayer = win.dataLayer || []

  if (!page && ls) {
    win.dataLayer.push(JSON.parse(ls) as DataLayer)
  } else if (window.location.pathname === page && ls) {
    // On page URL, delete local storage item after GTM success
    win.dataLayer.push({
      ...JSON.parse(ls),
      eventCallback: (): void => localStorage.removeItem(localStorageKey)
    } as DataLayer)
  }
}
