import Polyglot from 'node-polyglot/build/polyglot'
import ZHCN from './zh-CN.json'
import ZHTW from './zh-TW.json'
import EN from './en.json'
import ES from './es-ES.json'
import FR from './fr.json'
import RU from './ru.json'
import DE from './de.json'

const i18nMap = {
  'zh': ZHCN,
  'zh-cn': ZHCN,
  'zh-tw': ZHTW,
  'en': EN,
  'es-es': ES,
  'fr': FR,
  'ru': RU,
  'de': DE,
}

export default function (language) {
  return new Polyglot({
    phrases: i18nMap[language.toLowerCase()] || i18nMap.en,
    locale: language
  })
}
