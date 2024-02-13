
export const Utils = {
    getItem(data, {id}) {
        return data.filter((item) => item.title === id)
    }
}