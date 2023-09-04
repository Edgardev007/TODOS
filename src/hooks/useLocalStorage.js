import React from "react";

export function useLocalStorage({itenName,initialValue}){
    const [items , setItems ] = React.useState(initialValue);
    const [loading , setLoading ] = React.useState(true);
    const [error , setError ] = React.useState(false);
    
    
    React.useEffect(()=>{
       setTimeout(()=>{
        try {
            const localStrorageItems = localStorage.getItem(itenName);
        let parsedItems;
        if(!localStrorageItems){
            localStorage.setItem(itenName,JSON.stringify(initialValue))
            parsedItems = initialValue;
          }else{
            parsedItems = JSON.parse(localStrorageItems)
            setItems(parsedItems)
          }
        } catch (error) {
            setError(error)
        }finally{

            setLoading(false)    
        }
       },5000) 
        
    },[initialValue,itenName]);
    
  
    const saveItems = (newItems) => {
      localStorage.setItem(itenName, JSON.stringify([...newItems]))
      setItems(newItems);
    }
    console.log(items)
    return {items ,saveItems,loading,error}
  }