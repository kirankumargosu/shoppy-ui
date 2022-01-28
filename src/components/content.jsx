import { useEffect, useState } from "react";
import Item from "./item";
import { fetchData, updateData, addData} from "../api/api"

export default function Content() {

    const [items, setItems] = useState([])
    const [itemName, setItemName] = useState("")
    const [validItem, setValidItem] = useState(false)

    useEffect( () => {
        fetchData().then(response => {setItems(response); });
    }, [])
    
    
    const handleItemClicked = async(item) => {
        const newItems = items.slice()
        newItems.map(ni => {ni["name"] === item["name"] ? ni["listtype"] = ni["listtype"] === "p" ? "m" : "p" : void 0})
        updateData(newItems).then(response => {setItems(response); });
    }

    const handleItemChange = async (evt) => {
        setItemName(evt.target.value)
        setValidItem(false)
        if ((evt.target.value).length >= 3){
            setValidItem(true)
        }
    }
    const handleAddNew = async(evt) => {
        // console.log("handleAddNew", evt)

        evt.preventDefault()
        const { itemname } = evt.target.elements;
        let newItem = [{
          name: itemname.value,
          quantity: "",
          notes: "",
          listtype: "p",
        }];
        // console.log("handleAddNew", newItem)
        addData(newItem).then(response => {setItems(response); });
        setItemName("")
    }

    return (<>
            <div className="topic topicPurchase">To Purchase</div>
            <div id="outer">
                {items.map(i => {
                    return(i["listtype"] === "p" ?
                                <div className="inner" key={i["name"]}>
                                    <div key={i["name"]}>
                                        <Item item = {i}
                                            handleItemClicked = {handleItemClicked}/>
                                    </div>
                                </div> 
                                :
                                void 0
                            )
                        }
                    )
                }
            </div>
            <div className="center">
                <form onSubmit={handleAddNew}>
                    <label className="lblAddNew"> 
                        Add New 
                    </label>
                    <input className="txtAddNew" 
                           type="text" name="itemname" 
                           placeholder="item name" 
                           value={itemName} 
                           onChange={handleItemChange}/>
                    <button className= {validItem === true ? "btnAddNew btnAddNewEnable" : "btnAddNew btmAddNewDisable"}
                            disabled={!validItem}
                            type="submit">
                        Add
                    </button>
                </form>
            </div>
            <hr/>

            <div className="topic topicMaster">Master List</div>
            <div id="outer">
                {items.map(i => {
                    return(i["listtype"] === "m" ?
                    <div className="inner" key={i["name"]}>
                                <div key={i["name"]}>
                                    <Item item = {i}
                                        handleItemClicked = {handleItemClicked}/>
                                </div>
                                </div>
                                :
                                void 0
                            )
                        }
                    )
                }
            </div>

          </>);
}
