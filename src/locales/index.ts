import Vue from 'vue';
import VueI18n from 'vue-i18n';

import ar from './i18n/ar.json';
import de from './i18n/de.json';
import en from './i18n/en.json';
import es from './i18n/es.json';
import fr from './i18n/fr.json';
import he from './i18n/he.json';
import hu from './i18n/hu.json';
import it from './i18n/it.json';
import ja from './i18n/ja.json';
import ko from './i18n/ko.json';
import ru from './i18n/ru.json';
import zh from './i18n/zh.json';

Vue.use(VueI18n);

export default new VueI18n({
    locale: 'en',
    messages: {
        ar: { lang: ar },
        de: { lang: de },
        en: { lang: en },
        es: { lang: es },
        fr: { lang: fr },
        he: { lang: he },
        hu: { lang: hu },
        it: { lang: it },
        ja: { lang: ja },
        ko: { lang: ko },
        ru: { lang: ru },
        zh: { lang: zh },
    },
});
