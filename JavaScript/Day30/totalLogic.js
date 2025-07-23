const title = 'Fashion Store';

export default function printTitle(){
    return title;
} 

export function printSubtitle(){
    return `<b>Kids, Men, Women Fashion 50% OFF</b>`;
}
export function calculateTotal(price, qty){
    return price * qty;
}