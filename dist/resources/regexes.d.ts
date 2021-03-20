export declare type Params<T extends string> = Partial<Record<T, string | string[]> & {
    'timestamp': string;
    'capture': boolean;
}>;
declare const startsUsingParams: readonly ["timestamp", "source", "id", "ability", "target", "capture"];
declare const abilityParams: readonly ["timestamp", "source", "sourceId", "id", "ability", "targetId", "target", "capture"];
declare const abilityFullParams: readonly ["timestamp", "sourceId", "source", "id", "ability", "targetId", "target", "flags", "flag0", "flag1", "flag2", "flag3", "flag4", "flag5", "flag6", "flag7", "flag8", "flag9", "flag10", "flag11", "flag12", "flag13", "flag14", "targetHp", "targetMaxHp", "targetMp", "targetMaxMp", "targetX", "targetY", "targetZ", "targetHeading", "hp", "maxHp", "mp", "maxMp", "x", "y", "z", "heading", "capture"];
declare const headMarkerParams: readonly ["timestamp", "targetId", "target", "id", "capture"];
declare const addedCombatantParams: readonly ["timestamp", "name", "capture"];
declare const addedCombatantFullParams: readonly ["timestamp", "id", "name", "job", "level", "hp", "x", "y", "z", "npcId", "capture"];
declare const removingCombatantParams: readonly ["timestamp", "id", "name", "hp", "x", "y", "z", "capture"];
declare const gainsEffectParams: readonly ["timestamp", "targetId", "target", "effect", "source", "duration", "capture"];
declare const statusEffectExplicitParams: readonly ["timestamp", "targetId", "target", "job", "hp", "maxHp", "mp", "maxMp", "x", "y", "z", "heading", "data0", "data1", "data2", "data3", "data4", "capture"];
declare const losesEffectParams: readonly ["timestamp", "targetId", "target", "effect", "source", "capture"];
declare const statChangeParams: readonly ["timestamp", "job", "strength", "dexterity", "vitality", "intelligence", "mind", "piety", "attackPower", "directHit", "criticalHit", "attackMagicPotency", "healMagicPotency", "determination", "skillSpeed", "spellSpeed", "tenacity", "capture"];
declare const tetherParams: readonly ["timestamp", "source", "sourceId", "target", "targetId", "id", "capture"];
declare const wasDefeatedParams: readonly ["timestamp", "target", "source", "capture"];
declare const hasHPParams: readonly ["timestamp", "name", "hp", "capture"];
declare const echoParams: readonly ["timestamp", "code", "line", "capture"];
declare const dialogParams: readonly ["timestamp", "code", "line", "name", "capture"];
declare const messageParams: readonly ["timestamp", "code", "line", "capture"];
declare const gameLogParams: readonly ["timestamp", "code", "line", "capture"];
declare const gameNameLogParams: readonly ["timestamp", "code", "name", "line", "capture"];
declare const changeZoneParams: readonly ["timestamp", "name", "capture"];
declare const network6dParams: readonly ["timestamp", "instance", "command", "data0", "data1", "data2", "data3", "capture"];
export default class Regexes {
    /**
     * fields: source, id, ability, target, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#14-networkstartscasting
     */
    static startsUsing(f?: Params<typeof startsUsingParams[number]>): RegExp;
    /**
     * fields: sourceId, source, id, ability, targetId, target, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#15-networkability
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#16-networkaoeability
     */
    static ability(f?: Params<typeof abilityParams[number]>): RegExp;
    /**
     * fields: sourceId, source, id, ability, targetId, target, flags, x, y, z, heading, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#15-networkability
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#16-networkaoeability
     */
    static abilityFull(f?: Params<typeof abilityFullParams[number]>): RegExp;
    /**
     * fields: targetId, target, id, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#1b-networktargeticon-head-markers
     */
    static headMarker(f?: Params<typeof headMarkerParams[number]>): RegExp;
    static addedCombatant(f?: Params<typeof addedCombatantParams[number]>): RegExp;
    /**
     * fields: id, name, hp, x, y, z, npcId, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#03-addcombatant
     */
    static addedCombatantFull(f?: Params<typeof addedCombatantFullParams[number]>): RegExp;
    /**
     * fields: id, name, hp, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#04-removecombatant
     */
    static removingCombatant(f?: Params<typeof removingCombatantParams[number]>): RegExp;
    static gainsEffect(f?: Params<typeof gainsEffectParams[number]>): RegExp;
    /**
     * Prefer gainsEffect over this function unless you really need extra data.
     * fields: targetId, target, job, hp, maxHp, mp, maxMp, x, y, z, heading,
     *         data0, data1, data2, data3, data4
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#26-networkstatuseffects
     */
    static statusEffectExplicit(f?: Params<typeof statusEffectExplicitParams[number]>): RegExp;
    /**
     * fields: targetId, target, effect, source, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#1e-networkbuffremove
     */
    static losesEffect(f?: Params<typeof losesEffectParams[number]>): RegExp;
    /**
     * fields: source, sourceId, target, targetId, id, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#23-networktether
     */
    static tether(f?: Params<typeof tetherParams[number]>): RegExp;
    /**
     * 'target' was defeated by 'source'
     * fields: target, source, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#19-networkdeath
     */
    static wasDefeated(f?: Params<typeof wasDefeatedParams[number]>): RegExp;
    /**
     * fields: name, hp, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#0d-combatanthp
     */
    static hasHP(f?: Params<typeof hasHPParams[number]>): RegExp;
    /**
     * fields: code, line, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#00-logline
     */
    static echo(f?: Params<typeof echoParams[number]>): RegExp;
    /**
     * fields: code, line, name, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#00-logline
     */
    static dialog(f?: Params<typeof dialogParams[number]>): RegExp;
    /**
     * fields: code, line, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#00-logline
     */
    static message(f?: Params<typeof messageParams[number]>): RegExp;
    /**
     * fields: code, line, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#00-logline
     */
    static gameLog(f?: Params<typeof gameLogParams[number]>): RegExp;
    /**
     * fields: code, name, line, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#00-logline
     * Some game log lines have names in them, but not all.  All network log lines for these
     * have empty fields, but these get dropped by the ACT FFXV plugin.
     */
    static gameNameLog(f?: Params<typeof gameNameLogParams[number]>): RegExp;
    /**
     * fields: job, strength, dexterity, vitality, intelligence, mind, piety, attackPower,
     *         directHit, criticalHit, attackMagicPotency, healMagicPotency, determination,
     *         skillSpeed, spellSpeed, tenacity, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#0c-playerstats
     */
    static statChange(f?: Params<typeof statChangeParams[number]>): RegExp;
    /**
     * fields: name, capture
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#01-changezone
     */
    static changeZone(f?: Params<typeof changeZoneParams[number]>): RegExp;
    /**
     * fields: instance, command, data0, data1, data2, data3
     * matches: https://github.com/quisquous/cactbot/blob/main/docs/LogGuide.md#21-network6d-actor-control-lines
     */
    static network6d(f?: Params<typeof network6dParams[number]>): RegExp;
    /**
     * Helper function for building named capture group
     */
    static maybeCapture(capture: boolean, name: string, value: string | string[] | undefined, defaultValue?: string): string;
    static optional(str: string): string;
    static namedCapture(name: string, value: string): string;
    /**
     * Convenience for turning multiple args into a unioned regular expression.
     * anyOf(x, y, z) or anyOf([x, y, z]) do the same thing, and return (?:x|y|z).
     * anyOf(x) or anyOf(x) on its own simplifies to just x.
     * args may be strings or RegExp, although any additional markers to RegExp
     * like /insensitive/i are dropped.
     */
    static anyOf(...args: (string | string[] | RegExp)[]): string;
    static parse(regexpString: RegExp | string): RegExp;
    static parseGlobal(regexpString: RegExp): RegExp;
    static trueIfUndefined(value?: boolean): boolean;
    static validateParams(f: Readonly<{
        [s: string]: unknown;
    }>, funcName: string, params: Readonly<string[]>): void;
}
export {};
//# sourceMappingURL=regexes.d.ts.map