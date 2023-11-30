console.log('person 1 : shows ticket')
console.log('person 2 : shows ticket')

const premovie = async()=>{
    const wifebringticks = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('ticket'),3000);
    });

const getPopcorn = new Promise((resolve, reject)=> resolve('popcorn'));

const addbutter = new Promise((resolve, reject)=> resolve('butter'));

const coldrinks = new Promise((resolve, reject)=> resolve('colddrinks'))

let ticket = await wifebringticks;

console.log(`wife : i have the ${ticket}`);
console.log('husband : we should go in');
console.log('wife : no i am hungry');

let popcorn = await getPopcorn;

console.log(`husband : i got some  ${popcorn}`);
console.log('husband : we should go in');
console.log('wife : i need butter on my popcorn');

let butter = await addbutter;

console.log(`husband : i got some  ${butter} on popcorn`);
console.log('husband : anything else');
console.log('wife : i need cold drink ');
console.log('husband : okk');

let colddrink = await coldrinks;

console.log(`husband : i got  ${colddrink}`);
console.log('husband : anything else');
console.log('wife : no lets go  ');
console.log('husband : okk sure');

return ticket;
}

premovie().then((m) => console.log(`person3: shows${m}`));

console.log('person4: shows ticket');
console.log('person5 : shows ticket');


