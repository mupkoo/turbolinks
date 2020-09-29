import { HeadDetails } from "./head_details";
import { RenderCallback, RenderDelegate, Renderer } from "./renderer";
import { Snapshot } from "./snapshot";
import { RootSelector } from "./root_selector";
export { RenderCallback, RenderDelegate } from "./renderer";
export declare type PermanentElement = Element & {
    id: string;
};
export declare type Placeholder = {
    element: Element;
    permanentElement: PermanentElement;
};
export declare class SnapshotRenderer extends Renderer {
    readonly delegate: RenderDelegate;
    readonly currentSnapshot: Snapshot;
    readonly currentHeadDetails: HeadDetails;
    readonly newSnapshot: Snapshot;
    readonly newHeadDetails: HeadDetails;
    readonly newBody: HTMLBodyElement;
    readonly isPreview: boolean;
    readonly rootSelector: RootSelector;
    static render(delegate: RenderDelegate, callback: RenderCallback, currentSnapshot: Snapshot, newSnapshot: Snapshot, isPreview: boolean, rootSelector: RootSelector): void;
    constructor(delegate: RenderDelegate, currentSnapshot: Snapshot, newSnapshot: Snapshot, isPreview: boolean, rootSelector: RootSelector);
    render(callback: RenderCallback): void;
    mergeHead(): void;
    replaceBody(): void;
    shouldRender(): boolean;
    trackedElementsAreIdentical(): boolean;
    copyNewHeadStylesheetElements(): void;
    copyNewHeadScriptElements(): void;
    removeCurrentHeadProvisionalElements(): void;
    copyNewHeadProvisionalElements(): void;
    relocateCurrentBodyPermanentElements(): Placeholder[];
    assignNewBody(): void;
    replacePlaceholderElementsWithClonedPermanentElements(placeholders: Placeholder[]): void;
    activateNewBodyScriptElements(): void;
    focusFirstAutofocusableElement(): void;
    getNewHeadStylesheetElements(): Element[];
    getNewHeadScriptElements(): Element[];
    getCurrentHeadProvisionalElements(): Element[];
    getNewHeadProvisionalElements(): Element[];
    getCurrentBodyPermanentElements(): PermanentElement[];
    getNewBodyScriptElements(): HTMLScriptElement[];
}
//# sourceMappingURL=snapshot_renderer.d.ts.map