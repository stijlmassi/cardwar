export const background = (dark: boolean) => {

    if(dark){
        return `
        .mainContainer {
            background-color: #363636;
        }
    `
    } else {
        return `
        .mainContainer {
            background-color: #e3e3e3;
        }
        `
    }
}