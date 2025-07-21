const MappedList = () => {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    const items = animals.map((item, i) => <li key={i}>{item}</li>)

    return(
        <ul>
            {items}
        </ul>
    )
}

export default MappedList