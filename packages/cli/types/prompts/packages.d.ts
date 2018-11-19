export default function packagesPrompts(): Promise<{
    deps: string[];
    devDeps: string[];
}>;
