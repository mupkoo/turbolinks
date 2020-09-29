export function assignBody(newBody, rootSelector) {
    if (rootSelector) {
        var oldRoot = document.body.querySelector(rootSelector);
        var newRoot = newBody.querySelector(rootSelector);
        if (oldRoot && newRoot) {
            var parent_1 = oldRoot.parentElement;
            if (parent_1)
                return parent_1.replaceChild(newRoot, oldRoot);
        }
    }
    document.body = newBody;
}
//# sourceMappingURL=root_selector.js.map