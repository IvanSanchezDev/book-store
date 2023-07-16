import { useState, useEffect } from "react";
import { ListBook } from "../components/listBook";


export const Books=()=>{
    const [listBooksState, setBooks]=useState([]);

    useEffect(()=>{
        (async()=>{
            try {
                const response=await fetch("../../books.json");
                const result=await response.json();
                
                setBooks(result.library)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])

    return(
        <>
            <ListBook listBook={listBooksState}/>
        </>
    )
}