
//reference calling 
const jokes = document.querySelector('#jokes');
const jokebtn = document.querySelector('#jokebtn')


//creating a function to call the api and generate joke

//this method uses .then 
// const generateJokes = () => {
//     const setHeader = {
//       headers:{
//           Accept:'application/json'
//       }
//     }


//     fetch('https://icanhazdadjoke.com/',setHeader)
//     .then((res)  => res.json())
//     .then((data)=> jokes.innerHTML=data.joke)   
//     .catch((err)=>{
//         console.log(err);
//     })  
// }




//now doing the same thing using async function 


const generateJokes = async () => {
    const setHeader = {
        headers: {
            Accept: 'application/json'
        }
    }


    // await will wait for to return any thing and once returened it will store it in the given varible
    try {

        // fetching the api
        const res = await fetch('https://icanhazdadjoke.com/', setHeader)

        //converting the html content got from the api to json format  and storing it in data variable
        const data = await res.json()

        // displaying our joke to the screen
        jokes.innerHTML = data.joke

    } catch (error) {
        console.log(error)
    }

   


}
jokebtn.addEventListener('click', generateJokes)
generateJokes()