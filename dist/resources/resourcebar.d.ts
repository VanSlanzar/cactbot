export default class ResourceBar extends HTMLElement {
    foregroundElement: HTMLDivElement;
    backgroundElement: HTMLDivElement;
    extraUnderElement: HTMLDivElement;
    extraOverElement: HTMLDivElement;
    leftTextElement: HTMLDivElement;
    centerTextElement: HTMLDivElement;
    rightTextElement: HTMLDivElement;
    kBackgroundOpacity: number;
    kBorderSize: number;
    kTextLeftRightEdgePadding: number;
    kTextTopBottomEdgePadding: number;
    _value: number;
    _maxValue: number;
    _width: number;
    _height: number;
    _bg: string;
    _fg: string;
    _extraColor: string;
    _extraValue: number;
    _scale: number;
    _towardRight: boolean;
    _styleFill: boolean;
    _leftText: string;
    _centerText: string;
    _rightText: string;
    _connected: boolean;
    private kBackgroundOpacity;
    private kBorderSize;
    private kTextLeftRightEdgePadding;
    private kTextTopBottomEdgePadding;
    private _value;
    private _maxValue;
    private _width;
    private _height;
    private _bg;
    private _fg;
    private _extraColor;
    private _extraValue;
    private _scale;
    private _towardRight;
    private _fill;
    private _leftText;
    private _centerText;
    private _rightText;
    private _connected;
    static get observedAttributes(): string[];
    set scale(s: string | null);
    get scale(): string | null;
    set bg(c: string | null);
    get bg(): string | null;
    set extraColor(c: string | null);
    get extraColor(): string | null;
    set extracolor(c: string | null);
    get extracolor(): string | null;
    set fg(c: string | null);
    get fg(): string | null;
    set width(w: string | null);
    get width(): string | null;
    set height(w: string | null);
    get height(): string | null;
    set value(s: string | null);
    get value(): string | null;
    set extraValue(s: string | null);
    get extraValue(): string | null;
    set extravalue(s: string | null);
    get extravalue(): string | null;
    set maxvalue(s: string | null);
    get maxvalue(): string | null;
    set toward(t: string | null);
    get toward(): string | null;
    set styleFill(s: 'empty' | 'full' | null);
    get styleFill(): 'empty' | 'full' | null;
    set stylefill(s: 'empty' | 'full' | null);
    get stylefill(): 'empty' | 'full' | null;
    set lefttext(p: string | null);
    get lefttext(): string | null;
    set righttext(p: string | null);
    get righttext(): string | null;
    set centertext(p: string | null);
    get centertext(): string | null;
    constructor();
    init(root: ShadowRoot): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string | number, newValue: string): void;
    layout(): void;
    updateText(): void;
    draw(): void;
}
//# sourceMappingURL=resourcebar.d.ts.map