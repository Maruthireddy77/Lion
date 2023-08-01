

async function getdata(){
    const url='https://dummyjson.com/products';
await fetch(url)
.then(x=>x.json())
.catch(z=>console.log(z))
}
getdata();
