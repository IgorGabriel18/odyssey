export const renderIf = (condition: boolean, component: JSX.Element) => {
    return condition ? component : null;
};
