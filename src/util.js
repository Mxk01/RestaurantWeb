export default function  formatCurrency(num)
{
    // toLocaleString converts our number with one decimal
    // to a string format  
    return `$ ${Number(num.toFixed(1)).toLocaleString()  }`
}