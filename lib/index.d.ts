// Generated by dts-bundle v0.7.3

declare module 'auto-bem' {
    import { Selector } from 'auto-bem/Selector';
    import { selectorMatches } from 'auto-bem/selectorMatches';
    import { selectorFlatten } from 'auto-bem/selectorFlatten';
    import { transform } from 'auto-bem/transform';
    import { BemCss } from 'auto-bem/BemCss';
    export { Selector, selectorMatches, selectorFlatten, transform, BemCss };
}

declare module 'auto-bem/Selector' {
    export enum Type {
        TAG = 1,
        CLASS = 2,
        ID = 3,
        UNIVERSAL = 4,
        ATTR = 5,
        PSEUDO = 6,
    }
    export class Selector {
        parent: Selector;
        child: Selector;
        rules: SelectorRule[];
        nestCount: number;
        nextOperator: string;
        isHost: boolean;
        top: Selector;
        last: Selector;
        constructor(parent?: Selector);
        add(type: any, str: any): void;
        next(nextOperator: any): Selector;
        toArray(): Selector[];
        toString(): string;
        stringifyRules(rules: any): string;
        static parse: typeof parse;
        static fromArray: typeof fromArray;
        static Type: typeof Type;
    }
    export class SelectorRule {
        type: Type;
        str: string;
        constructor(type: Type, str: string);
    }
    export function parse(str: any): Selector;
    export function fromArray(arr: any): any;
}

declare module 'auto-bem/selectorMatches' {
    import { Selector } from 'auto-bem/Selector';
    export function selectorMatches(str: string): Match[];
    export class Match {
        str: string;
        i: number;
        selector: Selector;
        mappings: MatchMapping[];
        constructor(selector: string, i: number);
    }
    export class MatchMapping {
        query: Selector;
        klass: string;
    }
}

declare module 'auto-bem/selectorFlatten' {
    import { IOptions } from 'auto-bem/IOptions';
    export function selectorFlatten(matches: any, opts: IOptions): void;
}

declare module 'auto-bem/transform' {
    import { IOptions } from 'auto-bem/IOptions';
    export function transform(template: any, style: any, options: IOptions): {
        template: string;
        css: string;
    };
}

declare module 'auto-bem/BemCss' {
    import { IOptions } from 'auto-bem/IOptions';
    import { Match } from 'auto-bem/selectorMatches';
    export class BemCss {
        options: IOptions;
        style: string;
        matches: Match[];
        constructor(style: string, options?: IOptions);
        transformTemplate(template: any, options: any): string;
        transformAst(ast: any): void;
        getStyle(): string;
        getSalt(): string;
    }
}

declare module 'auto-bem/IOptions' {
    export interface IOptions {
        type?: 'host' | 'block' | 'auto';
        scopeId?: string;
        templateType?: 'mask' | 'html';
        useSalt?: boolean;
        salt?: string;
        filename?: string;
        minify?: boolean;
        reporter?: (error: Error) => void;
    }
}

