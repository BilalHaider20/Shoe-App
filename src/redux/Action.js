export const ADD_TO_CART= "AddtoCart";
 export const REMOVE_TO_CART= "RemovetoCart";
 export const INCREASE_QTY="IncreaseQty";
 export const DECREASE_QTY="DecreaseQty";
 export const EMPTY_CART ="Emptycart";

export const AddToCart=(item)=>{
    return {
        type:ADD_TO_CART,
        data:item
    };
}

export const RemoveToCart=(item_id)=>{
    return {
        type:REMOVE_TO_CART,
        data:item_id
    };
}

export const Increment=(itemQty)=>{
    return {
        type:INCREASE_QTY,
        data:itemQty
    };
}

export const Decrement=(itemQty)=>{
    return {
        type:DECREASE_QTY,
        data:itemQty
    };
}
export const Empty_Cart=()=>{
    return {
        type:EMPTY_CART
    };
}