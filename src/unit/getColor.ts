const getColor=(vote:number)=>{
 if(vote>8) return 'green'
 else if (vote>5) return 'orange'
 else return 'red'
}
export default getColor