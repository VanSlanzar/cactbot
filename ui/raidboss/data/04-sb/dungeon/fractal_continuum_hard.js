import Conditions from '../../../../../resources/conditions.ts';
import NetRegexes from '../../../../../resources/netregexes.ts';
import Regexes from '../../../../../resources/regexes.ts';
import { Responses } from '../../../../../resources/responses.js';
import ZoneId from '../../../../../resources/zone_id.js';

export default {
  zoneId: ZoneId.TheFractalContinuumHard,
  timelineFile: 'fractal_continuum_hard.txt',
  timelineTriggers: [
    {
      // Technically this one has a cast time, but it's less than a GCD.
      // Safer to warn via timeline.
      id: 'Fractal Hard Diffractive Laser',
      regex: /Diffractive Laser/,
      beforeSeconds: 4,
      condition: Conditions.caresAboutMagical(),
      response: Responses.tankBuster(),
    },
  ],
  triggers: [
    {
      id: 'Fractal Hard Swipe Servo',
      netRegex: NetRegexes.startsUsing({ id: '2AE5', source: 'Servomechanical Minotaur', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2AE5', source: 'Servomechanisch(?:e|er|es|en) Minotaurus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2AE5', source: 'Minotaure Servomécanique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2AE5', source: 'サーヴォ・ミノタウロス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2AE5', source: '自控化弥诺陶洛斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2AE5', source: '자동제어 미노타우로스', capture: false }),
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'swipe',
          de: 'Hieb',
          fr: 'Fauche',
          ja: 'スワイプ',
          cn: '去目标背后',
          ko: '전방 피하기',
        },
      },
    },
    {
      id: 'Fractal Hard Swipe Bio',
      netRegex: NetRegexes.startsUsing({ id: '29A2', source: 'Biomanufactured Minotaur', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '29A2', source: 'Biotech-Minotaurus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '29A2', source: 'Minotaure Biologique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '29A2', source: 'バイオ・ミノタウロス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '29A2', source: '生化弥诺陶洛斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '29A2', source: '양산체 미노타우로스', capture: false }),
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'swipe',
          de: 'Hieb',
          fr: 'Fauche',
          ja: 'スワイプ',
          cn: '去目标背后',
          ko: '전방 피하기',
        },
      },
    },
    {
      id: 'Fractal Hard Swing Servo',
      netRegex: NetRegexes.startsUsing({ id: '2AE4', source: 'Servomechanical Minotaur', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2AE4', source: 'Servomechanisch(?:e|er|es|en) Minotaurus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2AE4', source: 'Minotaure Servomécanique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2AE4', source: 'サーヴォ・ミノタウロス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2AE4', source: '自控化弥诺陶洛斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2AE4', source: '자동제어 미노타우로스', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Swing',
          de: 'Schwung',
          fr: 'Swing',
          ja: 'スウィング',
          cn: '远离目标',
          ko: '밖으로',
        },
      },
    },
    {
      id: 'Fractal Hard Swing Bio',
      netRegex: NetRegexes.startsUsing({ id: '29A1', source: 'Biomanufactured Minotaur', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '29A1', source: 'Biotech-Minotaurus', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '29A1', source: 'Minotaure Biologique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '29A1', source: 'バイオ・ミノタウロス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '29A1', source: '生化弥诺陶洛斯', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '29A1', source: '양산체 미노타우로스', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Swing',
          de: 'Schwung',
          fr: 'Swing',
          ja: 'スウィング',
          cn: '远离目标',
          ko: '밖으로',
        },
      },
    },
    {
      id: 'Fractal Hard Dragon Voice',
      netRegex: NetRegexes.startsUsing({ id: '861', source: 'Servomechanical Chimera', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '861', source: 'Servomechanisch(?:e|er|es|en) Chimära', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '861', source: 'Chimère Servomécanique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '861', source: 'サーヴォ・キマイラ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '861', source: '自控化奇美拉', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '861', source: '자동제어 키마이라', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Dragon\'s Voice',
          de: 'Stimme Des Drachen',
          fr: 'Voix Du Dragon',
          ja: '雷電の咆哮',
          cn: '靠近奇美拉',
          ko: '뇌전의 포효',
        },
      },
    },
    {
      id: 'Fractal Hard Ram Voice Servo',
      netRegex: NetRegexes.startsUsing({ id: '860', source: 'Servomechanical Chimera', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '860', source: 'Servomechanisch(?:e|er|es|en) Chimära', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '860', source: 'Chimère Servomécanique', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '860', source: 'サーヴォ・キマイラ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '860', source: '自控化奇美拉', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '860', source: '자동제어 키마이라', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Ram\'s Voice',
          de: 'Stimme Des Widders',
          fr: 'Voix Du Bélier',
          ja: '氷結の咆哮',
          cn: '远离奇美拉',
          ko: '빙결의 포효',
        },
      },
    },
    {
      id: 'Fractal Hard Ram Voice Proto',
      netRegex: NetRegexes.startsUsing({ id: '860', source: 'Proto-Chimera', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '860', source: 'Proto-Chimära', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '860', source: 'protochimère', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '860', source: 'プロトキマイラ', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '860', source: '原型奇美拉', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '860', source: '프로토 키마이라', capture: false }),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Ram\'s Voice',
          de: 'Stimme Des Widders',
          fr: 'Voix Du Bélier',
          ja: '氷結の咆哮',
          cn: '远离奇美拉',
          ko: '빙결의 포효',
        },
      },
    },
    {
      id: 'Fractal Hard Citadel Buster Motherbit',
      regex: Regexes.startsUsing({ id: '27A5', source: 'Motherbit', capture: false }),
      regexDe: Regexes.startsUsing({ id: '27A5', source: 'Mutterdrohne', capture: false }),
      regexFr: Regexes.startsUsing({ id: '27A5', source: 'Drone Mère', capture: false }),
      regexJa: Regexes.startsUsing({ id: '27A5', source: 'マザービット', capture: false }),
      regexCn: Regexes.startsUsing({ id: '27A5', source: '浮游炮主板', capture: false }),
      regexKo: Regexes.startsUsing({ id: '27A5', source: '마더 비트', capture: false }),
      response: Responses.getBehind(),
    },
    {
      id: 'Fractal Hard Aetheroplasm',
      regex: Regexes.startsUsing({ id: '2793', source: 'The Ultima Warrior' }),
      regexDe: Regexes.startsUsing({ id: '2793', source: 'Ultimativ(?:e|er|es|en) Krieger' }),
      regexFr: Regexes.startsUsing({ id: '2793', source: 'Ultima-Guerrier' }),
      regexJa: Regexes.startsUsing({ id: '2793', source: 'アルテマウォリアー' }),
      regexCn: Regexes.startsUsing({ id: '2793', source: '究极战士' }),
      regexKo: Regexes.startsUsing({ id: '2793', source: '알테마 워리어' }),
      condition: Conditions.caresAboutMagical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'Fractal Hard Citadel Buster Warrior',
      regex: Regexes.startsUsing({ id: '2792', source: 'The Ultima Warrior', capture: false }),
      regexDe: Regexes.startsUsing({ id: '2792', source: 'Ultimativ(?:e|er|es|en) Krieger', capture: false }),
      regexFr: Regexes.startsUsing({ id: '2792', source: 'Ultima-Guerrier', capture: false }),
      regexJa: Regexes.startsUsing({ id: '2792', source: 'アルテマウォリアー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '2792', source: '究极战士', capture: false }),
      regexKo: Regexes.startsUsing({ id: '2792', source: '알테마 워리어', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'Fractal Hard Ceruleum Vent',
      regex: Regexes.startsUsing({ id: '2794', source: 'The Ultima Warrior', capture: false }),
      regexDe: Regexes.startsUsing({ id: '2794', source: 'Ultimativ(?:e|er|es|en) Krieger', capture: false }),
      regexFr: Regexes.startsUsing({ id: '2794', source: 'Ultima-Guerrier', capture: false }),
      regexJa: Regexes.startsUsing({ id: '2794', source: 'アルテマウォリアー', capture: false }),
      regexCn: Regexes.startsUsing({ id: '2794', source: '究极战士', capture: false }),
      regexKo: Regexes.startsUsing({ id: '2794', source: '알테마 워리어', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'Fractal Hard Ratzon',
      netRegex: NetRegexes.headMarker({ id: '0046' }),
      condition: Conditions.targetIsYou(),
      alertText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Puddle on YOU',
          de: 'Fläche auf DIR',
          fr: 'Zone au sol sur VOUS',
          ja: '自分に円範囲',
          cn: '圈圈点名',
        },
      },
    },
    {
      id: 'Fractal Hard Dischord Collect',
      netRegex: NetRegexes.headMarker({ id: ['004D', '004E'] }),
      run: function(data, matches) {
        data[matches.id] = matches.target;
      },
    },
    {
      id: 'Fractal Hard Dischord Resolve',
      netRegex: NetRegexes.headMarker({ id: ['004D', '004E'] }),
      condition: Conditions.targetIsYou(),
      delaySeconds: 0.5,
      infoText: function(data, matches, output) {
        const partner = matches.id === '004D' ? '004E' : '004D';
        // If for some reason there is no partner, we get a vulnerability or bleed and are sad.
        if (!data[partner])
          return;
        return output.text({ player: data.ShortName(data[partner]) });
      },
      outputStrings: {
        text: {
          en: 'Stack with ${player}',
          de: 'Sammeln mit ${player}',
          fr: 'Packez-vous avec ${player}',
          ja: '${player}と頭割り',
          cn: '靠近${player}集合',
        },
      },
    },
    {
      id: 'Fractal Hard Dischord Cleanup',
      netRegex: NetRegexes.headMarker({ id: ['004D', '004F'], capture: false }),
      delaySeconds: 2,
      suppressSeconds: 2,
      run: function(data) {
        for (const el of ['004D', '004F'])
          delete data[el];
      },
    },
    {
      id: 'Fractal Hard Mass Aetheroplasm',
      netRegex: NetRegexes.headMarker({ id: '003E' }),
      response: Responses.stackMarkerOn(),
    },
    {
      // 477 is Infinite Fire, 478 is Infinite Ice
      id: 'Fractal Hard Infinite Elements',
      netRegex: NetRegexes.gainsEffect({ effectId: ['477', '478'] }),
      condition: Conditions.targetIsYou(),
      // The circles don't come up until the Ceruleum Vent cast.
      // Rather than doing collection nonsense to be used on the Ceruleum cast,
      // it's better to just delay, since it's always a consistent 8 seconds
      // from the time effects are applied until the circles come up.
      delaySeconds: 8,
      infoText: function(data, matches, output) {
        if (matches.effectId === '477')
          return output.standOnRedCircle();

        return output.standOnBlueCircle();
      },
      outputStrings: {
        standOnRedCircle: {
          en: 'Stand on red circle',
          de: 'Im roten Kreis stehen',
          fr: 'Restez dans le cercle rouge',
          ja: '赤い輪に',
          cn: '站在红圈',
        },
        standOnBlueCircle: {
          en: 'Stand on blue circle',
          de: 'Im blauen Kreis stehen',
          fr: 'Restez dans le cercle bleu',
          ja: '青い輪に',
          cn: '站在蓝圈',
        },
      },
    },
    {
      id: 'Fractal Hard Death Spin',
      netRegex: NetRegexes.startsUsing({ id: ['27AD', '27AE'], source: 'The Ultima Beast', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: ['27AD', '27AE'], source: 'Ultimativ(?:e|er|es|en) Bestie', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: ['27AD', '27AE'], source: 'Ultima-Monstre', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: ['27AD', '27AE'], source: 'アルテマビースト', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: ['27AD', '27AE'], source: '究极神兽', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: ['27AD', '27AE'], source: '알테마 비스트', capture: false }),
      response: Responses.outOfMelee(),
    },
    {
      id: 'Fractal Hard Aether Bend',
      netRegex: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: 'The Ultima Beast', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: 'Ultimativ(?:e|er|es|en) Bestie', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: 'Ultima-Monstre', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: 'アルテマビースト', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: '究极神兽', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: ['27AF', '27B0'], source: '알테마 비스트', capture: false }),
      response: Responses.getIn(),
    },
    {
      id: 'Fractal Hard Allagan Gravity',
      netRegex: NetRegexes.startsUsing({ id: '27B5', source: 'The Ultima Beast', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '27B5', source: 'Ultimativ(?:e|er|es|en) Bestie', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '27B5', source: 'Ultima-Monstre', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '27B5', source: 'アルテマビースト', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '27B5', source: '究极神兽', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '27B5', source: '알테마 비스트', capture: false }),
      response: Responses.spread(),
    },
    {
      id: 'Fractal Hard Demi Ultima',
      netRegex: NetRegexes.startsUsing({ id: '27B2', source: 'The Ultima Beast', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '27B2', source: 'Ultimativ(?:e|er|es|en) Bestie', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '27B2', source: 'Ultima-Monstre', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '27B2', source: 'アルテマビースト', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '27B2', source: '究极神兽', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '27B2', source: '알테마 비스트', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.aoe(),
    },
    {
      id: 'Fractal Hard Allagan Flare',
      netRegex: NetRegexes.headMarker({ id: '0057' }),
      response: Responses.awayFrom(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Exhibit level VIII': 'Ausstellungssektor VIII',
        'Motherbit': 'Mutterdrohne',
        'Prototype Bit': 'Drohnen-Prototyp',
        'Successfully mimicking the Demon Zurvan': 'Modell Zurvan (Patent 42) wird angewendet',
        'The Genesis Engine': 'Testkammer',
        'The Ultima Beast': 'ultimativ(?:e|er|es|en) Bestie',
        'The Ultima Warrior': 'ultimativ(?:e|er|es|en) Krieger',
        'The reality augmentation bay': 'Dilatationskammer',
        'This humanoid prototype can perfectly replicate': 'Als Referenz wurde die Kraft der Ikonen herangezogen',
        'Utilizing our data on Sophia': 'Nun folgt die Emulierung von Sophia',
        'Vocal Guidance System': 'Stimmleitsystem',
      },
      'replaceText': {
        'Aether Bend': 'Ätherbeugung',
        'Aetherochemical Laser': 'Ätherochemischer Laser',
        '(?<! )Aetheroplasm': 'Ätheroplasma',
        'Allagan Flare': 'Allagisches Flare',
        'Allagan Gravity': 'Allagische Schwerkraft',
        'Ceruleum Vent': 'Erdseim-Entlüfter',
        'Citadel Buster': 'Zitadellensprenger',
        'Death Spin': 'Strudel des Todes',
        'Demi Ultima': 'Demi-Ultima',
        'Diffractive Laser': 'Diffraktiver Laser',
        'Dischordant Cleansing': 'Dissonante Buße',
        'Electrochemical Transfer': 'Elektrochemischer Transfer',
        'Flare Star': 'Flare-Stern',
        'Forborn Beast': 'Verwilderung',
        'Infinite Fire': 'Endloses Feuer',
        'Infinite Ice': 'Endloses Eis',
        'Light Pillar': 'Lichtsäule',
        'Mass Aetheroplasm': 'Massives Ätheroplasma',
        'Northern Star': 'Nordstern',
        'Primordial Aether': 'Ur-Äther',
        'Ratzon': 'Ratzon',
        'Southern Star': 'Südstern',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Exhibit level VIII': 'Secteur d\'exposition VIII',
        'Motherbit': 'drone mère',
        'Prototype Bit': 'proto-drone',
        'Successfully mimicking the Demon Zurvan': 'La restitution des techniques de Zurvan',
        'The Genesis Engine': 'Salle d\'expérimentation',
        'The Ultima Beast': 'Ultima-monstre',
        'The Ultima Warrior': 'Ultima-guerrier',
        'The reality augmentation bay': 'Salle de distorsion de la réalité',
        'This humanoid prototype can perfectly replicate': 'Ce modèle exceptionnel est basé sur les non moins exceptionnelles divinités guerrières',
        'Utilizing our data on Sophia': 'Quoi de mieux pour dominer les divinités guerrières que de retourner leur puissance contre elles?♪',
        'Vocal Guidance System': 'système de guidage vocal',
      },
      'replaceText': {
        'Aether Bend': 'Diffraction éthérée',
        'Aetherochemical Laser': 'Laser magismologique',
        '(?<! )Aetheroplasm': 'Éthéroplasma',
        'Allagan Flare': 'Brasier allagois',
        'Allagan Gravity': 'Gravité allagoise',
        'Ceruleum Vent': 'Exutoire à céruleum',
        'Citadel Buster': 'Casse-citadelle',
        'Death Spin': 'Tourbillon mortel',
        'Demi Ultima': 'Demi-Ultima',
        'Diffractive Laser': 'Laser diffractif',
        'Dischordant Cleansing': 'Purification discordante',
        'Electrochemical Transfer': 'Charge éléctro-chimique',
        'Flare Star': 'Astre flamboyant',
        'Forborn Beast': 'Bête ancestrale',
        'Infinite Fire': 'Feu infini',
        'Infinite Ice': 'Glace infinie',
        'Light Pillar': 'Colonne lumineuse',
        'Mass Aetheroplasm': 'Éthéroplasma géant',
        'Northern Star': 'Étoile du nord',
        'Primordial Aether': 'Éther primordial',
        'Ratzon': 'Ratzon',
        'Southern Star': 'Étoile du sud',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Exhibit level VIII': '第VIII展示区',
        'Motherbit': 'マザービット',
        'Prototype Bit': 'プロトビット',
        'Successfully mimicking the Demon Zurvan': '鬼神ズルワーン',
        'The Genesis Engine': '起動試験室',
        'The Ultima Beast': 'アルテマビースト',
        'The Ultima Warrior': 'アルテマウォリアー',
        'The reality augmentation bay': '現実拡張室',
        'This humanoid prototype can perfectly replicate': 'そこで考案されたのが、',
        'Utilizing our data on Sophia': '闘神の力を以て、闘神を征す♪',
        'Vocal Guidance System': '音声ガイダンス',
      },
      'replaceText': {
        'Aether Bend': 'エーテルベント',
        'Aetherochemical Laser': '魔科学レーザー',
        '(?<! )Aetheroplasm': 'エーテル爆雷',
        'Allagan Flare': 'アラガンフレア',
        'Allagan Gravity': 'アラガングラビデ',
        'Ceruleum Vent': 'セルレアムベント',
        'Citadel Buster': 'シタデルバスター',
        'Death Spin': 'デススピン',
        'Demi Ultima': 'デミアルテマ',
        'Diffractive Laser': '拡散レーザー',
        'Dischordant Cleansing': '不調和の罰',
        'Electrochemical Transfer': '雷力供給',
        'Flare Star': 'フレアスター',
        'Forborn Beast': 'アクワイヤードビースト',
        'Infinite Fire': '炎の刻印',
        'Infinite Ice': '氷の刻印',
        'Light Pillar': 'リヒト・ゾイレ',
        'Mass Aetheroplasm': '大型エーテル爆雷',
        'Northern Star': 'ノーザンスター',
        'Primordial Aether': 'プライマルエーテル',
        'Ratzon': 'ラツォン',
        'Southern Star': 'サザンスター',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Exhibit level VIII': '第八展示区',
        'Motherbit': '浮游炮主板',
        'Prototype Bit': '原型浮游炮',
        'Successfully mimicking the Demon Zurvan': '随着对鬼神祖尔宛力量的应用，',
        'The Genesis Engine': '启动试验室',
        'The Ultima Beast': '究极神兽',
        'The Ultima Warrior': '究极战士',
        'The reality augmentation bay': '现实增强室',
        'This humanoid prototype can perfectly replicate': '我们研究出了如何利用斗神力量的方法！',
        'Utilizing our data on Sophia': '利用斗神的力量去征服斗神！',
        'Vocal Guidance System': '语音向导',
      },
      'replaceText': {
        'Aether Bend': '以太曲折',
        'Aetherochemical Laser': '魔科学激光',
        '(?<! )Aetheroplasm': '以太爆雷',
        'Allagan Flare': '亚拉戈核爆',
        'Allagan Gravity': '亚拉戈重力',
        'Ceruleum Vent': '青磷放射',
        'Citadel Buster': '攻城炮',
        'Death Spin': '死亡回旋',
        'Demi Ultima': '亚究极',
        'Diffractive Laser': '扩散射线',
        'Dischordant Cleansing': '不平衡之罚',
        'Electrochemical Transfer': '雷力供给',
        'Flare Star': '耀星',
        'Forborn Beast': '后天野兽',
        'Infinite Fire': '炎之刻印',
        'Infinite Ice': '冰之刻印',
        'Light Pillar': '光柱',
        'Mass Aetheroplasm': '大型以太爆雷',
        'Northern Star': '北极星',
        'Primordial Aether': '荒蛮以太',
        'Ratzon': '意志',
        'Southern Star': '南极星',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Exhibit level VIII': '제VIII전시구역',
        'Motherbit': '마더 비트',
        'Prototype Bit': '프로토 비트',
        'Successfully mimicking the Demon Zurvan': '연구자들은 귀신 주르반',
        'The Genesis Engine': '기동시험실',
        'The Ultima Beast': '알테마 비스트',
        'The Ultima Warrior': '알테마 워리어',
        'The reality augmentation bay': '현실확장실',
        'This humanoid prototype can perfectly replicate': '그래서 투신의 힘을 이용하는',
        'Utilizing our data on Sophia': '투신의 힘으로 투신을 다스린다♪',
        'Vocal Guidance System': '음성 안내 시스템',
      },
      'replaceText': {
        'Aether Bend': '에테르 굴절',
        'Aetherochemical Laser': '마과학 레이저',
        '(?<! )Aetheroplasm': '에테르 폭뢰',
        'Allagan Flare': '알라그 플레어',
        'Allagan Gravity': '알라그 그라비데',
        'Ceruleum Vent': '청린 방출',
        'Citadel Buster': '공성포',
        'Death Spin': '죽음의 회전',
        'Demi Ultima': '데미알테마',
        'Diffractive Laser': '확산 레이저',
        'Dischordant Cleansing': '부조화의 벌',
        'Electrochemical Transfer': '뇌력 공급',
        'Flare Star': '타오르는 별',
        'Forborn Beast': '야수 각성',
        'Infinite Fire': '불의 각인',
        'Infinite Ice': '얼음의 각인',
        'Light Pillar': '빛 기둥',
        'Mass Aetheroplasm': '대형 에테르 폭뢰',
        'Northern Star': '북극성',
        'Primordial Aether': '야만신 에테르',
        'Ratzon': '라촌',
        'Southern Star': '남극성',
      },
    },
  ],
};
