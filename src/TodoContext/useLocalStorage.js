import React from "react";

function useLocalStorage( itemName, initialValue ){
    
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false)

    React.useEffect(() => {
      setTimeout( () => {
        try {
          let localStorageItem = localStorage.getItem(itemName)
        let parsedItem ;
  
        if (!localStorageItem){
          localStorage.setItem(JSON.stringify(initialValue))
          parsedItem = initialValue
        }else{
          
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false)
        }
        catch(error){
          setLoading(true)

          setError(error)
        }
      }, 2000)
    
    }, [])
  
    

  
    function saveItem(newItem){
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
  
      return { item, saveItem, loading, error}
  }

export {useLocalStorage}