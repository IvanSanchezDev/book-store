

export const SelectCategorias = ( {handleSelectChange}) => {
    
   

    const handleChange = (e) => {
        const value = e.target.value;
        handleSelectChange(value)
      };

  return (
    <div>
        <select defaultValue={"fantasia"} onChange={handleChange}>
            <option selected value="Fantansia">Fantansia</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Terror">Terror</option>
        </select>
    </div>
  );
};
