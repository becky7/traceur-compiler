// Options: --strong-mode
// Error: :7:1: delete is not allowed in strong mode

'use strong'

var o = {x: 1};
delete o.x;