//  Copyright (c) 2017 Juho Enala

function selfify(view) {
    var proto = view.constructor.prototype;
    Object.keys(proto).forEach(function(key) {
        if (typeof view[key] == 'function') {
            var func = view[key];
            view[key] = function() {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(view);
                return func.apply(view, args);
            }
        }
    });
    return view;
}