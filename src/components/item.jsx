

export default function Item(props) {
    const item = props["item"]

    const handleItemClicked = async (event) => {
        // console.log(event.target.getAttribute("name"))
        // console.log(event.target.getAttribute("alt"))
        let selectedItem = {
            "name": event.target.getAttribute("name"),
            "quantity": event.target.getAttribute("quantity"),
            "notes": event.target.getAttribute("notes"),
            "listtype": event.target.getAttribute("listtype"),
        }
        props.handleItemClicked(selectedItem)
    }

    const tryRequire = (path) => {
        try {
            try {
                console.log(require(`${path}`));
               } catch (err) {
                console.log(err)
            }

            console.log("try r", path)
            var f = new File([""], path);
            // console.log(f.size)
            
            let file = path
            console.log(file.name)
            if (file && !file.name) {
                // window.alert("Please select a file");
                console.log("Please select a file")
                return false;
             }
             if (file.size > 10e6) {
            //    window.alert("Please upload a file smaller than 10 MB");
               console.log("Please upload a file smaller than 10 MB")
               return false;
             }
             console.log(file.size)
        } catch (err) {
            console.log(err)
            return null;
        }
      };

    // console.log(props)
    return (<>
            <button type="submit" 
                    className={item["listtype"] === "p" ? "items itemsPurchase" : "items itemsMaster"}
                    name={item["name"]} 
                    quantity={item["quantity"]} 
                    notes={item["notes"]} 
                    listtype={item["listtype"]} 
                    onClick={handleItemClicked} 
            >
                {/* {console.log(tryRequire("../images/mint.png"))} */}
                <img className="itemImg" src={"./images/" + item["name"] +".png"} 
                     alt={item["name"][0]}
                     name={item["name"]} 
                     quantity={item["quantity"]} 
                     notes={item["notes"]} 
                     listtype={item["listtype"]}
                />
                {item["name"]}
            </button>
          </>);    
}

