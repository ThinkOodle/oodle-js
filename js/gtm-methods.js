var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function saveDataLayerToLocalStorage(localStorageKey, dataLayerObject) {
    return __awaiter(this, void 0, void 0, function* () {
        yield localStorage.setItem(localStorageKey, JSON.stringify(dataLayerObject));
    });
}
export function pushDataLayer(localStorageKey, page) {
    const win = window;
    const ls = localStorage.getItem(localStorageKey);
    win.dataLayer = win.dataLayer || [];
    if (!page && ls) {
        win.dataLayer.push(JSON.parse(ls));
    }
    else if (window.location.pathname === page && ls) {
        // On page URL, delete local storage item after GTM success
        win.dataLayer.push(Object.assign({}, JSON.parse(ls), { eventCallback: () => localStorage.removeItem(localStorageKey) }));
    }
}
