export interface UserForRegistration {
    name?:string,
    password:string,
    alias:string
}

export interface DashboardColumnPanelData {
    title:string,
    value?:string,
    isValid?: boolean
}