export interface CuriConfigSource {
    dir: string;
    routes: string;
    components: string;
}
export interface CuriConfigStatic {
    output: string;
    scripts: string;
    copy: Array<string>;
}
export interface CuriConfig {
    source: CuriConfigSource;
    static?: CuriConfigStatic;
}
