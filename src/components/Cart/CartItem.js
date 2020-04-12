import React from 'react'

export default function CartItem({value,item}) {
    const {id,img,title,price,total} = item;
    const {increment,decrement,deleteItem} = value;
    return (
        

        <div className="container-fluid mt-3 text-center">
            <div className="row">
                <div className="col-2 text-uppercase mx-auto">
                    <img src={img} className="img-fluid img-icon" style={{width:"5rem",height:" 5rem"}} alt="Product"></img>
                  </div>
                <div className="col-2  mx-auto">
                     <p>{title}</p>
                  </div>
                <div className="col-2  mx-auto">
                     <p>{price}</p>
                  </div>
                <div className="col-2  mx-auto">
                     <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                     <span className="btn btn-black mx-1" >{item.count}</span>
                     <span className="btn btn-black mx-1" onClick={()=>increment(id)}> +</span>
                  </div>
                <div className="col-2  mx-auto" style={{cursor:"pointer"}} onClick={()=>deleteItem(id)}>
                <i className="fas fa-trash-alt" ></i>
                  </div>
                  <div className="col-2  mx-auto">
                     <p><strong>Item Total : ${total}</strong></p>
                  </div>
            </div>
        </div>
    )
}
