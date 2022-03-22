export const links = (dark: boolean) => {

    if(dark){
        return `
        nav p {
            border-bottom: #212121 .2rem solid;
        }
        nav p:hover, .selectedPageNavBar {
            background-color: #363636;
            color: white;
            border-bottom-color: white;
        }
    `
    } else {
        return `
        nav p {
            border-bottom: #cbcbcb .2rem solid;
        }
        nav p:hover, .selectedPageNavBar {
            background-color: #e3e3e3;
            color: #101010;
            border-bottom-color: #101010;
        }
        `
    }
}