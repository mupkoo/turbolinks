import { Controller, VisitOptions } from "./controller";
import { Locatable } from "./location";
import { RootSelector } from "./root_selector";
declare const _default: {
    readonly supported: boolean;
    controller: Controller;
    visit(location: Locatable, options?: Partial<VisitOptions> | undefined): void;
    clearCache(): void;
    setProgressBarDelay(delay: number): void;
    setRootSelector(selector: RootSelector): void;
    start(): void;
};
export default _default;
//# sourceMappingURL=namespace.d.ts.map