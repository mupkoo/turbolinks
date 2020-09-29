import { Location } from "./location";
import { Snapshot } from "./snapshot";
import { RenderCallback, RenderDelegate } from "./snapshot_renderer";
import { RootSelector } from "./root_selector";
export declare type RenderOptions = {
    snapshot: Snapshot;
    error: string;
    isPreview: boolean;
    rootSelector: RootSelector;
};
export declare class View {
    readonly delegate: RenderDelegate;
    readonly htmlElement: HTMLHtmlElement;
    constructor(delegate: RenderDelegate);
    getRootLocation(): Location;
    getElementForAnchor(anchor: string): Element | null;
    getSnapshot(): Snapshot;
    render({ snapshot, error, isPreview, rootSelector }: Partial<RenderOptions>, callback: RenderCallback): void;
    markAsPreview(isPreview: boolean | undefined): void;
    renderSnapshot(snapshot: Snapshot, isPreview: boolean | undefined, callback: RenderCallback, rootSelector: RootSelector): void;
    renderError(error: string | undefined, callback: RenderCallback): void;
}
//# sourceMappingURL=view.d.ts.map