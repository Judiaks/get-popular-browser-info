export default (): number => {
    // 从小到大返回，减少打特定补丁的概率
    if (!('Promise' in window && 'Symbol' in window)) {
        return 5
    } else if (!Array.prototype.includes) {
        return 6
    } else if (!Object.getOwnPropertyDescriptors) {
        return 7
    } else if (!Promise || !Promise.prototype.finally) {
        return 8
    } else if (!Object.fromEntries) {
        return 9
    } else if (!Promise || !Promise.allSettled) {
        return 10
    } else if (!('WeakRef' in window)) {
        return 11
    } else if (!('hasOwn' in Object)) {
        return 12
    }
    return 13
}

