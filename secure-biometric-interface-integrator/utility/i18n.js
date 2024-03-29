/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import i18n from "i18next";

import en from "../assets/locales/en.json";
import ar from "../assets/locales/ar.json";
import hi from "../assets/locales/hi.json";
import kn from "../assets/locales/kn.json";
import ta from "../assets/locales/ta.json";

const resources = {
  en: { translation: en },
  ar: { translation: ar },
  hi: { translation: hi },
  kn: { translation: kn },
  ta: { translation: ta },
  eng: { translation: en },
  ara: { translation: ar },
  hin: { translation: hi },
  kan: { translation: kn },
  tam: { translation: ta },
};

i18n
  // init i18next
  .init({
    debug: false,
    fallbackLng: "en", //default language
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export { i18n };
