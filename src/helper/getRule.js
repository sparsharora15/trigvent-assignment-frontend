export default function GetRule(type) {
    return JSON.parse(localStorage.getItem('menuData')).find(el => el.type === type)
}