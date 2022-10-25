// @ts-ignore
export default (): number => window?.navigator?.connection?.downlink * 1024 / 8 || 0
