import { Params } from './regexes';
declare const startsUsingParams: readonly ["timestamp", "sourceId", "source", "id", "ability", "targetId", "target", "castTime"];
declare const abilityParams: readonly ["sourceId", "source", "id", "ability", "targetId", "target"];
declare const abilityFullParams: readonly ["sourceId", "source", "id", "ability", "targetId", "target", "flags", "damage", "targetCurrentHp", "targetMaxHp", "x", "y", "z", "heading"];
declare const headMarkerParams: readonly ["targetId", "target", "id"];
declare const addedCombatantParams: readonly ["id", "name"];
declare const addedCombatantFullParams: readonly ["id", "name", "job", "level", "ownerId", "world", "npcNameId", "npcBaseId", "currentHp", "hp", "x", "y", "z", "heading"];
declare const removingCombatantParams: readonly ["id", "name", "hp"];
declare const gainsEffectParams: readonly ["effectId", "effect", "duration", "sourceId", "source", "targetId", "target", "count"];
declare const statusEffectExplicitParams: readonly ["targetId", "target", "hp", "maxHp", "x", "y", "z", "heading", "data0", "data1", "data2", "data3", "data4"];
declare const losesEffectParams: readonly ["effectId", "effect", "sourceId", "source", "targetId", "target", "count"];
declare const tetherParams: readonly ["sourceId", "source", "targetId", "target", "id"];
declare const wasDefeatedParams: readonly ["targetId", "target", "sourceId", "source"];
declare const echoParams: readonly ["code", "name", "line"];
declare const dialogParams: readonly ["code", "name", "line"];
declare const messageParams: readonly ["code", "name", "line"];
declare const gameLogParams: readonly ["code", "name", "line"];
declare const gameNameLogParams: readonly ["code", "name", "line"];
declare const statChangeParams: readonly ["job", "strength", "dexterity", "vitality", "intelligence", "mind", "piety", "attackPower", "directHit", "criticalHit", "attackMagicPotency", "healMagicPotency", "determination", "skillSpeed", "spellSpeed", "tenacity"];
declare const changeZoneParams: readonly ["id", "name"];
declare const network6dParams: readonly ["instance", "command", "data0", "data1", "data2", "data3"];
export default class NetRegexes {
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#14-networkstartscasting
     */
    static startsUsing(params?: Params<typeof startsUsingParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#15-networkability
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#16-networkaoeability
     */
    static ability(params?: Params<typeof abilityParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#15-networkability
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#16-networkaoeability
     */
    static abilityFull(params?: Params<typeof abilityFullParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#1b-networktargeticon-head-markers
     */
    static headMarker(params?: Params<typeof headMarkerParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#03-addcombatant
     */
    static addedCombatant(params?: Params<typeof addedCombatantParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#03-addcombatant
     */
    static addedCombatantFull(params?: Params<typeof addedCombatantFullParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#04-removecombatant
     */
    static removingCombatant(params?: Params<typeof removingCombatantParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#1a-networkbuff
     */
    static gainsEffect(params?: Params<typeof gainsEffectParams[number]>): RegExp;
    /**
     * Prefer gainsEffect over this function unless you really need extra data.
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#26-networkstatuseffects
     */
    static statusEffectExplicit(params?: Params<typeof statusEffectExplicitParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#1e-networkbuffremove
     */
    static losesEffect(params?: Params<typeof losesEffectParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#23-networktether
     */
    static tether(params?: Params<typeof tetherParams[number]>): RegExp;
    /**
     * 'target' was defeated by 'source'
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#19-networkdeath
     */
    static wasDefeated(params?: Params<typeof wasDefeatedParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#00-logline
     */
    static echo(params?: Params<typeof echoParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#00-logline
     */
    static dialog(params?: Params<typeof dialogParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#00-logline
     */
    static message(params?: Params<typeof messageParams[number]>): RegExp;
    /**
     * fields: code, name, line, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#00-logline
     */
    static gameLog(params?: Params<typeof gameLogParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#00-logline
     */
    static gameNameLog(params?: Params<typeof gameNameLogParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#0c-playerstats
     */
    static statChange(params?: Params<typeof statChangeParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#01-changezone
     */
    static changeZone(params?: Params<typeof changeZoneParams[number]>): RegExp;
    /**
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#21-network6d-actor-control-lines
     */
    static network6d(params?: Params<typeof network6dParams[number]>): RegExp;
}
export {};
//# sourceMappingURL=netregexes.d.ts.map