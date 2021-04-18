import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';

export default {
  zoneId: ZoneId.Paglthan,
  timelineFile: 'paglthan.txt',
  timelineTriggers: [
    {
      // This is a rear cone attack that always follows Wide Blaster.
      // It has a cast time of under a GCD, so we pre-warn during Wide Blaster.
      // Only the sides are safe to call at this moment.
      id: 'Paglthan Spike Flail',
      regex: /Spike Flail/,
      beforeSeconds: 4,
      response: Responses.goSides(),
    },
  ],
  triggers: [
    {
      id: 'Paglthan Critical Rip',
      netRegex: NetRegexes.startsUsing({ id: '5C4E', source: 'Amhuluk' }),
      netRegexDe: NetRegexes.startsUsing({ id: '5C4E', source: 'Amhuluk' }),
      netRegexFr: NetRegexes.startsUsing({ id: '5C4E', source: 'Amhuluk' }),
      netRegexJa: NetRegexes.startsUsing({ id: '5C4E', source: 'アムルック' }),
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'Paglthan Electric Burst',
      netRegex: NetRegexes.startsUsing({ id: '5C4D', source: 'Amhuluk', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5C4D', source: 'Amhuluk', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5C4D', source: 'Amhuluk', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5C4D', source: 'アムルック', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Paglthan Lightning Rod Gain',
      netRegex: NetRegexes.gainsEffect({ effectId: 'A0E' }),
      condition: Conditions.targetIsYou(),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Go to a lightning rod',
          de: 'Geh zu einem Blitzableiter',
          fr: 'Allez sur un paratonnerre',
        },
      },
    },
    {
      id: 'Paglthan Lightning Rod Lose',
      netRegex: NetRegexes.losesEffect({ effectId: 'A0E' }),
      condition: Conditions.targetIsYou(),
      response: Responses.goMiddle(),
    },
    {
      id: 'Paglthan Ballistic',
      netRegex: NetRegexes.startsUsing({ id: '5C97', source: 'Magitek Fortress', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5C97', source: 'Magitek-Festung', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5C97', source: 'Forteresse Magitek', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5C97', source: '魔導フォートレス', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'Paglthan Defensive Reaction',
      netRegex: NetRegexes.startsUsing({ id: '5C9E', source: 'Magitek Core', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5C9E', source: 'Magitek-Reaktor', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5C9E', source: 'Réacteur Magitek', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5C9E', source: '魔導コア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '5C9E', source: '魔导核心', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '5C9E', source: '마도핵', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Paglthan Twisted Scream',
      netRegex: NetRegexes.startsUsing({ id: '5B47', source: 'Lunar Bahamut', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5B47', source: 'Luna-Bahamut', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5B47', source: 'Luna-Bahamut', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5B47', source: 'ルナバハムート', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Paglthan Akh Morn',
      netRegex: NetRegexes.headMarker({ id: '005D' }),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Paglthan Mega Flare Spread',
      netRegex: NetRegexes.headMarker({ id: '0017' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Paglthan Mega Flare Move',
      netRegex: NetRegexes.ability({ id: '5B4D', source: 'Lunar Bahamut' }),
      condition: Conditions.targetIsYou(),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Away from circles',
          fr: 'Éloignez-vous des cercles',
        },
      },
    },
    {
      id: 'Paglthan Kan Rhai Marker',
      netRegex: NetRegexes.headMarker({ id: '0104' }),
      condition: Conditions.targetIsYou(),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Kan Rhai on YOU',
          de: 'Kan Rhai auf DIR',
          fr: 'Kan Rhai sur VOUS',
        },
      },
    },
    {
      id: 'Paglthan Kan Rhai Move',
      netRegex: NetRegexes.ability({ id: '5B4F', source: 'Lunar Bahamut', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Away from crosses',
          fr: 'Éloignez-vous des croix',
        },
      },
    },
    {
      id: 'Paglthan Flatten',
      netRegex: NetRegexes.startsUsing({ id: '5B58', source: 'Lunar Bahamut' }),
      netRegexDe: NetRegexes.startsUsing({ id: '5B58', source: 'Luna-Bahamut' }),
      netRegexFr: NetRegexes.startsUsing({ id: '5B58', source: 'Luna-Bahamut' }),
      netRegexJa: NetRegexes.startsUsing({ id: '5B58', source: 'ルナバハムート' }),
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'Paglthan Giga Flare',
      netRegex: NetRegexes.startsUsing({ id: '5B57', source: 'Lunar Bahamut', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '5B57', source: 'Luna-Bahamut', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '5B57', source: 'Luna-Bahamut', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '5B57', source: 'ルナバハムート', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Amhuluk': 'Amhuluk',
        'Lunar Bahamut': 'Luna-Bahamut',
        'Magitek Fortress': 'Magitek-Festung',
        'Magitek Core': 'Magitek-Reaktor',
        'Sunseat': 'Dämmergarten',
        'The Gathering Ring': 'Festplatz von Zolm\'ak',
      },
      'replaceText': {
        '\\(circles\\)': '(Kreise)',
        '\\(explosions\\)': '(Explosionen)',
        '--Levin orbs--': '--Elektrosphären--',
        'Akh Morn': 'Akh Morn',
        'Big Burst': 'Detonation',
        'Critical Rip': 'Kritischer Riss',
        'Electric Burst': 'Stromstoß',
        'Flatten': 'Einebnen',
        'Gigaflare': 'Gigaflare',
        'Kan Rhai': 'Kan Rhai',
        'Lightning Bolt': 'Blitzschlag',
        'Lunar Flare': 'Lunaflare',
        'Megaflare(?! Dive)': 'Megaflare',
        'Megaflare Dive': 'Megaflare-Sturz',
        'Perigean Breath': 'Perigäum-Atem',
        'Spike Flail': 'Dornendresche',
        'Thundercall': 'Donnerruf',
        'Twisted Scream': 'Verzerrtes Brüllen',
        'Upburst': 'Quantengravitation',
        'Wide Blaster': 'Weitwinkel-Blaster',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Amhuluk': 'Amhuluk',
        'Lunar Bahamut': 'Luna-Bahamut',
        'Magitek Fortress': 'forteresse magitek',
        'Magitek Core': 'réacteur magitek',
        'Sunseat': 'Clos du Crépuscule',
        'The Gathering Ring': 'Autel de Zolm\'ak',
      },
      'replaceText': {
        '\\(circles\\)': '(cercles)',
        '\\(explosions\\)': '(explosions)',
        '--Levin orbs--': '--Orbes de foudre--',
        'Akh Morn': 'Akh Morn',
        'Big Burst': 'Grosse explosion',
        'Critical Rip': 'Griffure critique',
        'Electric Burst': 'Salve électrique',
        'Flatten': 'Compression',
        'Gigaflare': 'GigaBrasier',
        'Kan Rhai': 'Kan Rhai',
        'Lightning Bolt': 'Éclair de foudre',
        'Lunar Flare': 'LunaBrasier',
        'Megaflare(?! Dive)': 'MégaBrasier',
        'Megaflare Dive': 'Plongeon MégaBrasier',
        'Perigean Breath': 'Souffle de périgée',
        'Spike Flail': 'Fléau à pointes',
        'Thundercall': 'Drain fulminant',
        'Twisted Scream': 'Hurlement de l\'Anomalie',
        'Upburst': 'Saillie',
        'Wide Blaster': 'Fulguration large',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Amhuluk': 'アムルック',
        'Lunar Bahamut': 'ルナバハムート',
        'Magitek Fortress': '魔導フォートレス',
        'Magitek Core': '魔導コア',
        'Sunseat': '黄昏の庭',
        'The Gathering Ring': 'ゾレマク祭場',
      },
      'replaceText': {
        'Akh Morn': 'アク・モーン',
        'Big Burst': '大爆発',
        'Critical Rip': 'クリティカルリップ',
        'Electric Burst': 'エレクトリックバースト',
        'Flatten': 'フラッテン',
        'Gigaflare': 'ギガフレア',
        'Kan Rhai': 'カン・ラーイ',
        'Lightning Bolt': '落雷',
        'Lunar Flare': 'ルナフレア',
        'Megaflare(?! Dive)': 'メガフレア',
        'Megaflare Dive': 'メガフレアダイブ',
        'Perigean Breath': 'ペリジアンブレス',
        'Spike Flail': 'スパイクフレイル',
        'Thundercall': '招雷',
        'Twisted Scream': '異形の咆哮',
        'Upburst': '突出',
        'Wide Blaster': 'ワイドブラスター',
      },
    },
  ],
};
