export const customIconData: Record<string, string> = {
  dot: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1024" height="1024"><circle cx="50%" cy="50%" r="50%"/></svg>`
}

export const customIconType = Object.keys(customIconData)
export type CustomIconType = typeof customIconType[number]