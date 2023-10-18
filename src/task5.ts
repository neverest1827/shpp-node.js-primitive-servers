// 5.

// google for Record type
type StringEntries = Record<string, string>
function stringEntries(a: StringEntries) {
    return Array.isArray(a) ? a : Object.keys(a)
 }