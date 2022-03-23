export const background = (dark: boolean) => {

    if(dark){
        return `
        .container {
            background-color: #363636;
        }
    `
    } else {
        return `
        .container {
            background-color: #e3e3e3;
        }
        `
    }
}