var updateBtns=document.getElementsByClassName("update-cart")

for(var i=0;i<updateBtns.length;i++){
    updateBtns[i].addEventListener("click",function(){
        var productId=this.dataset.product
        var action=this.dataset.action
        sumbitOrder(productId,action)
    })
}

function sumbitOrder(productId,action){
    console.log("i am submitting order")
    console.log(csrftoken)
    var url="/update-order/"
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productId':productId,'action':action})
    })
    .then((response)=>{
         return response.json()})
    .then((data)=>{
        console.log("data",data)
        location.reload()
    })
}