export const useId = (prefix = 'id')=>{

    return prefix + (Math.floor(Math.random()*10)) + (Math.floor(Math.random()*10)) + (Math.floor(Math.random()*10))
}