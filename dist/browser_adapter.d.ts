import { Adapter } from "./adapter";
import { Controller } from "./controller";
import { Locatable } from "./location";
import { ProgressBar } from "./progress_bar";
import { Action } from "./types";
import { Visit } from "./visit";
export declare class BrowserAdapter implements Adapter {
    readonly controller: Controller;
    readonly progressBar: ProgressBar;
    progressBarTimeout?: number;
    constructor(controller: Controller);
    visitProposedToLocationWithAction(location: Locatable, action: Action): void;
    visitStarted(visit: Visit): void;
    visitRequestStarted(visit: Visit): void;
    visitRequestProgressed(visit: Visit): void;
    visitRequestCompleted(visit: Visit): void;
    visitRequestFailedWithStatusCode(visit: Visit, statusCode: number): void;
    visitRequestFinished(visit: Visit): void;
    visitCompleted(visit: Visit): void;
    pageInvalidated(): void;
    visitFailed(visit: Visit): void;
    visitRendered(visit: Visit): void;
    showProgressBarAfterDelay(): void;
    showProgressBar: () => void;
    hideProgressBar(): void;
    reload(): void;
}
//# sourceMappingURL=browser_adapter.d.ts.map