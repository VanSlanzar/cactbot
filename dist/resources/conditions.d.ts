import { Data } from '../types/data';
import { Matches } from '../types/trigger';
import { StartsUsingParams, AbilityParams, AbilityFullParams, HeadMarkerParams, GainsEffectParams, StatusEffectExplicitParams, LosesEffectParams, TetherParams, WasDefeatedParams, Regex } from '../resources/regexes';
declare type TargetableMatches = Matches<Regex<StartsUsingParams | AbilityParams | AbilityFullParams | HeadMarkerParams | GainsEffectParams | StatusEffectExplicitParams | LosesEffectParams | TetherParams | WasDefeatedParams>>;
declare const _default: {
    targetIsYou(): (data: Data, matches: TargetableMatches) => boolean;
    targetIsNotYou(): (data: Data, matches: TargetableMatches) => boolean;
    caresAboutAOE(): (data: Data) => boolean;
    caresAboutMagical(): (data: Data) => boolean;
    caresAboutPhysical(): (data: Data) => boolean;
};
export default _default;
//# sourceMappingURL=conditions.d.ts.map