export const fetchData = async () => {
    const url = process.env.REACT_APP_API + "items/"
    try {
        const itemList = await fetch(url).then(res => res.json());
        // console.log("fetchData", itemList)
        return itemList.data;
    } catch (error) {
        console.log('Error', error)
    }
}

export const updateData = async (newList) => {
    try{
        const itemList = await fetch(process.env.REACT_APP_API + "items/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(newList),
        }).then(res => res.json());
        return itemList.data;
    } catch (error) {
        console.log('Error', error)
    }
}

export const addData = async (newItem) => {
    try{
        // console.log("addData input", newItem)
        // console.log("addData input", typeof newItem)
        const itemList = await fetch(process.env.REACT_APP_API + "additem/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(newItem),
        }).then(res => res.json());
        // console.log("addData output", itemList)
        return itemList.data;
    } catch (error) {
        console.log('Error', error)
    }
}