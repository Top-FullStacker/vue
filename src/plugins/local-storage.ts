const TOKEN_KEY = 'Admin-Token';
const LANG_KEY = 'lang';
export function getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
}

export function saveLanguage(lang: any): void {
    localStorage.setItem(LANG_KEY, JSON.stringify(lang));
}

export function loadLanguage(): { name: string, icon: string, locale: string } {
    const _l = localStorage.getItem(LANG_KEY);
    try {
        if (_l === null) {
            return {
                name: 'English',
                icon: 'en',
                locale: 'en',
            };
        } else {
            return JSON.parse(_l);
        }
    } catch {
        return {
            name: 'English',
            icon: 'en',
            locale: 'en',
        };
    }
}
